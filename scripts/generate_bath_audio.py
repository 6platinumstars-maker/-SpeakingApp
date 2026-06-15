#!/home/ps/.venv/bin/python
import argparse
import asyncio
from pathlib import Path
import re

import edge_tts
import lameenc
import miniaudio


VOICES = {
    "en_female": "en-US-EmmaMultilingualNeural",
    "jp_female": "ja-JP-NanamiNeural",
}

RATES = {
    "en_slow": "-20%",
    "en_fast": "+20%",
    "jp_default": "+0%",
}

SEQUENCE = ["fast", "slow", "fast", "slow", "fast"]
MID_SILENCE_SECONDS = 1
END_SILENCE_SECONDS = 3
MAX_RETRIES = 6

SECTION_RE = re.compile(r"(section\d{2}):\s*\[(.*?)\n\s*\]", re.DOTALL)
ENTRY_RE = re.compile(
    r"\{\s*position:\s*(?P<position>\d+),\s*jp:\s*\"(?P<jp>(?:\\.|[^\"])*)\",\s*en:\s*\"(?P<en>(?:\\.|[^\"])*)\"\s*\}",
    re.DOTALL,
)


def unescape_js_string(value: str) -> str:
    replacements = {
        r"\\n": "\n",
        r"\\r": "\r",
        r"\\t": "\t",
        r'\\"': '"',
        r"\\'": "'",
        r"\\\\": "\\",
    }
    for src, dest in replacements.items():
        value = value.replace(src, dest)
    return value


def sanitize_tts_text(value: str) -> str:
    return value.replace('"', "").replace("“", "").replace("”", "")


def load_bath_data(source_path: Path) -> dict[str, list[dict[str, str | int]]]:
    source = source_path.read_text(encoding="utf-8")
    data: dict[str, list[dict[str, str | int]]] = {}

    for section_match in SECTION_RE.finditer(source):
        section_name = section_match.group(1)
        block = section_match.group(2)
        entries = []
        for entry_match in ENTRY_RE.finditer(block):
            entries.append(
                {
                    "position": int(entry_match.group("position")),
                    "jp": unescape_js_string(entry_match.group("jp")),
                    "en": unescape_js_string(entry_match.group("en")),
                }
            )
        if len(entries) != 10:
            raise RuntimeError(f"{section_name} expected 10 entries, got {len(entries)}")
        data[section_name] = entries

    if len(data) != 77:
        raise RuntimeError(f"Expected 77 sections, got {len(data)}")

    return data


async def synthesize(text: str, voice: str, rate: str, out_path: Path, semaphore: asyncio.Semaphore) -> None:
    if out_path.exists() and out_path.stat().st_size > 0:
        return

    out_path.parent.mkdir(parents=True, exist_ok=True)
    async with semaphore:
        last_error = None
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                communicate = edge_tts.Communicate(text=text, voice=voice, rate=rate)
                await communicate.save(str(out_path))
                break
            except Exception as exc:
                last_error = exc
                if out_path.exists() and out_path.stat().st_size == 0:
                    out_path.unlink()
                if attempt == MAX_RETRIES:
                    raise
                await asyncio.sleep(min(2 ** attempt, 20))
        if last_error is not None and not out_path.exists():
            raise last_error

    if out_path.stat().st_size == 0:
        raise RuntimeError(f"Generated empty file: {out_path}")


def load_pcm(path: Path) -> tuple[bytes, int, int, int]:
    decoded = miniaudio.decode_file(str(path))
    return bytes(decoded.samples), decoded.sample_rate, decoded.nchannels, decoded.sample_width


def make_silence(sample_rate: int, channels: int, sample_width: int, seconds: int) -> bytes:
    frame_count = sample_rate * seconds
    return b"\x00" * frame_count * channels * sample_width


def encode_mp3(pcm: bytes, sample_rate: int, channels: int, sample_width: int) -> bytes:
    if sample_width != 2:
        raise RuntimeError(f"Unsupported sample width for mp3 encoding: {sample_width}")

    encoder = lameenc.Encoder()
    encoder.set_bit_rate(128)
    encoder.set_in_sample_rate(sample_rate)
    encoder.set_channels(channels)
    encoder.set_quality(2)
    return encoder.encode(pcm) + encoder.flush()


def build_5en_for_section(base_dir: Path, section_name: str, sentence_ids: list[str]) -> None:
    en_dir = base_dir / "mp3" / "en" / section_name
    out_dir = base_dir / "mp3" / "5en" / section_name
    out_dir.mkdir(parents=True, exist_ok=True)

    for sentence_id in sentence_ids:
        chunks = []
        sample_rate = None
        channels = None
        sample_width = None

        for idx, speed in enumerate(SEQUENCE):
            src = en_dir / f"{sentence_id}_female_{speed}.mp3"
            pcm, cur_rate, cur_channels, cur_width = load_pcm(src)
            if sample_rate is None:
                sample_rate = cur_rate
                channels = cur_channels
                sample_width = cur_width
            elif (sample_rate, channels, sample_width) != (cur_rate, cur_channels, cur_width):
                raise RuntimeError(f"Audio format mismatch in {src}")

            chunks.append(pcm)
            silence = END_SILENCE_SECONDS if idx == len(SEQUENCE) - 1 else MID_SILENCE_SECONDS
            chunks.append(make_silence(sample_rate, channels, sample_width, silence))

        out_path = out_dir / f"{sentence_id}_female_5x.mp3"
        out_path.write_bytes(encode_mp3(b"".join(chunks), sample_rate, channels, sample_width))


async def generate_all(base_dir: Path, source_path: Path) -> None:
    bath_data = load_bath_data(source_path)
    semaphore = asyncio.Semaphore(2)
    tasks = []
    sentence_ids_by_section: dict[str, list[str]] = {}

    for section_name, entries in bath_data.items():
        sentence_ids = []
        for entry in entries:
            sentence_id = f"{entry['position']:02d}"
            sentence_ids.append(sentence_id)

            en_dir = base_dir / "mp3" / "en" / section_name
            jp_dir = base_dir / "mp3" / "jp" / section_name

            tasks.append(
                synthesize(
                    sanitize_tts_text(str(entry["en"])),
                    VOICES["en_female"],
                    RATES["en_slow"],
                    en_dir / f"{sentence_id}_female_slow.mp3",
                    semaphore,
                )
            )
            tasks.append(
                synthesize(
                    sanitize_tts_text(str(entry["en"])),
                    VOICES["en_female"],
                    RATES["en_fast"],
                    en_dir / f"{sentence_id}_female_fast.mp3",
                    semaphore,
                )
            )
            tasks.append(
                synthesize(
                    str(entry["jp"]),
                    VOICES["jp_female"],
                    RATES["jp_default"],
                    jp_dir / f"{sentence_id}_female.mp3",
                    semaphore,
                )
            )

        sentence_ids_by_section[section_name] = sentence_ids

    await asyncio.gather(*tasks)

    for section_name, sentence_ids in sentence_ids_by_section.items():
        build_5en_for_section(base_dir, section_name, sentence_ids)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--base-dir",
        type=Path,
        default=Path("/home/ps/SpeakingApp"),
    )
    parser.add_argument(
        "--source",
        type=Path,
        default=Path("/home/ps/SpeakingApp/bath-data.js"),
    )
    args = parser.parse_args()

    asyncio.run(generate_all(args.base_dir, args.source))


if __name__ == "__main__":
    main()

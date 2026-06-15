#!/home/ps/.venv/bin/python
from pathlib import Path

import lameenc
import miniaudio


BASE_DIR = Path("/home/ps/SpeakingApp/mp3/77jp")
MID_SILENCE_SECONDS = 6


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


def section_sort_key(path: Path) -> int:
    return int(path.stem.replace("section", ""))


def build_position_folder(position_dir: Path) -> None:
    files = sorted(position_dir.glob("section*.mp3"), key=section_sort_key)
    if len(files) != 77:
        raise RuntimeError(f"{position_dir} expected 77 files, got {len(files)}")

    chunks = []
    sample_rate = None
    channels = None
    sample_width = None

    for idx, src in enumerate(files):
        pcm, cur_rate, cur_channels, cur_width = load_pcm(src)
        if sample_rate is None:
            sample_rate = cur_rate
            channels = cur_channels
            sample_width = cur_width
        elif (sample_rate, channels, sample_width) != (cur_rate, cur_channels, cur_width):
            raise RuntimeError(f"Audio format mismatch in {src}")

        chunks.append(pcm)
        if idx != len(files) - 1:
            chunks.append(make_silence(sample_rate, channels, sample_width, MID_SILENCE_SECONDS))

    out_path = position_dir / "all_sections.mp3"
    out_path.write_bytes(encode_mp3(b"".join(chunks), sample_rate, channels, sample_width))


def main() -> None:
    for position_dir in sorted((p for p in BASE_DIR.iterdir() if p.is_dir()), key=lambda path: int(path.name)):
        build_position_folder(position_dir)
    print("done")


if __name__ == "__main__":
    main()

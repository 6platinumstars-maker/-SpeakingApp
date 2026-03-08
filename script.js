const player = document.getElementById("player");
const statusText = document.getElementById("status");

let currentSection = 1;
let endSection = 1;

function startPlayback() {
  const startInput = document.getElementById("startSection");
  const countInput = document.getElementById("count");

  const start = parseInt(startInput.value, 10);
  const count = parseInt(countInput.value, 10);

  if (isNaN(start) || start < 1 || start > 77) {
    statusText.textContent = "Start Section must be between 1 and 77.";
    return;
  }

  if (isNaN(count) || count < 1) {
    statusText.textContent = "Count is invalid.";
    return;
  }

  currentSection = start;
  endSection = Math.min(start + count - 1, 77);

  playCurrentSection();
}

function playCurrentSection() {
  const filename = String(currentSection).padStart(2, "0");
  const path = `audio/section${filename}.mp3`;

  statusText.textContent = `Playing: section${filename}.mp3 (${currentSection} / ${endSection})`;

  player.src = path;
  player.play().catch(err => {
    console.error("Playback failed:", err);
    statusText.textContent = `Error: ${path} could not be played`;
  });
}

player.addEventListener("ended", () => {
  if (currentSection < endSection) {
    currentSection++;
    playCurrentSection();
  } else {
    statusText.textContent = `Finished: section${String(endSection).padStart(2, "0")}.mp3`;
  }
});
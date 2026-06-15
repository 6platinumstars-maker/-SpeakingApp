const jpText = document.getElementById("jpText");
const enText = document.getElementById("enText");
const progress = document.getElementById("progress");
const hintText = document.getElementById("hintText");
const sectionName = document.getElementById("sectionName");
const sectionSelect = document.getElementById("sectionSelect");

const modeExampleBtn = document.getElementById("modeExampleBtn");
const modeEnglishAudioBtn = document.getElementById("modeEnglishAudioBtn");
const modeJapaneseAudioBtn = document.getElementById("modeJapaneseAudioBtn");
const mode77Btn = document.getElementById("mode77Btn");

const prevBtn = document.getElementById("prevBtn");
const playEnglishBtn = document.getElementById("playEnglishBtn");
const nextBtn = document.getElementById("nextBtn");

const modeButtons = [
  modeExampleBtn,
  modeEnglishAudioBtn,
  modeJapaneseAudioBtn,
  mode77Btn,
];

let currentSectionKey = "section01";
let currentData = bathData[currentSectionKey];
let currentIndex = 0;
let currentMode = "example";
let currentAudio = null;

function setActiveMode(mode) {
  currentMode = mode;
  modeButtons.forEach((button) => button.classList.remove("is-active"));

  if (mode === "example") {
    modeExampleBtn.classList.add("is-active");
  }
}

function getCurrentItem() {
  return currentData[currentIndex];
}

function getEnglishAudioPath() {
  const item = getCurrentItem();
  return `mp3/en/${currentSectionKey}/${String(item.position).padStart(2, "0")}_female_fast.mp3`;
}

function stopCurrentAudio() {
  if (!currentAudio) {
    return;
  }

  currentAudio.pause();
  currentAudio.currentTime = 0;
}

function renderExample() {
  const item = getCurrentItem();
  const hint = getBathHint(currentSectionKey);

  sectionName.textContent = currentSectionKey;
  progress.textContent = `${currentIndex + 1} / ${currentData.length}`;
  jpText.textContent = item.jp;
  enText.textContent = item.en;
  hintText.textContent = hint;
  hintText.classList.toggle("is-empty", hint === "");
}

function render() {
  if (currentMode === "example") {
    renderExample();
  }
}

function moveQuestion(step) {
  currentIndex = (currentIndex + step + currentData.length) % currentData.length;
  stopCurrentAudio();
  render();
}

function playEnglishAudio() {
  stopCurrentAudio();

  currentAudio = new Audio(getEnglishAudioPath());
  currentAudio.play().catch((error) => {
    console.error("Audio playback failed:", error);
  });
}

modeExampleBtn.addEventListener("click", () => {
  setActiveMode("example");
  render();
});

modeEnglishAudioBtn.addEventListener("click", () => {
  setActiveMode("english-audio");
});

modeJapaneseAudioBtn.addEventListener("click", () => {
  setActiveMode("japanese-audio");
});

mode77Btn.addEventListener("click", () => {
  setActiveMode("77");
});

prevBtn.addEventListener("click", () => {
  moveQuestion(-1);
});

nextBtn.addEventListener("click", () => {
  moveQuestion(1);
});

playEnglishBtn.addEventListener("click", playEnglishAudio);

sectionSelect.addEventListener("change", (event) => {
  currentSectionKey = event.target.value;
  currentData = bathData[currentSectionKey];
  currentIndex = 0;
  stopCurrentAudio();
  render();
});

setActiveMode("example");
render();

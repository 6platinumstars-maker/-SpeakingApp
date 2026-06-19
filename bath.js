const jpBlock = document.getElementById("jpBlock");
const enBlock = document.getElementById("enBlock");
const hintBlock = document.getElementById("hintBlock");
const jpText = document.getElementById("jpText");
const enText = document.getElementById("enText");
const progress = document.getElementById("progress");
const hintText = document.getElementById("hintText");
const sectionName = document.getElementById("sectionName");
const sectionSelect = document.getElementById("sectionSelect");
const sentenceCard = document.getElementById("sentenceCard");

const modeExampleBtn = document.getElementById("modeExampleBtn");
const modeEnglishAudioBtn = document.getElementById("modeEnglishAudioBtn");
const modeJapaneseAudioBtn = document.getElementById("modeJapaneseAudioBtn");
const mode77Btn = document.getElementById("mode77Btn");

const prevBtn = document.getElementById("prevBtn");
const centerControl = document.getElementById("centerControl");
const nextBtn = document.getElementById("nextBtn");

const modeButtons = {
  example: modeExampleBtn,
  "english-audio": modeEnglishAudioBtn,
  "japanese-audio": modeJapaneseAudioBtn,
  "77": mode77Btn,
};

let currentSectionKey = "section01";
let currentData = bathData[currentSectionKey];
let currentIndex = 0;
let currentMode = "example";
let currentAudio = null;
let englishAudioRevealStage = 0;
let isHintVisible = false;
let japaneseAudioHasReveal = false;
let exampleHasEnglishReveal = false;
let continuous77Position = 1;
let continuous77Entries = getBathEntriesByPosition(1);
let continuous77Index = 0;
let continuous77HasReveal = false;
let currentSectionSelectMode = "section";
let isCurrentAudioPlaying = false;
let currentAudioPath = null;

function setCenterControlLabel(label) {
  centerControl.textContent = label;
}

function buildSectionOptions() {
  return Array.from({ length: 77 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `<option value="section${number}">Section ${number}</option>`;
  }).join("");
}

function buildContinuous77Options() {
  return Array.from({ length: 10 }, (_, index) => {
    const number = String(index + 1);
    return `<option value="${number}">${number}</option>`;
  }).join("");
}

function setSectionSelectMode(mode) {
  if (currentSectionSelectMode === mode) {
    if (mode === "section") {
      sectionSelect.value = currentSectionKey;
    } else {
      sectionSelect.value = String(continuous77Position);
    }
    return;
  }

  if (mode === "section") {
    sectionSelect.innerHTML = buildSectionOptions();
    sectionSelect.value = currentSectionKey;
  } else {
    sectionSelect.innerHTML = buildContinuous77Options();
    sectionSelect.value = String(continuous77Position);
  }

  currentSectionSelectMode = mode;
}

function getCurrentItem() {
  return currentData[currentIndex];
}

function getSectionKeys() {
  return Object.keys(bathData);
}

function getNextSectionKey(sectionKey) {
  const sectionKeys = getSectionKeys();
  const currentSectionPosition = sectionKeys.indexOf(sectionKey);

  if (currentSectionPosition === -1) {
    return sectionKeys[0];
  }

  return sectionKeys[(currentSectionPosition + 1) % sectionKeys.length];
}

function getEnglishFastAudioPath() {
  const item = getCurrentItem();
  return `mp3/en/${currentSectionKey}/${String(item.position).padStart(2, "0")}_female_fast.mp3`;
}

function get5EnAudioPath() {
  const item = getCurrentItem();
  return `mp3/5en/${currentSectionKey}/${String(item.position).padStart(2, "0")}_female_5x.mp3`;
}

function getJapaneseSectionAudioPath() {
  return `mp3/jp/${currentSectionKey}/all_sentences.mp3`;
}

function get77AudioPath() {
  return `mp3/77jp/${continuous77Position}/all_sections.mp3`;
}

function resetCurrentAudio() {
  if (!currentAudio) {
    isCurrentAudioPlaying = false;
    currentAudioPath = null;
    return;
  }

  currentAudio.pause();
  currentAudio.currentTime = 0;
  isCurrentAudioPlaying = false;
  currentAudioPath = null;
  currentAudio = null;
}

function playAudio(path) {
  resetCurrentAudio();
  currentAudio = new Audio(path);
  currentAudioPath = path;
  currentAudio.addEventListener("ended", () => {
    isCurrentAudioPlaying = false;
  });
  currentAudio.play().catch((error) => {
    console.error("Audio playback failed:", error);
    isCurrentAudioPlaying = false;
  });
  isCurrentAudioPlaying = true;
}

function pauseCurrentAudio() {
  if (!currentAudio) {
    return;
  }

  currentAudio.pause();
  isCurrentAudioPlaying = false;
}

function resumeCurrentAudio() {
  if (!currentAudio) {
    return;
  }

  currentAudio.play().catch((error) => {
    console.error("Audio playback failed:", error);
    isCurrentAudioPlaying = false;
  });
  isCurrentAudioPlaying = true;
}

function syncContinuous77Selection(value) {
  continuous77Position = Number(value);
  continuous77Entries = getBathEntriesByPosition(continuous77Position);
  continuous77Index = 0;
  continuous77HasReveal = false;
}

function setBlockVisibility({ showJapanese, showEnglish, showHint }) {
  jpBlock.classList.toggle("is-hidden", !showJapanese);
  enBlock.classList.toggle("is-hidden", !showEnglish);
  hintBlock.classList.toggle("is-hidden", !showHint);
}

function renderShared() {
  const item = getCurrentItem();
  const hint = getBathHint(currentSectionKey);

  sectionName.textContent = currentSectionKey;
  progress.textContent = `${currentIndex + 1} / ${currentData.length}`;
  jpText.textContent = item.jp;
  enText.textContent = item.en;
  hintText.textContent = hint;
  hintText.classList.toggle("is-empty", hint === "");
}

function renderExample() {
  renderShared();
  setBlockVisibility({
    showJapanese: true,
    showEnglish: exampleHasEnglishReveal,
    showHint: true,
  });
  setCenterControlLabel("英語音声を聞く");
  centerControl.disabled = false;
  setSectionSelectMode("section");
}

function renderEnglishAudio() {
  renderShared();

  setBlockVisibility({
    showJapanese: englishAudioRevealStage >= 2,
    showEnglish: englishAudioRevealStage >= 1,
    showHint: isHintVisible,
  });

  setCenterControlLabel("ヒントを見る");
  centerControl.disabled = false;
  setSectionSelectMode("section");
}

function renderJapaneseAudio() {
  renderShared();

  setBlockVisibility({
    showJapanese: japaneseAudioHasReveal,
    showEnglish: japaneseAudioHasReveal,
    showHint: isHintVisible,
  });

  setCenterControlLabel("ヒントを見る");
  centerControl.disabled = false;
  setSectionSelectMode("section");
}

function renderContinuous77() {
  const item = continuous77Entries[continuous77Index];
  const hint = getBathHint(item.section);

  sectionName.textContent = item.section;
  progress.textContent = `${continuous77Index + 1} / ${continuous77Entries.length}`;
  jpText.textContent = item.jp;
  enText.textContent = item.en;
  hintText.textContent = hint;
  hintText.classList.toggle("is-empty", hint === "");

  setBlockVisibility({
    showJapanese: continuous77HasReveal,
    showEnglish: continuous77HasReveal,
    showHint: continuous77HasReveal,
  });

  setCenterControlLabel("再生/一時停止");
  centerControl.disabled = false;
  setSectionSelectMode("77");
}

function render() {
  if (currentMode === "example") {
    renderExample();
    return;
  }

  if (currentMode === "english-audio") {
    renderEnglishAudio();
    return;
  }

  if (currentMode === "japanese-audio") {
    renderJapaneseAudio();
    return;
  }

  if (currentMode === "77") {
    renderContinuous77();
  }
}

function setActiveMode(mode) {
  currentMode = mode;

  Object.values(modeButtons).forEach((button) => button.classList.remove("is-active"));
  modeButtons[mode]?.classList.add("is-active");

  if (mode === "english-audio") {
    englishAudioRevealStage = 0;
    isHintVisible = false;
    japaneseAudioHasReveal = false;
    render();
    playAudio(get5EnAudioPath());
    return;
  }

  if (mode === "japanese-audio") {
    englishAudioRevealStage = 0;
    isHintVisible = false;
    japaneseAudioHasReveal = false;
    currentIndex = 0;
    render();
    playAudio(getJapaneseSectionAudioPath());
    return;
  }

  if (mode === "77") {
    englishAudioRevealStage = 0;
    isHintVisible = false;
    japaneseAudioHasReveal = false;
    syncContinuous77Selection(1);
    resetCurrentAudio();
    render();
    return;
  }

  isHintVisible = true;
  englishAudioRevealStage = 2;
  japaneseAudioHasReveal = true;
  exampleHasEnglishReveal = false;
  continuous77HasReveal = false;
  resetCurrentAudio();
  render();
}

function showHint() {
  isHintVisible = true;
  render();
}

function playExampleEnglishAudio() {
  playAudio(getEnglishFastAudioPath());
}

function advanceExampleReveal() {
  if (currentMode !== "example") {
    return;
  }

  if (!exampleHasEnglishReveal) {
    exampleHasEnglishReveal = true;
    render();
    return;
  }

  if (currentIndex < currentData.length - 1) {
    currentIndex += 1;
  } else {
    currentSectionKey = getNextSectionKey(currentSectionKey);
    currentData = bathData[currentSectionKey];
    sectionSelect.value = currentSectionKey;
    currentIndex = 0;
  }

  exampleHasEnglishReveal = false;
  resetCurrentAudio();
  render();
}

function advanceEnglishAudioReveal() {
  if (currentMode !== "english-audio") {
    return;
  }

  if (englishAudioRevealStage < 2) {
    englishAudioRevealStage += 1;
    render();
  }
}

function advanceJapaneseAudioReveal() {
  if (currentMode !== "japanese-audio") {
    return;
  }

  if (!japaneseAudioHasReveal) {
    japaneseAudioHasReveal = true;
    render();
    return;
  }

  if (currentIndex < currentData.length - 1) {
    currentIndex += 1;
    render();
  }
}

function advanceContinuous77Reveal() {
  if (currentMode !== "77") {
    return;
  }

  if (!continuous77HasReveal) {
    continuous77HasReveal = true;
    render();
    return;
  }

  if (continuous77Index < continuous77Entries.length - 1) {
    continuous77Index += 1;
    render();
  }
}

function moveQuestion(step) {
  currentIndex = (currentIndex + step + currentData.length) % currentData.length;
  resetCurrentAudio();

  if (currentMode === "english-audio") {
    englishAudioRevealStage = 0;
    isHintVisible = false;
    japaneseAudioHasReveal = false;
    render();
    playAudio(get5EnAudioPath());
    return;
  }

  if (currentMode === "japanese-audio") {
    japaneseAudioHasReveal = true;
    isHintVisible = false;
    render();
    return;
  }

  if (currentMode === "77") {
    continuous77Index =
      (continuous77Index + step + continuous77Entries.length) % continuous77Entries.length;
    continuous77HasReveal = true;
    render();
    return;
  }

  exampleHasEnglishReveal = false;
  render();
}

modeExampleBtn.addEventListener("click", () => {
  setActiveMode("example");
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

sentenceCard.addEventListener("click", () => {
  advanceExampleReveal();
  advanceEnglishAudioReveal();
  advanceJapaneseAudioReveal();
  advanceContinuous77Reveal();
});

prevBtn.addEventListener("click", () => {
  moveQuestion(-1);
});

nextBtn.addEventListener("click", () => {
  moveQuestion(1);
});

centerControl.addEventListener("change", (event) => {
  void event;
});

centerControl.addEventListener("click", () => {
  if (currentMode === "77") {
    const selectedPosition = Number(sectionSelect.value);
    if (selectedPosition !== continuous77Position) {
      syncContinuous77Selection(selectedPosition);
      resetCurrentAudio();
      render();
    }

    if (isCurrentAudioPlaying) {
      pauseCurrentAudio();
    } else if (currentAudio && currentAudioPath === get77AudioPath()) {
      resumeCurrentAudio();
    } else {
      playAudio(get77AudioPath());
    }
    return;
  }

  if (currentMode === "english-audio") {
    showHint();
    return;
  }

  if (currentMode === "example") {
    playExampleEnglishAudio();
    return;
  }

  if (currentMode === "japanese-audio") {
    showHint();
  }
});

sectionSelect.addEventListener("change", (event) => {
  if (currentMode === "77") {
    syncContinuous77Selection(event.target.value);
    resetCurrentAudio();
    render();
    return;
  }

  currentSectionKey = event.target.value;
  currentData = bathData[currentSectionKey];
  currentIndex = 0;
  exampleHasEnglishReveal = false;
  resetCurrentAudio();

  if (currentMode === "english-audio") {
    englishAudioRevealStage = 0;
    isHintVisible = false;
    japaneseAudioHasReveal = false;
    render();
    playAudio(get5EnAudioPath());
    return;
  }

  if (currentMode === "japanese-audio") {
    englishAudioRevealStage = 0;
    isHintVisible = false;
    japaneseAudioHasReveal = false;
    render();
    playAudio(getJapaneseSectionAudioPath());
    return;
  }

  render();
});

sectionSelect.innerHTML = buildSectionOptions();
setActiveMode("example");

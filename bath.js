const jpText = document.getElementById("jpText");
const enText = document.getElementById("enText");
const progress = document.getElementById("progress");
const hintText = document.getElementById("hintText");
const tapArea = document.getElementById("tapArea");
const sectionName = document.getElementById("sectionName");

const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

const sectionSelect = document.getElementById("sectionSelect");

let currentSectionKey = "section01";
let currentData = bathData[currentSectionKey];

let currentIndex = 0;
let isAnswerVisible = false;


function renderQuestion() {
  const item = currentData[currentIndex];

  jpText.textContent = item.jp;
  enText.textContent = item.en;
  sectionName.textContent = currentSectionKey;
  enText.classList.add("is-hidden");

  isAnswerVisible = false;

  progress.textContent = `${currentIndex + 1} / ${currentData.length}`;

  hintText.textContent = "タップで答えを表示";
}


function showAnswer() {
  if (isAnswerVisible) return;

  enText.classList.remove("is-hidden");

  isAnswerVisible = true;

  hintText.textContent = "もう一度タップで次の問題へ";
}


function nextQuestion() {

  currentIndex++;

  if (currentIndex >= currentData.length) {
    currentIndex = 0;
  }

  renderQuestion();
}


function handleTapArea() {

  if (!isAnswerVisible) {
    showAnswer();
  } else {
    nextQuestion();
  }
}


showBtn.addEventListener("click", showAnswer);

nextBtn.addEventListener("click", nextQuestion);

resetBtn.addEventListener("click", () => {
  currentIndex = 0;
  renderQuestion();
});


tapArea.addEventListener("click", handleTapArea);


tapArea.addEventListener("keydown", (event) => {

  if (event.key === "Enter" || event.key === " ") {

    event.preventDefault();

    handleTapArea();
  }
});


sectionSelect.addEventListener("change", (event) => {

  currentSectionKey = event.target.value;

  currentData = bathData[currentSectionKey];

  currentIndex = 0;

  renderQuestion();
});


renderQuestion();

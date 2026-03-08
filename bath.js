const jpText = document.getElementById("jpText");
const enText = document.getElementById("enText");
const progress = document.getElementById("progress");
const hintText = document.getElementById("hintText");
const tapArea = document.getElementById("tapArea");

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

  enText.classList.add("hidden");

  isAnswerVisible = false;

  progress.textContent =
    `${currentSectionKey} : ${currentIndex + 1} / ${currentData.length}`;

  hintText.textContent = "タップで答えを表示";
}


function showAnswer() {

  if (isAnswerVisible) return;

  enText.classList.remove("hidden");

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
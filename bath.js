const jpText = document.getElementById("jpText");
const enText = document.getElementById("enText");
const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

let currentIndex = 0;

function renderQuestion() {
  const item = section01Data[currentIndex];

  jpText.textContent = item.jp;
  enText.textContent = item.en;
  enText.classList.add("hidden");

  progress.textContent = `${currentIndex + 1} / ${section01Data.length}`;
}

showBtn.addEventListener("click", () => {
  enText.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= section01Data.length) {
    currentIndex = 0;
  }

  renderQuestion();
});

renderQuestion();
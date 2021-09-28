var quizform = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector(".output-box");
const answers = [
  "90",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "10°",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizform);
  for (let value of formResults.values()) {
    console.log(value);
    if (value == answers[index]) score = score + 1;

    index = index + 1;
  }
  console.log(score);
  outputBox.innerHTML = "<h1>score is <h1> " + score;
}
submitBtn.addEventListener("click", calculateScore);

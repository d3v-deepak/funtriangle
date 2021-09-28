var sides = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#hypotenuse-btn");
var HypotenuseOutput = document.querySelector(".hypotenuse-output");

function calculatesumofSides(a, b) {
  return a * a + b * b;
}
function calculatehypotenuse() {
  var sumOfSquares = calculatesumofSides(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  HypotenuseOutput.innerText =
    "The length of hypotenuse is " + lengthOfHypotenuse;
}
hypotenuseBtn.addEventListener("click", calculatehypotenuse);

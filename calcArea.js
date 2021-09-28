var sides = document.querySelectorAll(".side-input");
var calcAreaBtn = document.querySelector("#hypotenuse-btn");
var areaOutput = document.querySelector(".hypotenuse-output");

function calculateArea() {
  var area = (1 / 2) * (Number(sides[0].value) * Number(sides[1].value));
  areaOutput.innerHTML = "area of triangle is " + area;
}
calcAreaBtn.addEventListener("click", calculateArea);

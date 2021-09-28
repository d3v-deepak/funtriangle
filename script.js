var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");

var angle3 = document.querySelector("#angle-3");
var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector(".output-box");

// var angle1value=
// var angle2value=
// var angle3value=

function checkTriangle() {
  if (angle1.value != 0 && angle2.value != 0 && angle3.value != 0) {
    var sum =
      Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
    if (sum === 180) showResult("Yayy..!!It makes a TRIANGLE");
    else showResult("Oops ..not a triangle!! Try again with new values");
  } else {
    showResult("Enter Valid values");
  }
}
function showResult(result) {
  outputBox.innerHTML = result;
}

checkBtn.addEventListener("click", checkTriangle);

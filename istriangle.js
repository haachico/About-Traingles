const anglesInput = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector(".check-btn");
const output = document.querySelector(".check-btn");

function calcSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
function isTriangle() {
  const sumOfAngles = calcSumOfAngles(
    Number(anglesInput[0].value),
    Number(anglesInput[1].value),
    Number(anglesInput[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = `Yay! It is a traingle!`;
  } else {
    output.innerText = "It is not a triangle.";
  }
}

checkButton.addEventListener("click", isTriangle);

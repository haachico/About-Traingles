const sides = document.querySelectorAll(".side-input");
const checkButton = document.querySelector(".check-btn");
const output = document.querySelector(".output");

function areaOfTriangle(a, b) {
  return (1 / 2) * (b * a);
}

function calcAreaOfTriangle() {
  const area = areaOfTriangle(Number(sides[0].value), Number(sides[1].value));
  output.innerText = `The area of triangle is ${area}.`;
}

checkButton.addEventListener("click", calcAreaOfTriangle);

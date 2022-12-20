const sides = document.querySelectorAll(".side-input");
const checkButton = document.querySelector(".check-btn");
const output = document.querySelector(".output");

function areaOfTriangle(a, b) {
  return (1 / 2) * (b * a);
}

function calcAreaOfTriangle() {
  const inputHeight = Number(sides[0].value);
  const inputBase = Number(sides[1].value);

  if (
    inputHeight === 0 ||
    inputHeight < 0 ||
    inputBase === 0 ||
    inputBase < 0
  ) {
    output.innerText = `Please enter a valid value.`;
  } else {
    const area = areaOfTriangle(inputHeight, inputBase).toFixed(2);
    output.innerText = `The area of triangle is ${area}.`;
  }
}

checkButton.addEventListener("click", calcAreaOfTriangle);

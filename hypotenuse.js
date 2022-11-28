const sides = document.querySelectorAll(".side-input");
const hypButton = document.querySelector(".check-btn");
const outputE1 = document.querySelector(".output");

function calcSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calcHypotenuse() {
  const sumOfSquaresOfSides = calcSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );

  //   console.log(sumOfSquaresOfSides);

  const lengthOfHypotenuse = Math.sqrt(sumOfSquaresOfSides);
  outputE1.innerText = `The hypotenuse is ${lengthOfHypotenuse}`;
}

hypButton.addEventListener("click", calcHypotenuse);

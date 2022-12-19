const sides = document.querySelectorAll(".side-input");
const hypButton = document.querySelector(".check-btn");
const outputE1 = document.querySelector(".output");

function calcSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calcHypotenuse() {
  let sideOne = Number(sides[0].value);
  let sideTwo = Number(sides[1].value);

  if (sideOne < 0 || sideTwo < 0 || sideOne === 0 || sideTwo === 0) {
    outputE1.innerText = `Enter a positive angle.`;
  } else {
    const sumOfSquaresOfSides = calcSumOfSquares(sideOne, sideTwo);

    //   console.log(sumOfSquaresOfSides);

    const lengthOfHypotenuse = Math.sqrt(sumOfSquaresOfSides).toFixed(2);
    outputE1.innerText = `The hypotenuse is ${lengthOfHypotenuse}.`;
  }
}

hypButton.addEventListener("click", calcHypotenuse);

const formQuiz = document.querySelector(".form-quiz");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

let score = 0;
let index = 0;
const answers = ["right", "180°", "360°", "36°", "120°"];

function calcScore() {
  // let score = 0;
  // let index = 0;
  // const formQuizData = new FormData(formQuiz);
  // for (let [i, e] of formQuizData.entries()) {
  //   console.log([i, e]);
  //   if (val === answers[index]) {
  //     score = score + 1;
  //   }
  //   index = index + 1;
  // }
  // output.innerText = `The score is ${score}.`;
}

submitButton.addEventListener("click", calcScore);

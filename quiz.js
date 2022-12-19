const formQuiz = document.querySelector(".form-quiz");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");
// const correctAns = document.querySelectorAll("");
const answerEls = document.querySelectorAll(".radio-btn");
let score = 0;
let index = 0;
// const answers = ["right", "180°", "360°", "36°", "120°"];

function selectAnswer() {
  answerEls.forEach((answerEl) => {
    if (answerEl.hasAttribute("id") && answerEl.checked === true) {
      score = score + 1;
    } else {
      score = score;
    }
    console.log(answerEl);
  });
  output.innerText = `The score is ${score}.`;
}

// function calcScore() {
//   // let score = 0;
//   // let index = 0;
//   const formQuizData = new FormData(formQuiz);
//   for (let values of formQuizData.values()) {
//     console.log(values);
//     if (values === answers[index]) {
//       score = score + 1;
//     }
//     index = index + 1;
//   }
//   output.innerText = `The score is ${score}.`;
// }

submitButton.addEventListener("click", selectAnswer);

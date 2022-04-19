let currentQuestionIndex = 0;
$("#next").on("click", function () {
  if (currentQuestionIndex < 9) {
    currentQuestionIndex++;
    $("#questions").text(questions[currentQuestionIndex].question);
    console.log(currentQuestionIndex);
  } else {
    //score or result
  }
});

$("#previous").on("click", function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    $("#questions").text(questions[currentQuestionIndex].question);
    console.log(currentQuestionIndex);
  } else {
    //score or result
  }
});

const quiz = document.getElementById("quiz");
const result = document.getElementsByClassName("result");

const answerbuttonElement = (document.getElementsByClassName = "answers");

let questions;

const url =
  "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=boolean";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    questions = data.results;
    startquiz();
    console.log(questions);
  });

function startquiz() {
  $("#questions").text(questions[currentQuestionIndex].question);
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// function showQuestion(question) {
//   questionElement.innerHTML = question.question;
//   question.answer.forEach((answer) => {
//     button.innerText = answer.text;
//     button.classlist.add("btn");
//   });
//   $(answer).on("click", selectAnswer(), {
//     if(correct_answer) {
//       button.dataset.correct = correct_answer;
//     },
//   });
// }

// function selectAnswer(e) {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;
//   Array.from(answerButtonElement.children).forEach((button) => {
//     setStatusClass(button, button.dataset.correct);
//   });
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element);
//   if (correct) {
//     element.classlist.add("correct");
//   } else {
//     element.classlist.add("wrong");
//   }
// }

// function clearStatusClass(element) {
//   element.classlist.remove("correct");
//   element.classlist.remove("correct");
// }
let score = 0;

function selectAnswer() {
  console.log("clicked");
  trueButton.innerHTML = "True";
  falseButton.innerHTML = "False";
  textDisplay.innerHTML = this.getAttribute("data-question");
  this.append(textDisplay, trueButton, falseButton);

  trueButton.addEventListener("click", getResult);
  falseButton.addEventListener("click", getResult);
}

function getResult() {
  const answerButton = this.parentElement;
  if (answerOfButton("data-answer") === this.innerHTML) {
    score = score + parseInt(answerButton.getAttribute("data-value"));
    scoreDisplay.innerHTML = score;
    answerButton.classlist.add("correct-answer");
  }
}

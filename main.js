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
    questions = data.result;
    console.log("question");
  });

let currentQuestionIndex = 0;
let counter = 1;
let question;
let answers = [
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
];

$("#true").on("click", function () {
  answers[currentQuestionIndex] = "True";
});

$("#false").on("click", function () {
  answers[currentQuestionIndex] = "False";
});

$("#form").submit(function (e) {
  e.preventDefault();
  if (currentQuestionIndex < 9) {
    currentQuestionIndex++;
    $("#questions").text(questions[currentQuestionIndex].question);
    $("#counter").text(`${++counter} of 10`);
    $("input:radio[name=answers]:checked")[0].checked = false;
  } else {
    $("#answersPage").css("display", "none");
    $("#scorePage").css("display", "block");
    getResult();
    const result = getScore();
    $("#score").text(`Total will be ${result} of 10`);
  }
});

function getResult() {
  $("#answers").append(
    answers.map(function (v, index) {
      return $("<li/>", {
        value: v[index],
        text: `Question ${index}: ${questions[index].question}.answer: ${v}. correct: ${questions[index].question}`,
      });
    })
  );
}

function getScore() {
  let score = 0;
  let counter = 0;
  answers.forEach((element) => {
    if (element === questions[counter].correct_answer) {
      score++;
    }
    counter++;
  });
  return score;
}

// function startquiz() {
//   $("#questions").text(questions[currentQuestionIndex].question);
// }

// function setNextQuestion() {
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

// let score = 0;

// function selectAnswer() {
//   console.log("clicked");
//   trueButton.innerHTML = "True";
//   falseButton.innerHTML = "False";
//   textDisplay.innerHTML = this.getAttribute("data-question");
//   this.append(textDisplay, trueButton, falseButton);

//   trueButton.addEventListener("click", getResult);
//   falseButton.addEventListener("click", getResult);
// }

// function getResult() {
//   const answerButton = this.parentElement;
//   if (answerOfButton("data-answer") === this.innerHTML) {
//     score = score + parseInt(answerButton.getAttribute("data-value"));
//     scoreDisplay.innerHTML = score;
//     answerButton.classlist.add("correct-answer");
//   }
// }

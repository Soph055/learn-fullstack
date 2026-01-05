// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
{
    question: "What is hydroponics?",
    answers: [
        { text: "Study of mushrooms", correct: false},
        { text: "A method of growing plants without soil", correct: true},
        { text: "Method of growing plants with soil", correct: false},
        { text: "Study of herbs", correct: false},
    ],
},
{
    question: "What is a growing medium that can be used in hydroponics",
    answers: [
        { text: "any fabric", correct: false},
        { text: "dirt", correct: false},
        { text: "clay pebbles", correct: true},
        { text: "tissue paper", correct : false},
    ],
},
{
    question: "What is one major advantage of hydroponics",
    answers: [
        { text: "Uses less water and plants grow faster", correct: true},
        { text: "Costs less many than growing in soil", correct: false},
        { text: "Crops are tastier", correct: false},
        { text: "No major advantage, more or less same as growing on soil", correct: false},
    ],
},

{
    question: "Why is PH important in hydroponics",
    answers: [
        { text: "It affects how well plants absorb nutrients", correct: true},
        { text: "Plants love extremely acidic water", correct: false},
        { text: "PH actually doesn't matter", correct: false},
        { text: "Plants love extremely alkaline water", correct: false},
    ],  
},

{
    question: "Can hydroponics be used indoors", 
    answers: [
        {text: "No it must be done in a sterile outdoor green house", correct: false},
        { text: "No it must be done outside", correct: false},
        { text: "Yes...sophia grew tomatoes and lettuce in her cuboard", correct: true},
        {text: "No it is only theorhetical and can't actually be implemented in reality", correct: false},
    ],
},
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  //clear content of answers container before adding more answers
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
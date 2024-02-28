const questions = [
  {
    question: "Wher is Chernobyl located?",
    choices: ["USA", "Russia", "Ukraine", "Indonesia"],
    correctAnswer: "Ukraine"
  },
  {
    question: "What happened in Chernobyl?",
    choices: ["Olympic games", "Bancrupsy", "Nuclear disaster", "Civil war"],
    correctAnswer: "Nuclear disaster"
  },
  {
    question: "When did nuclear accident happen in Chernobyl?",
    choices: ["3 Feb 2002", "26 Apr 1986", "25 Jun 1972", "18 Oct 1957"],
    correctAnswer: "26 Apr 1986"
  },
  {
    question: "How big is the exclusion zone in Chernobyl?",
    choices: ["2.600 square kilometers", "30 square kilometers", "3000 square kilometers", "10 square kilometers"],
    correctAnswer: "2.600 square kilometers"
  },
  {
    question: "Which country was first to report about possible accident in Chernobyl?",
    choices: ["Soviet Union", "Sweden", "Germany", "Italy"],
    correctAnswer: "Sweden"
  },
  {
    question: "What was the original exclusion zone after the accident?",
    choices: ["10 km", "80 km", "30 km", "100 km"],
    correctAnswer: "30 km"
  },
  {
    question: "When would be exclusion zone considered habitable again?",
    choices: ["Never", "50 years", "300+ years", "120 years"],
    correctAnswer: "300+ years"
  },
  {
    question: "When did evacuation in Pripyat (nearby town built for workers at the powerplant) happened?",
    choices: ["Immediately after the explosion", "Next day", "Three days after the accident", "A week after the accident"],
    correctAnswer: "Three days after the accident"
  },
  {
    question: "What did the hospital staff do with contaminated clothing/uniforms?",
    choices: ["Left with the patients", "Burned them", "Returned to burning plant", "Collected in hospitals basement"],
    correctAnswer: "Collected in hospitals basement"
  },
  {
    question: "For how long did Chernobyl burn?",
    choices: ["10 days", "1 day", "5 days", "A month"],
    correctAnswer: "10 days"
  }
];

let currentQuestion = 0;
let score = 0;
let timer = null;
let rulesShown = false;

const questionElement = document.getElementById('questions');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const countdownElement = document.getElementById('countdown');
const playAgainButton = document.getElementById('play-again');

// Function to shuffle questions
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

// Function to start the quiz
function startQuiz() {
  const rulesSection = document.getElementById('rules');
  rulesSection.classList.remove('hidden');
  shuffleQuestions();
  currentQuestion = 0;
  score = 0;
  showNextQuestion();
}

// Function to display the next question
function showNextQuestion() {
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

// Function to display a question
function displayQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  choicesElement.innerHTML = '';

  question.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
      checkAnswer(choice);
    });
    choicesElement.appendChild(button);
  });

  startTimer();
}

// Function to check the answer
function checkAnswer(choice) {
  const question = questions[currentQuestion];
  if (choice === question.correctAnswer) {
    score++;
  }
  currentQuestion++;
  stopTimer();
  showNextQuestion();
}

// Function to start the timer
function startTimer() {
  let timeLeft = 15;
  countdownElement.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft === 0) {
      stopTimer();
      showNextQuestion();
    }
  }, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
}

// Function to display the quiz result
function showResult() {
  questionElement.textContent = '';
  choicesElement.textContent = '';
  resultElement.textContent = `You scored ${score} out of ${questions.length}.`;
  countdownElement.textContent = '';
  nextButton.style.display = 'none';
  playAgainButton.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  const welcomeMessage = document.getElementById('welcome');
  const rulesSection = document.getElementById('rules');

  welcomeMessage.addEventListener('click', function() {
    welcomeMessage.style.display = 'none';
    rulesSection.classList.remove('hidden');
    rulesShown = true;
  });

  nextButton.addEventListener('click', function() {
    if (!rulesShown) {
      hideRules();
      rulesShown = true;
    }
    showNextQuestion();
  });

  startQuiz();
});

function hideRules() {
  const rulesSection = document.getElementById('rules');
  rulesSection.style.display = 'none';
}

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
let timer;

document.getElementById('start').addEventListener('click', function() {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('rules').classList.remove('hidden');
});

document.getElementById('rules-done').addEventListener('click', function() {
  document.getElementById('rules').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  showQuestion();
});

function showQuestion() {
  if (currentQuestion < questions.length) {
      const questionElement = document.getElementById('question');
      questionElement.textContent = questions[currentQuestion].question;

      const choicesElement = document.getElementById('choices');
      choicesElement.innerHTML = '';
      questions[currentQuestion].choices.forEach(choice => {
          const button = document.createElement('button');
          button.textContent = choice;
          button.addEventListener('click', () => checkAnswer(choice));
          choicesElement.appendChild(button);
      });

      resetState(); // Reset the state before showing the next question
      startTimer();
  } else {
      stopTimer(); 
      displayFinalResults(); 
  }
}

function checkAnswer(choice) {
const isCorrect = choice === questions[currentQuestion].correctAnswer;
if (isCorrect) {
    score++;
}
// Disable all choice buttons
const choiceButtons = document.getElementById('choices').children;
for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = true;
    // Highlight the correct or incorrect choice
    if (choiceButtons[i].textContent === choice) {
        choiceButtons[i].classList.add(isCorrect ? 'correct' : 'incorrect');
    }
}
// Move to the next question or show final results
currentQuestion++;
if (currentQuestion < questions.length) {
    showQuestion();
} else {
    stopTimer();
    displayFinalResults();
}
}

document.getElementById('next').addEventListener('click', function() {
showQuestion();
});

function resetState() {
const choiceButtons = document.getElementById('choices').children;
for (let i = 0; i < choiceButtons.length; i++) {
  choiceButtons[i].disabled = false;
  choiceButtons[i].classList.remove('correct', 'incorrect');
}
document.getElementById('next').classList.add('hide');
}
let timerInterval;
let timeLeft = 5*60; // Adjust this to set the timer duration in seconds

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;
    } else {
      endQuiz();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}
function displayFinalResults() {
  document.getElementById("quiz").classList.add("hidden");
  alert(`Quiz ended! Your score is ${score}/${questions.length}`);
}
function endQuiz() {
  stopTimer(); // Stop the timer if it's running
  displayFinalResults();
}
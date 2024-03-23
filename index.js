let questions = [
  {
    question: "Where is Chernobyl located?",
    choices: ["USA", "Russia", "Ukraine", "Indonesia"],
    correctAnswer: "Ukraine"
  },
  {
    question: "What happened in Chernobyl?",
    choices: ["Olympic games", "Bankruptcy", "Nuclear disaster", "Civil war"],
    correctAnswer: "Nuclear disaster"
  },
  {
    question: "When did the nuclear accident happen in Chernobyl?",
    choices: ["3 Feb 2002", "26 Apr 1986", "25 Jun 1972", "18 Oct 1957"],
    correctAnswer: "26 Apr 1986"
  },
  {
    question: "How big is the exclusion zone in Chernobyl?",
    choices: ["2,600 square kilometers", "30 square kilometers", "3000 square kilometers", "10 square kilometers"],
    correctAnswer: "2,600 square kilometers"
  },
  {
    question: "Which country was the first to report about a possible accident in Chernobyl?",
    choices: ["Soviet Union", "Sweden", "Germany", "Italy"],
    correctAnswer: "Sweden"
  },
  {
    question: "What was the original exclusion zone after the accident?",
    choices: ["10 km", "80 km", "30 km", "100 km"],
    correctAnswer: "30 km"
  },
  {
    question: "When would the exclusion zone be considered habitable again?",
    choices: ["Never", "50 years", "300+ years", "120 years"],
    correctAnswer: "300+ years"
  },
  {
    question: "When did evacuation in Pripyat (nearby town built for workers at the power plant) happen?",
    choices: ["Immediately after the explosion", "Next day", "Three days after the accident", "A week after the accident"],
    correctAnswer: "Three days after the accident"
  },
  {
    question: "What did the hospital staff do with contaminated clothing/uniforms?",
    choices: ["Left with the patients", "Burned them", "Returned to the burning plant", "Collected in the hospital's basement"],
    correctAnswer: "Collected in the hospital's basement"
  },
  {
    question: "For how long did Chernobyl burn?",
    choices: ["10 days", "1 day", "5 days", "A month"],
    correctAnswer: "10 days"
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const resultElement = document.getElementById('result');
    
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = '';

    questions[currentQuestion].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice'); // Add the 'choice' class to each button
        button.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(button);
    });

    resultElement.textContent = ''; // Clear previous result
}

function checkAnswer(choice) {
    const resultElement = document.getElementById('result');
    const correctAnswer = questions[currentQuestion].correctAnswer.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const chosenButton = document.querySelector('.chosen');
    
    if (!chosenButton) {
        const buttons = document.querySelectorAll('.choice');
        buttons.forEach(button => {
            if (button.textContent.toLowerCase() === choice.toLowerCase()) {
                button.classList.add('chosen');
                if (button.textContent.toLowerCase() === correctAnswer) {
                    button.style.backgroundColor = 'green';
                    resultElement.textContent = 'Correct!';
                    resultElement.style.color = 'green';
                    correctAnswers++;
                } else {
                    button.style.backgroundColor = 'red';
                    resultElement.textContent = 'Wrong!';
                    resultElement.style.color = 'red';
                }
            } else {
                button.disabled = true; // Disable buttons after answering
            }
        });

        currentQuestion++;

        if (currentQuestion < questions.length) {
            setTimeout(displayQuestion, 1000); // Display next question after 1 second
        } else {
            showScore();
        }
    }
}

function showScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `You answered ${correctAnswers} questions correctly out of ${questions.length}.`;
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    displayQuestion();
}

document.getElementById('restartQuiz').addEventListener('click', resetQuiz);

// Initial display of the first question
displayQuestion();
``

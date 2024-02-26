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
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  

  function showQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
  choicesElement.innerHTML = '';

  questions[currentQuestion].choices.forEach((choice) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
      checkAnswer(choice);
    });
    choicesElement.appendChild(button);
  });

  if(currentQuestion >= 2) {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        showQuestion();
        resultElement.textContent = '';
        submitButton.style.display = 'block'; // Make sure to show the submit button again
    });
    choicesElement.appendChild(restartButton);
  }
}
  function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correctAnswer) {
      score++;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    submitButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questions.length}.`;
  };
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      choices: ["3", "4", "5", "6"],
      correctAnswer: "4"
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
  }
  
  showQuestion();
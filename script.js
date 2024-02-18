const quizQuestions = [
    {
      question: "Who is the Father of our Nation?",
      options: ["mahatma gandhi", "rajendra prasad", "dr B.R Ambedkar", "none of these"],
      correctAnswer: "mahatma gandhi"
    },
    {
      question: "Which is the most sensitive organ in our body?",
      options: ["hair", "skin", "lungs", "none of these"],
      correctAnswer: "skin"
    },
    {
      question: "Which is the heavier metal",
      options: ["gold", "iron", "Copper", "none of these"],
      correctAnswer: "gold"
    },
    {
      question: "1024 Kilobytes is equal to?",
      options: ["1GB", "1KB", "1MB", "none of these"],
      correctAnswer: "1MB"
    },
    {
      question: "Smallest state of India is",
      options: ["Goa", "Rajasthan", "Bihar", "none of these"],
      correctAnswer: "Goa"
    }
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
    questionText.innerHTML = currentQuestion.question;
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  function endQuiz() {
    clearInterval(timerInterval);
    const scorePercentage = (score / quizQuestions.length) * 100;
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  document.getElementById("start-button").addEventListener("click", startQuiz);

const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    correct: 1
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Django", "Vue"],
    correct: 2
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: 2
  }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  resetState();
  let q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
}

function selectAnswer(index) {
  let q = quizData[currentQuestion];
  const buttons = document.querySelectorAll(".option");
  
  if (index === q.correct) {
    buttons[index].classList.add("correct");
    score++;
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }

  buttons.forEach(btn => btn.disabled = true);
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionEl.textContent = "Quiz Finished!";
  scoreEl.textContent = `Your score: ${score} / ${quizData.length}`;
  nextBtn.style.display = "none";
}

loadQuestion();

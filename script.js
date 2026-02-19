// Study Planner
function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  taskList.appendChild(li);
  input.value = "";
}

// Exam Countdown
function calculateCountdown() {
  const examDate = new Date(document.getElementById("examDate").value);
  const today = new Date();
  const difference = examDate - today;

  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  if (days > 0) {
    document.getElementById("countdown").textContent =
      days + " days left until your exam!";
  } else {
    document.getElementById("countdown").textContent =
      "Exam day has arrived!";
  }
}

// Pomodoro Timer
let time = 1500;
let timerInterval;

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up! Take a break.");
      return;
    }

    time--;
    updateTimerDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 1500;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  document.getElementById("timer").textContent =
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
function loadClassNotes() {
  const selected = document.getElementById("classSelect").value;
  const frame = document.getElementById("notesFrame");

  if (selected === "9") {
    frame.src = "https://drive.google.com/embeddedfolderview?id=1oJt1VXMvzBLSVMP3yTRL5G-innQpodzE#grid";
  } else if (selected === "10") {
    frame.src = "https://drive.google.com/embeddedfolderview?id=19QRxbgZ2RFMKwHYCHf6qFifp1xK0SGA1#grid";
  } else {
    frame.src = "";
  }
}

// Study Planner
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;
  li.onclick = function() {
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.6";
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Timer
let time = 1500;
let interval;

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      alert("Time's up! Take a break 🌿");
      return;
    }
    time--;
    let m = Math.floor(time / 60);
    let s = time % 60;
    document.getElementById("timer").innerText =
      m + ":" + (s < 10 ? "0" : "") + s;
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  time = 1500;
  document.getElementById("timer").innerText = "25:00";
}

// Exam Countdown
function setCountdown() {
  let examDate = new Date(document.getElementById("examDate").value);
  let today = new Date();
  let diff = examDate - today;

  if (diff <= 0) {
    document.getElementById("countdownDisplay").innerText =
      "Exam date already passed!";
    return;
  }

  let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdownDisplay").innerText =
    days + " days left until your exam!";
}

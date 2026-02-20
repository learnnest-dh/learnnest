function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
// Countdown
const examDate = new Date("March 15, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = examDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerText =
    days > 0 ? days + " days remaining" : "Exam Started!";
}

setInterval(updateCountdown, 1000);
updateCountdown();
function updateHabitProgress(percent) {
  const circle = document.getElementById("progressCircle");
  const text = document.getElementById("habitPercent");

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.innerText = percent + "%";
}

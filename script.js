const screen = document.getElementById("screen");
const startBtn = document.getElementById("startBtn");

if (screen) {
  setInterval(() => {
    screen.classList.toggle("flicker");
  }, 2200);
}

if (startBtn) {
  startBtn.addEventListener("mouseenter", () => {
    startBtn.textContent = "apri episodio 1";
  });

  startBtn.addEventListener("mouseleave", () => {
    startBtn.textContent = "episodio 1";
  });
}

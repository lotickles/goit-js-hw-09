function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let colorChangedInterval = null;
stopBtn.disabled = true;

function startColorChanged() {
  colorChangedInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
function stopColorChanged() {
  clearInterval(colorChangedInterval);
  // colorChangedInterval = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startColorChanged);
stopBtn.addEventListener('click', stopColorChanged);

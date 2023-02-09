const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let timer = 0;

let int = setInterval(blur, 30);
function blur() {
  timer++;
  if (timer >= 100) {
    clearInterval(int);
  }

  loadText.textContent = `${timer}%`;
  loadText.style.opacity = scale(timer, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(timer, 0, 100, 10, 0)}px)`;
  console.log(timer);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

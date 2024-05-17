const timer = document.getElementById("counter");

let count = 0;

const intervalId = setInterval(function () {
  count++;
  timer.textContent = count;
  if (count === 5) {
    clearInterval(intervalId);
    console.log("종료");
  }
}, 1000);

document.getElementById("container").addEventListener("click", (event) => {
  if (event.target.classList.contains("box")) {
    event.target.classList.add("clicked");
  }
});

function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
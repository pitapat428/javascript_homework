document.querySelector(".btn").addEventListener("click", function () {
  let titleElement = document.querySelector(".title");
  titleElement.textContent = "제목아니다.";
});

function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

sum(2, 8);
sum(7, 4);

function isEvenOrOdd(num) {
  num % 2 === 0 || console.log(`${num} 홀수입니다.`);
  num % 2 !== 0 || console.log(`${num} 짝수입니다.`);
}

isEvenOrOdd(4);
isEvenOrOdd(9);

const person = {
  name: "병수",
  age: 20,
};

console.log(`이름: ${person.name}`);
console.log(`나이: ${person.age}`);

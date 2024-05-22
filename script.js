const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;
console.log(이름, 나이, 주소);

localStorage.setItem("user", JSON.stringify(user));

const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData);

userData.나이 = 30;
localStorage.setItem("user", JSON.stringify(userData));
console.log(userData);

localStorage.removeItem("user");

const afterData = JSON.parse(localStorage.getItem("user"));
console.log(afterData);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

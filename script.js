const people = [
  { 이름: "철수", 나이: 19, 성별: "남" },
  { 이름: "짱구", 나이: 20, 성별: "남" },
  { 이름: "유리", 나이: 21, 성별: "여" },
];

people.forEach((element) => console.log(element));

const lists = document.querySelector(".list");

people.forEach((person) => {
  let template = `
      <div class="people">
        <h1 class="name">이름 : ${person.이름}</h1>
        <h3 class="age">나이 : ${person.나이}</h3>
        <h3 class="gender">성별 : ${person.성별}</h3>
      </div>
    `;

  lists.insertAdjacentHTML("beforeend", template);
});

console.log("여자 데이터:");
const female = people.find((person) => person.성별 === "여");
console.log(female);

console.log("남자 데이터:");
const males = people.filter((person) => person.성별 === "남");
males.forEach((male) => console.log(male));

const newPeople = people.map((person) => {
  return {
    이름: person.이름,
    나이: person.나이 + 10,
    성별: person.성별,
  };
});

console.log("기존 데이터:");
people.forEach((person) => console.log(person));

console.log("새로운 배열:");
newPeople.forEach((person) => console.log(person));

const sortedAges = [...people].sort((a, b) => b.나이 - a.나이);
console.log("나이순으로 정렬:");
sortedAges.forEach((person) => console.log(person));

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;
console.log(이름, 나이, 주소);

// 블록 스코프
const users = [
  {
    no: 1,
    name: "마이콜",
    email: "michol@gmail.com",
  },
  {
    no: 1,
    name: "둘리",
    email: "dooly@gmail.com",
  },
];

// 객체 분해
function print({ no, name, email }) {
  // 템플릿 문자열(ex6)
  console.log(`${no}:${name}:${email}`);
}

// for..of(ex6)
for (let user of users) {
  print(user);
}

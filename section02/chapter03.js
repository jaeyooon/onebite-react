// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "조재윤",
  age: 26,
  hobby: "자전거 타기"
};

let {
  name,
  age: myAge,
  hobby,
  extra = "hello",
} = person;
// console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => { // 객체를 넘겼기 때문에 이렇게 구조분해할당이 가능함!
  console.log(name, age, hobby, extra);
}

func(person);   // 객체를 넘김
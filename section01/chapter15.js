// 객체(Object)
// - 원시 타입이 아닌 객체 타입의 자료형
// - 여러가지 값을 동시에 저장할 수 있는 자료형을 의미
// - 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함.

// 1. 객체 생성
let obj1 = new Object();  // 객체 생성자
let obj2 = {};    // 객체 리터럴 (대부분 사용!)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "조재윤",   // key : value
  age: 26,
  hobby: "자전거 타기",
  extra: {},
  10: 20,
  "like cat": true
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];

// 💡 동적으로 프로퍼티들을 변화시키면서 꺼내와야 할 경우 괄호 표기법 사용!
let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법 (점 표기법 or 괄호 표기법을 이용하여 값을 할당해줌)
person.job = "FE developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법 (점 표기법 or 괄호 표기법을 이용)
person.job = "student";
person["favoriteFood"] = "피자";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"]

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result2);
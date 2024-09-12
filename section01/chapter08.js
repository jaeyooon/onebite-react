// 1. null 병합 연산자(✨실무에서 사용)
// -> 존재하는 값을 추려내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;  // var1은 undefined고 var2는 10이므로 결과값은 10

let var5 = var1 ?? var3;  // 결과값 20
let var6 = var2 ?? var3;  // 둘다 null 이나 undefined 가 아닐 경우 앞에 있는 값이 출력됨. 결과값 10

// 📌회원가입시 userName 이 undefined일 경우 userNickName으로 저장하라는 요구사항이 있을 때
let userName;
let userNickName = "yoon";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = true;   // 자바스크립트는 코드 실행에 따라 변수 형이 동적으로 바뀜.

let t1 = typeof var7;

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 15;

// 📌 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
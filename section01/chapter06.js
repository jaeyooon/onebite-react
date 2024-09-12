// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;   // 덧셈연산에서 num이 묵시적으로 String 타입으로 형이 변환됨.

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 => 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);   // 숫자만 포함되어 있지 않은 문자열을 숫자형으로 변환할 때 parseInt 사용(맨앞에 숫자가 나와있어야 함)

// -> 숫자 => 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
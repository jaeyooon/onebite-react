// ✨원시타입
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;   // 양의 무한대
let mInf = -Infinity;   // 음의 무한대

let nan = NaN;    //  수치연산이 실패했을 때의 결과값

// 2. String Type;
let myName = "조재윤";
let myLocation = "대한민국"
let introduce = myName + myLocation;    // 문자열 덧셈연산 지원

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;  // 📌템플릿 리터럴 문법 => 변수의 값을 동적으로 문자열에 포함시킬 수 있음

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;   // 변수를 선언하고 아무런 값을 할당하지 않았을 때 undefined가 자동으로 할당됨.
console.log(none);
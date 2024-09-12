function funcA() {  // 함수 선언문을 이용한 함수 생성
  // console.log("funcA");
}

let varA = funcA;
varA();

// 1. 함수 표현식 -> 값으로서 함수를 생성
let varB = function () {  // 익명함수
  // console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value)
  return value + 1;
}

console.log(varC(10));
// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 접근 가능

let a = 1;    // 전역 스코프

function funcA() {
  let b = 2;    // 지역 스코프
  console.log(a);

  function funcB() { }   // 📌함수 선언식은 함수 블록안에서만 지역 스코프를 갖게 됨!
}

funcA();
// 1. 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함.
function main(value) {
  value();  // 결과 값으로 sub() 함수가 호출되어 I am sub가 콘솔에 출력됨.
}

function sub() {
  // console.log("I am sub");
}

// 함수 표현식으로 변형
// main(function sub() {
//   console.log("I am sub");
// });

// 화살표 함수로 변형
// main(() => {
//   console.log("I am sub");
// });

main(sub);
// 👉 sub() 함수는 main() 함수의 인수로 전달되어 나중에 실행되므로 콜백함수라고 함.
// 콜백함수는 main 함수가 언제든지 원하는 타이밍에 실행시킬 수 있음!

// 2. 콜백함수의 활용  
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}


repeat(5, (idx) => {
  console.log(idx)
});

repeat(5, (idx) => {
  console.log(idx * 2)
});

repeat(5, (idx) => {
  console.log(idx * 3)
});

// 📌 콜백함수를 이용하면 중복코드를 제거하면서 간결하게 코드 작성을 할 수 있음!

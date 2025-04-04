// 📌동기 : 여러개의 작업을 순서대로, 하나씩 처리하는 방식
// 자바스크립트는 동기적으로 코드를 실행함!
// 자바스크립트 엔진에는 쓰레드(Thread) 가 1개밖에 없어서(싱글 쓰레드) 멀티쓰레드 방식으로 문제해결을 할 수 없음.
// ==> 자바스크립트에서는 '비동기' 방식으로 문제를 해결함!
// ==> 💡 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs(웹 브라우저가 직접 관리하는 별도의 영역)에서 실행됨

// 📌비동기 : 여러개의 작업을 순서대로 처리하지 않는 방식

console.log(1);

setTimeout(() => {
  console.log(2)
}, 3000)    // 특정시간이 지난 이후에 콜백함수를 비동기적으로 실행시켜줌. 3초 후에 실행

console.log(3);

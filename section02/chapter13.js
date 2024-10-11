// 📌Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// Promise 는 비동기 작업을 감싸는 객체임.
// 💡Promise의 3가지 상태
// 대기(Pending): 아직 작업이 완료되지 않은 상태,
// ====> 대기 상태였다가 성공 되었을 때 resolve(해결) 되었다고 함.
// 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태,
// ====> 대기 상태였다가 실패 되었을 때 reject(거부) 되었다고 함.
// 실패(Rejected) : 비동기 작업이 실패한 상태

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor : Promise 객체를 생성하면서 인수로 전달되는 콜백함수를 말함.

    setTimeout(() => {

      if (typeof num === 'number') {
        resolve(num + 10);    // promise 객체의 상태를 fulfilled 상태로 바꿔주는 함수, 인수로 promise의 결과값을 전달해줌.
      } else {
        reject("num이 숫자가 아닙니다.");   // promise 객체의 상태를 rejected 상태로 바꿔주는 함수, 인수로 promise의 결과값을 전달해줌.
      }
    }, 2000);
  });

  return promise;
}

// ---- prmise의 비동기 작업이 '성공'했을 경우에만
// ✨then 메서드를 통해 promise 객체의 결과값을 불러다가 이용할 수 있음!
// -> 그 후에
// executor 함수에서 resolve를 호출하게 되면 그 후에 then 메서드에 전달한 콜백함수를 실행시켜 줌.

add10(0)
  .then((result) => {   // then과 catch 를 연달아서 사용하는 문법을 'promise 체이닝' 이라 함!
    console.log(result);    // promise 객체의 결과값이 출력됨.
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  }).then((result) => {
    console.log(result);
  })
  .catch((error) => {   // ---- prmise의 비동기 작업이 '실패'했을 경우 ✨catch 메서드를 통해 promise 객체의 결과값을 불러다가 이용할 수 있음!
    console.log(error);
  });



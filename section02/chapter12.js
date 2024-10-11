// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);    // 콜백함수 호출
//   }, 3000);
// }

// add(1, 2, (value) => {    // 비동기 작업을 하는 함수의 결과값을 함수 외부에서 이용하고 싶을 경우 콜백함수를 사용해서
//   console.log(value)    // 비동기 함수 안에서 콜백함수를 호출하도록 하면 됨!
// });

// 음식을 주문하는 상황, 비동기 작업의 결과를 콜백함수로 처리하는 예시
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {  // 비동기 작업의 결과를 또다른 비동기 작업의 인수로 활용 
    console.log(cooldownedFood);            // => 이런 방식으로 계속 하게 되면 인덴트(들여쓰기)가 깊어지는 형태로 코드가 작성되게 됨
    // ==> 기능이 늘어날수록 가독성이 안좋아지게 됨 (💡콜백지옥)  => 콜백지옥을 피하기 위해서는 비동기작업을 도와주는 객체인 Promise 객체를 이용하면 됨!
    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
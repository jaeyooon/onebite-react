// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// console.log(isInclude);

// 3. indexOf 👉 특정 값을 찾을 때 얕은 비교로 동작함! 객체값은 참조값을 통해 비교가 되므로 배열에서 특정 객체값이 존재하는지는 찾아낼 수 없음
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);   // 존재하지 않는다는 의미로 -1을 반환함.
// console.log(index);

// 4. findIndex 👉 indexOf와는 달리 배열에서 특정 객체값이 존재하는지 여부를 알 수 있음!
// 특정 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;    // 가장 먼저 조건식에 만족하는 값을 반환
});

// console.log(findedIndex);

let objectArr = [
  { name: "홍길동" },
  { name: "조재윤" },
];

// console.log(
//   objectArr.findIndex(
//     (item) => item.name === "조재윤"
//   )
// );

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
  { name: "홍길동" },
  { name: "조재윤" },
];

const finded = arr5.find((item) => item.name === "조재윤");
console.log(finded);




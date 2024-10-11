// 5가지 배열 변형 메서드
// 1. filter ✨
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "조재윤", hobby: "자전거타기" },
  { name: "홍길동", hobby: "테니스" },
  { name: "김철수", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);    // 이름들로만 구성된 배열이 반환됨.
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {   // 📌오름차순 정렬
  if (a > b) {
    // b가 a 앞에 와라
    return 1;   // -> b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;  // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;   // a, b 자리를 그대로 유지
  }
});

// console.log(arr3);

let arr4 = [1, 3, 6];
arr4.sort((a, b) => {   // 📌내림차순 정렬
  if (a > b) {
    // a가 b 앞에 와라
    return -1;   // -> a, b 배치
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;  // -> b, a 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;   // a, b 자리를 그대로 유지
  }
});

// console.log(arr4);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "jaeYoon"];
const joined = arr6.join(" ");    // 빈 문자열을 구분자로 설정
console.log(joined);

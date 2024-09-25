// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// console.log(returnFalse() && returnTrue());   // 단락평가가 작동하여 첫번째 피연산자 값만으로 결과가 확정되어 두번째 피연산자에는 접근하지 않음!
// // 📌 단락평가 => 특정 조건에 맞춰서 함수를 아예 호출하지 않도록 방지할 수 있는 기능을 가지고 있음!

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "조재윤" });

// ✨ Truthy한 값 // Truthy한 값 => 첫번째 Truthy한 값이 반환됨
// ✨ Truthy한 값 && Truthy한 값 => 두번째 Truthy한 값이 반환됨
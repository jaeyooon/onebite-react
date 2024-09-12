let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);

// 📌자바스크립트에서는 함수 선언문을 아래에 두어도 내부적으로 알아서
// 호이스팅이 되어 끌어올려져 실행되기 때문에 아무런 문제가 발생하지 않음!
// 호이스팅 -> 끌어올리다 라는 뜻

// 함수 
function getArea(width, height) {
  function another() {    // 중첩 함수
    console.log("another");
  }

  another();

  let area = width * height;

  return area;
}
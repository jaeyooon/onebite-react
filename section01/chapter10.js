// for(초기식; 조건식; 증감식) {}
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;   // 이 아래 코드는 실행되지 않고 바로 다음 반복회차로 넘어감.
  }
  console.log(idx);

  if (idx >= 5) {   // 중간에 강제로 종료해야 할 상황이 있을 경우
    break;
  }
}
export const getStringedDate = (targetDate) => { // Date 객체를 문자열로 변환해서 value 속성으로 넣어주기 위해
  // 날짜 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) { // 10 미만의 월은 두자리 수가 되지 않으므로 템플릿 리터럴로 두자리 수로 바꿔줌.
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
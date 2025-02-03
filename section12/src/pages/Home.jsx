import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
import usePageTitle from "../hooks/usePageTitle";

// ✨로직이 복잡하고 해당함수가 매개변수만으로도 필요한 데이터를 다 제공받을 수 있으며 불필요한 함수의 재생성을 방지하기 위해 컴포넌트 외부에 함수 선언
const getMonthlyData = (pivotDate, data) => {

  const beginTime = new Date( // 📌해당하는 달의 가장 첫번째 시간이 담겨있음
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();   // 해당하는 달의 시작인 1일 0시 0분 0초

  const endTime = new Date(   // 📌해당하는 달의 가장 마지막 시간이 담겨있음
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,  // 해당하는 달의 이전 달의 마직막 날을 뜻함.
    23,
    59,
    59  // 23시 59분 59초
  ).getTime();

  return data.filter((item) =>    // 해당 달의 일기 데이터만 추출하도록
    beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  usePageTitle("감정 일기장");
  const data = useContext(DiaryStateContext);   // context가 공급하는 일기 데이터를 data라는 이름으로 받아옴.
  const [pivotDate, setPivotDate] = useState(new Date());
  
  const monthlyData = getMonthlyData(pivotDate, data);    // 컴포넌트가 리렌더링 될 때마다 호출

  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)   // 기존의 pivotDate를 기준으로 년도는 동일한데 월은 한달 증가하도록 함.
    );
  };
  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    );
  };

  return (
    <div>
      <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}    // 템플릿 리터럴을 통해
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />    {/* 필터링된 일기들이 렌터링되도록 data라는 이름의 props로 전달 */}
    </div>
  )
};

export default Home;
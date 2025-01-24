import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");   // 정렬 기준

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
 
  const getSortedData = () => {   // 정렬 기준을 토대로 일기 데이터를 실제로 정렬 시켜주는 함수
    return data.toSorted((a, b) => {  // toSorted 메서드는 원본 배열은 그대로 두고 정렬된 새로운 배열을 반환함.
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();   // 컴포넌트가 리렌더링 될 떄마다 호출해서 정렬된 데이터 담음

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav(`/new`)}   // 클릭시 새로운 일기 쓰는 페이지로 이동
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}   {/* spread 연산자를 통해서 모든 item의 데이터를 DiaryItem 컴포넌트에게 props로서 전달해줌  */}
      </div>
    </div>
  )
};

export default DiaryList;
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {  // 커스텀 훅
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {   
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)   // 서로 타입이 다를 수 있으므로 안전한 비교를 위해 String 타입으로 강제로 형 변환
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);    // useEffect로 컴포넌트가 마운트 된 이후이거나 params의 id가 변경될 때 실행되도록 함.

  return curDiaryItem;
}

export default useDiary;
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();  // 페이지를 이동시키는 기능을 가지고 있는 함수를 nav라는 변수에 저장

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}   // 이미지 클릭시 해당 일기 상세페이지로 이동
        className={`img_section img_section_${emotionId}`}
      >    {/* emotionId를 동적으로 넣어줌 */}
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div
        onClick={() => nav(`/diary/${id}`)}   // 클릭시 해당 일기 상세페이지로 이동
        className="info_section"
      >
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">
          {content}
        </div>
      </div>
      <div className="button_section">
        <Button
          onClick={() => nav(`/edit/${id}`)}  // 클릭시 일기 수정 페이지로 이동
          text={"수정하기"}
        />
      </div>
    </div>
  )
};

export default DiaryItem;
import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = ({emotionId, content}) => {

  const emotionItem = emotionList.find(   // 감정 번호에 해당하는 감정 데이터가 들어올 것임
    (item) => String(item.emotionId) === String(emotionId)    // 안전한 비교를 위해 강제로 형 변환
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div
          className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}
        >
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  )
};

export default Viewer;
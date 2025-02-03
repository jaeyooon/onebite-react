import { useParams, useNavigate } from "react-router-dom"; {/* useParams : 현재 브라우저에 명시한 url 파라미터의 값을 가져오는 커스텀 훅 */}
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  const curDiaryItem = useDiary(params.id);

  // 📌useDiary 훅에 useEffect는 컴포넌트가 마운트 된 이후에 실행되므로 컴포넌트가 최초로 호출되었을 때에는 useEffect는 실행되지 않아
  // useDiary의 첫번째 반환값은 undefined가 될 수 있음.
  // 따라서 이와 같은 상황을 대바해야 함!
  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;   // 구조 분해 할당
  const title = getStringedDate(new Date(createdDate));

  return (<div>
    <Header title={`${title} 기록`}   // 템플릿 리터럴 사용
      leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      rightChild={<Button
        onClick={() => nav(`/edit/${params.id}`)}
        text={"수정하기"}
      />}
    />
    <Viewer emotionId={emotionId} content={content} />
  </div>)
};

export default Diary;
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);  // DiaryDispatchContext로부터 App 컴포넌트에서 새로운 일기를 생성하는 함수인 onCreate를 공급받음
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(
      input.createdDate.getTime(),    // 타임스탬프 형태로 저장하기 위해
      input.emotionId,
      input.content
    );
    nav('/', { replace: true });    // ✨작성완료 후에는 Home 페이지로 이동하면서 뒤로가기도 방지(New 페이지 접근 불가)되도록 두번째 인수로 replace: true 해줌
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />   // nav의 인수로 -1을 넘겨주면 페이지를 뒤로 이동시켜줌
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  )
};

export default New;
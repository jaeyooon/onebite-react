import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();    // 📌navigate 함수는 모든 컴포넌트가 다 마운트된 이후에만 동작할 수 있음!
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);   // 커스텀 훅을 통해 id에 해당하는 일기 데이터를 가져옴.

  usePageTitle(`${params.id}번 일기 수정`);

  const onClickDelete = () => {
    if(
    window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")   // 취소와 확인 버튼이 있는 팝업창을 발생시키는 기능을 함.
    ) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });  // 📌컴포넌트가 다 렌더링되고 나서 삭제 버튼이 눌렸을때 호출됨 / 삭제 완료 후에는 Home 페이지로 이동시키고 뒤로가기 방지
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),   // Editor 컴포넌트로부터 전달받은 createdDate는 Date 객체이므로 타임스탬프 형식으로 바꿔줌.
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });    // 수정 완료 후에는 Home 페이지로 이동시키고 뒤로 가기 방지
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
        }
        rightChild={
          <Button
          onClick={onClickDelete}
          text={"삭제하기"}
          type={"NEGATIVE"}
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />  
    </div>
  )
};

export default Edit;
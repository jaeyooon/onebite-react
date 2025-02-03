// 페이지의 타이틀을 바꿔주는 커스텀 훅
import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];   // ✨title이라는 이름을 갖는 모든 태그를 불러와서 0번 요소를 골라내면 페이지의 title 태그가 $title에 저장됨.
    $title.innerText = title;    // page title 설정
  }, [title]);    // 컴포넌트가 마운트 되었을 때 뿐만 아니라 title 값이 변경될 때마다 실행하여 페이지의 title을 바꿔줌
};

export default usePageTitle;
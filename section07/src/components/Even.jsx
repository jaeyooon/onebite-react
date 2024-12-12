import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
     };   // 클린업, 정리함수 : useEffect 가 끝날 때 즉 unmount 될때 실행됨.
  }, [])

  return <div>짝수입니다</div>
}

export default Even;
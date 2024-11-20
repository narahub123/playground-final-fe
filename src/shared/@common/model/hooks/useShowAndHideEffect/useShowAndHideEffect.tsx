import { useEffect, useState } from "react";

const useShowAndHideEffect = (
  setToggle: React.Dispatch<React.SetStateAction<boolean>>, // 토글
  effect: "fadeInAndOut" | "dropdown" = "fadeInAndOut" // 적용 효과
) => {
  const [modalState, setModalState] = useState("hidden");

  // 초기 상태(모달창이 열렸을 때) 변경: show로 변경
  useEffect(() => {
    setModalState("show");
  }, []);

  // 모달창을 닫고 싶을 때: 모달창이 닫히는 효과 발생
  const hideModal = () => {
    setModalState("hidding"); // 이전
  };

  // transition이 완료된 후 호출될 함수
  const handleTransitionEnd = () => {
    if (modalState === "hidding") {
      setModalState("hidden");
      setToggle(false); // toggle 종료
    }
  };

  const mode = effect === "fadeInAndOut" ? "fadeInAndOut " : "dropdown ";

  const showCond = modalState === "show" ? mode + "show" : mode + "hidden";

  return {
    showCond,
    hideModal,
    handleTransitionEnd,
  };
};

export default useShowAndHideEffect;

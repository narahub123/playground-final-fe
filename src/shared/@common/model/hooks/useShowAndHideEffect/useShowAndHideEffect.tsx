import { useEffect, useState } from "react";

type EffectMode = "fadeInAndOut" | "dropdown";

const useShowAndHideEffect = (
  setToggle: React.Dispatch<React.SetStateAction<boolean>>, // 토글
  effect: EffectMode = "fadeInAndOut" // 적용 효과
) => {
  const [modalState, setModalState] = useState("hidden");

  const initializeModal = () => {
    setModalState("show");
  };

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

  const showCond =
    modalState === "show" ? `${effect} show` : `${effect} hidden`;

  // 초기 상태(모달창이 열렸을 때) 변경: show로 변경
  useEffect(() => {
    initializeModal();
  }, []);

  return {
    showCond,
    hideModal,
    handleTransitionEnd,
  };
};

export default useShowAndHideEffect;

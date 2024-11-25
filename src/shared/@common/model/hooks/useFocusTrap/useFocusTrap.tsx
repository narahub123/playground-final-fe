import { useLayoutEffect, useState } from "react";

interface useFocusTrapProps {
  ref: React.RefObject<HTMLElement>;
  location: string; // 테스트를 위한 코드 : 굳이 필요없음
  showModal?: boolean; // 되돌아가야 할 컴포넌트에서 사용됨
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>; // 닫힐 컴포넌트에서 사용됨
  hideModal?: () => void; // 닫힐 컴포넌트에서 사용됨
}

// 포커스 가능한 요소들 찾는 함수 (tabIndex가 0 이상인 요소들)
function getFocusableElements(element: HTMLElement) {
  return Array.from(
    element.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled"));
}

const useFocusTrap = ({
  ref,
  location,
  showModal,
  setShowModal,
  hideModal,
}: useFocusTrapProps) => {
  const [lastClick, setLastClick] = useState<HTMLElement | null>(null);

  const handleEscapeKeyDown = () => {
    if (hideModal) {
      hideModal();
    } else {
      setShowModal && setShowModal(false);
    }
  };

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const focusableElements = getFocusableElements(element); // 해당 요소 내에서 포커스 가능한 요소들 찾기
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const moveToNextElement = () => {
      const currentIndex = focusableElements.findIndex(
        (el) => el === document.activeElement
      );

      // 다음 인덱스
      const nextIndex =
        currentIndex + 1 >= focusableElements.length ? 0 : currentIndex + 1;

      // 다음 요소
      const element = focusableElements[nextIndex] as HTMLElement;
      element.focus();
    };

    const moveToPrevElement = () => {
      const currentIndex = focusableElements.findIndex(
        (el) => el === document.activeElement
      );

      // 이전 인덱스
      const prevIndex =
        currentIndex - 1 < 0 ? focusableElements.length - 1 : currentIndex - 1;

      // 이전 요소
      const element = focusableElements[prevIndex] as HTMLElement;
      element.focus();
    };

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstElement) {
          // Shift + Tab
          event.preventDefault();
          event.stopPropagation();
          lastElement.focus(); // 마지막 요소로 포커스를 이동
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          // Tab
          event.preventDefault();
          event.stopPropagation();
          firstElement.focus(); // 첫 번째 요소로 포커스를 이동
        }
      } else if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        console.log(`${location}에서 enter가 클릭됨`);
        const currentElement = document.activeElement as HTMLElement;
        currentElement.click();
      } else if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        handleEscapeKeyDown();
      } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        event.stopPropagation();
        moveToNextElement();
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        event.stopPropagation();
        moveToPrevElement();
      }
    }

    if (lastClick && !showModal) {
      console.log("기존 요소가 있고 모달창이 닫히는 경우");
      console.log("기존 요소", lastClick);

      // lastClick과 일치하는 요소를 찾기 (isEqualNode 비교)
      // 모달창이 이중으로 열린 경우에는 기존 방법으로는 저장된 요소가 포커스 가능한 요소 내의 요소라는 것을 인식 못함
      // 따라서 같은 구조의 요소를 찾아서 그 요소에 포커스를 주는 방식을 택함 : 나중에 문제 발생할 수도 있음
      const matchedElement = focusableElements.find((el) =>
        el.isEqualNode(lastClick)
      ) as HTMLElement;

      if (matchedElement) {
        matchedElement.focus(); // 기존 요소에 포커스 설정
      } else {
        firstElement.focus(); // 첫 번째 포커스 가능한 요소에 포커스 설정
      }
    } else if (!lastClick) {
      console.log("기존 요소가 없고 모달창이 닫히는 경우");
      firstElement.focus(); // 처음에 첫 번째 포커스 가능한 요소에 포커스 설정
    }

    element.addEventListener("keydown", handleKeyDown); // keydown 이벤트 리스너 추가

    return () => element.removeEventListener("keydown", handleKeyDown); // 리스너 제거 함수 반환
  }, [ref, setShowModal, lastClick, setLastClick, showModal]); // 의존성 배열 추가

  return {
    lastClick,
    setLastClick,
  };
};

export default useFocusTrap;

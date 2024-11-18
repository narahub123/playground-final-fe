import React, { useEffect, useRef } from "react";

interface FocusTrapProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

// focusTrapRef.current 아래에 존재하는 모든 요소를 재귀저긍로 순회하면서
// 포커스 가능한 모든 요소를 찾아서 배열로 반환해주는 메소드
const getFocusableElements = (
  element: HTMLElement | ChildNode | null, // 탐색할 DOM 요소 (HTMLElement 또는 ChildNode)
  result: HTMLElement[] = [] // 결과를 누적할 배열. 기본값은 빈 배열.
  // 메소드 내의 변수가 아니라 매개 변수로 넣은 이유: 메소드 내에 변수로 넣을 경우 메서드 시작과 함께 초기화되어서 결과를 누적 시킬 수 없기 때문에
) => {
  // 만약 element가 null이거나 childNodes가 없다면 빈 배열을 반환.
  if (!element || !element?.childNodes) return result;

  // element의 모든 자식 노드를 순회
  for (const childNode of element.childNodes) {
    const childElement = childNode as HTMLElement;

    // childElement가 포커스를 받을 수 있는 요소인지 확인 (tabIndex >= 0)
    if (childElement.tabIndex >= 0) {
      result.push(childElement);
    }

    // 자식 요소가 있을 경우 재귀적으로 호출하여 자식 요소를 탐색
    getFocusableElements(childElement, result);
  }

  return result;
};

const FocusTrap = (props: FocusTrapProps) => {
  const focusTrapRef = useRef<HTMLDivElement>(null);

  const { children, ...others } = props;

  const child = React.Children.only(children);

  const Compo = React.cloneElement(child, {
    ...{ ...others, ...child?.props },
    tabIndex: -1,
    ref: focusTrapRef,
  });

  const focusableElements = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    focusableElements.current = getFocusableElements(focusTrapRef.current);
  }, [focusTrapRef.current]);

  const firstElement = focusableElements.current[0];
  const lastElement = focusableElements.current.at(-1); // at에 대해서 알아보기

  const currentFocusIndex = useRef(-1);

  const focusNextElement = () => {
    const nextIndex =
      currentFocusIndex.current + 1 >= focusableElements.current.length
        ? 0
        : currentFocusIndex.current + 1;

    const element = focusableElements.current[nextIndex] || firstElement;

    element?.focus();
    currentFocusIndex.current =
      nextIndex >= focusableElements.current.length ? 0 : nextIndex;
  };

  const focusPrevElement = () => {
    const prevIndex =
      currentFocusIndex.current - 1 >= 0
        ? currentFocusIndex.current - 1
        : focusableElements.current.length - 1;
    const element = focusableElements.current[prevIndex] || lastElement;

    element?.focus();
    currentFocusIndex.current =
      prevIndex < 0 ? focusableElements.current.length - 1 : prevIndex;
  };

  const handleTabKeyDown = (event: KeyboardEvent) => {
    const isTabDown = !event.shiftKey && event.key === "Tab";
    if (!isTabDown) return;

    event.preventDefault();
    focusNextElement();
  };

  const handleShiftTabKeyDown = (event: KeyboardEvent) => {
    const isShiftTabDown = event.shiftKey && event.key === "Tab";
    if (!isShiftTabDown) return;

    event.preventDefault();
    focusPrevElement();
  };

  // enter를 누른 경우 해당 요소의 onclick 요소 호출
  const handleEnterKey = (event: KeyboardEvent) => {
    const isEnterKey = event.key === "Enter";
    if (!isEnterKey) return;

    event.preventDefault();
    focusableElements.current[currentFocusIndex.current]?.click();
  };

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      console.log(e.key);

      handleTabKeyDown(e);
      handleShiftTabKeyDown(e);
      handleEnterKey(e);
    };

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, []);

  return <>{Compo}</>;
};

export default FocusTrap;

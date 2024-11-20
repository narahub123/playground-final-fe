import React, { useEffect, useState } from "react";

const useDynamicPosition = (ref: React.RefObject<HTMLElement | null>) => {
  const [position, setPosition] = useState("top-left");
  // 컨테이너의 창 내에의 위치에 따라 모달창 위치 변경하기
  useEffect(() => {
    if (!ref.current) return;

    const modal = ref.current;
    const parentElem = modal.parentElement as HTMLElement;

    // 창 너비, 창 높이
    const { clientWidth, clientHeight } = document.documentElement;

    const parentRect = parentElem.getBoundingClientRect();
    const modalRect = modal.getBoundingClientRect();

    const shouldFlipHorizontally =
      clientWidth - parentRect.right < modalRect.width;
    const shouldFlipvertically =
      clientHeight - parentRect.bottom < modalRect.height;

    if (shouldFlipHorizontally && shouldFlipvertically) {
      setPosition("bottom-right");
    } else if (shouldFlipHorizontally && !shouldFlipvertically) {
      setPosition("top-right");
    } else if (!shouldFlipHorizontally && shouldFlipvertically) {
      setPosition("bottom-left");
    } else if (!shouldFlipHorizontally && !shouldFlipvertically) {
      setPosition("top-left");
    }
  }, [ref]);

  return position;
};

export default useDynamicPosition;

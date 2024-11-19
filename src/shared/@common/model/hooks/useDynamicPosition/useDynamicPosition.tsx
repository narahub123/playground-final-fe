import React, { useEffect } from "react";

const useDynamicPosition = (ref: React.RefObject<HTMLElement | null>) => {
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

    if (shouldFlipHorizontally) {
      modal.style.right = `0px`;
      modal.style.left = "auto";
    } else {
      modal.style.left = "0px";
      modal.style.right = "auto";
    }

    if (shouldFlipvertically) {
      modal.style.bottom = `0px`;
      modal.style.top = "auto";
    } else {
      modal.style.top = `0px`;
      modal.style.bottom = "auto";
    }
  }, [ref]);

  //   return modalPosition;
};

export default useDynamicPosition;

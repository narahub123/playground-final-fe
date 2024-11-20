import { fireEvent, render, renderHook, screen } from "@testing-library/react";

import useClickOutside from "./useClickOutside";
import { useRef, useState } from "react";

describe("useClickOutside Hook", () => {
  it("클릭 이벤트의 타겟을 확인해야 함", () => {
    const { result } = renderHook(() => {
      const containerRef = useRef<HTMLElement | null>(null);
      const [toggle, setToggle] = useState(true);
      useClickOutside(containerRef, setToggle);

      return { containerRef, toggle, setToggle };
    });

    const modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    const outside = document.createElement("div");
    outside.setAttribute("id", "outside");
    document.body.appendChild(modal);
    document.body.appendChild(outside);

    // ref를 모달에 연결
    result.current.containerRef.current = modal; // 이해하기

    // 모달 내부 클릭
    const modalClickEvent = new MouseEvent("click", { bubbles: true });
    Object.defineProperty(modalClickEvent, "target", { value: modal });
    fireEvent(modal, modalClickEvent);

    // target 인식하는지 확인
    expect(modalClickEvent.target).toBe(modal);
    // target에 따른 toggle 변화 확인
    expect(result.current.toggle).toBe(true);

    // 모달 외부 클릭
    const outSideClickEvent = new MouseEvent("click", { bubbles: true });
    Object.defineProperty(outSideClickEvent, "target", { value: outside });
    fireEvent(outside, outSideClickEvent);

    // target 인식하는지 확인
    expect(outSideClickEvent.target).toBe(outside);
    // target에 따른 toggle 변화 확인
    expect(result.current.toggle).toBe(false);

    // 정리
    document.body.removeChild(modal);
    document.body.removeChild(outside);
  });
});

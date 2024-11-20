import { renderHook } from "@testing-library/react";
import { useRef } from "react";
import useDynamicPosition from "./useDynamicPosition";

describe("useDynamicPosition Hoook", () => {
  it("모달이 부모 엘리먼트의 위치에 따라서 좌우로 플립되어야 함", () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLElement | null>(null);
      useDynamicPosition(ref);
      return ref;
    });

    // 모달과 부모 요소 생성
    const parentElem = document.createElement("div");
    const modal = document.createElement("div");
    parentElem.appendChild(modal);
    document.body.appendChild(parentElem);

    // ref에 연결
    result.current.current = modal; // ?? 이 코드 이해 안됨

    // 부모와 모달의 위치 설정
    Object.defineProperty(parentElem, "getBoundingClientRect", {
      value: () => ({
        top: 0,
        left: 900,
        bottom: 50,
        right: 950,
        width: 50,
        height: 50,
      }),
    });

    Object.defineProperty(modal, "getBoundingClientRect", {
      value: () => ({
        top: 0,
        left: 0,
        bottom: 100,
        right: 100,
        width: 100,
        height: 100,
      }),
    });

    // 창 크기 설정
    Object.defineProperty(document.documentElement, "clientWidth", {
      value: 1000,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 500,
    });

    // DOM이 업데이트되도록 강제 렌더링
    renderHook(() => useDynamicPosition(result.current));

    // 좌우 플립 확인
    expect(modal.style.left).toBe("");
    expect(modal.style.right).toBe("0px");

    // 정리
    document.body.removeChild(parentElem);
  });

  it("모달이 부모 엘리먼트의 위치에 따라 상하로 플립된다", () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLElement | null>(null);
      useDynamicPosition(ref);
      return ref;
    });

    // 모달과 부모 요소 생성
    const parentElem = document.createElement("div");
    const modal = document.createElement("div");
    parentElem.appendChild(modal);
    document.body.appendChild(parentElem);

    // ref 연결
    result.current.current = modal;

    // 부모와 모달의 위치 설정
    Object.defineProperty(parentElem, "getBoundingClientRect", {
      value: () => ({
        top: 400,
        left: 0,
        bottom: 450,
        right: 50,
        width: 50,
        height: 50,
      }),
    });

    Object.defineProperty(modal, "getBoundingClientRect", {
      value: () => ({
        top: 0,
        left: 0,
        bottom: 100,
        right: 100,
        width: 100,
        height: 100,
      }),
    });

    // 창 크기 설정
    Object.defineProperty(document.documentElement, "clientWidth", {
      value: 1000,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 500,
    });

    // DOM이 업데이트되도록 강제 렌더링
    renderHook(() => useDynamicPosition(result.current));

    // 상하 플립 확인
    expect(modal.style.top).toBe("");
    expect(modal.style.bottom).toBe("0px");

    // 정리
    document.body.removeChild(parentElem);
  });
});

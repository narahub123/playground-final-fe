import React, { ReactElement, useLayoutEffect, useRef, useState } from "react";
import styles from "./Skeleton.module.css";
import { useShowAndHideEffect } from "@shared/@common/model/hooks";

interface SkeletonCircleProps {
  size: number; // 원의 지름
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkeletonCircle = ({
  size,
  isLoading = true, // loading 여부에 따라 보이기 숨기기 조절 때 사용
  setIsLoading, // fade-in fade-out 이벤트 적용시
}: SkeletonCircleProps) => {
  if (!isLoading) return null;

  let show;
  let transition;
  if (setIsLoading) {
    const { showCond, handleTransitionEnd } =
      useShowAndHideEffect(setIsLoading);

    show = showCond;

    transition = handleTransitionEnd;
  }

  return (
    <div
      className={`${styles.skeletonCircle} ${show}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      onTransitionEnd={transition}
      aria-busy="true" // 로딩 상태임을 화면 리더에게 알림
      aria-live="polite" // 상태 변화를 알릴 수 있는 설정 - polite: 사용자 작업을 방해하지 않고 업데이트를 알리는 옵션
    />
  );
};

interface SkeletonTextProps {
  noOfLines: number;
  gap?: number;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkeletonText = ({
  noOfLines,
  gap = 1,
  isLoading = true, // loading 여부에 따라 보이기 숨기기 조절 때 사용
  setIsLoading, // fade-in fade-out 이벤트 적용시
}: SkeletonTextProps) => {
  if (!isLoading) return null;

  let show;
  let transition;
  if (setIsLoading) {
    const { showCond, handleTransitionEnd } =
      useShowAndHideEffect(setIsLoading);

    show = showCond;

    transition = handleTransitionEnd;
  }

  const Compo = Array.from({ length: noOfLines }).map((_, index) => (
    <li style={{}} className={styles.skeletonText} key={index} />
  ));

  return (
    <ul
      className={`${styles[`skeleton-text-container`]} ${show}`}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        gap: `${8 * gap}px`,
      }}
      onTransitionEnd={transition}
      aria-busy="true" // 로딩 상태임을 화면 리더에게 알림
      aria-live="polite" // 상태 변화를 알릴 수 있는 설정 - polite: 사용자 작업을 방해하지 않고 업데이트를 알리는 옵션
    >
      {Compo}
    </ul>
  );
};

interface SkeletonProps {
  height?: number;
  asChild?: boolean;
  children?: ReactElement;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Skeleton = ({
  height,
  asChild,
  children,
  isLoading = true, // loading 여부에 따라 보이기 숨기기 조절 때 사용
  setIsLoading, // fade-in fade-out 이벤트 적용시
}: SkeletonProps) => {
  const [flexGrow, setFlexGrow] = useState("1");

  const skeletonRef = useRef<HTMLDivElement>(null);

  let show;
  let transition;
  if (setIsLoading) {
    const { showCond, handleTransitionEnd } =
      useShowAndHideEffect(setIsLoading);

    show = showCond;

    transition = handleTransitionEnd;
  }

  useLayoutEffect(() => {
    const curElem = skeletonRef.current;
    const childElem = curElem?.children[0];
    const grandElem = childElem?.children[0] as HTMLElement;
    console.log(grandElem);

    if (grandElem) {
      const grandStyle = window.getComputedStyle(grandElem);

      setFlexGrow(grandStyle.flexGrow);
    }
  }, []);

  if (!isLoading) return null;

  // loading 중 일 때만 보임
  if (isLoading) {
    if (!children) {
      return (
        <div
          className={`${styles.skeleton} ${show}`}
          style={{
            height: `${height}px`,
            width: `${"100%"}`,
          }}
          onTransitionEnd={transition}
          aria-busy="true" // 로딩 상태임을 화면 리더에게 알림
          aria-live="polite" // 상태 변화를 알릴 수 있는 설정 - polite: 사용자 작업을 방해하지 않고 업데이트를 알리는 옵션
        />
      );
    } else if (children && !asChild) {
      return (
        <div
          className={`${styles.skeleton} ${show}`}
          style={{
            height: `${height}px`,
            width: `${"100%"}`,
          }}
          onTransitionEnd={transition}
          aria-busy="true" // 로딩 상태임을 화면 리더에게 알림
          aria-live="polite" // 상태 변화를 알릴 수 있는 설정 - polite: 사용자 작업을 방해하지 않고 업데이트를 알리는 옵션
        >
          <div style={{ visibility: "hidden" }}>{children}</div>
        </div>
      );
    } else if (children && asChild) {
      const Compo = React.cloneElement(children, {
        ...{ ...children.props },
        disabled: true, // children에 포커스가 영향을 주지 못하기 위한 속성
      });

      return (
        <div
          className={`${styles.skeleton} ${show}`}
          style={{
            flexGrow: `${flexGrow}`, // 요소에 맞게 flex-grown도 변경
            display: `${flexGrow === "1" ? "block" : "inline-flex"}`,
            borderRadius: "4px",
          }}
          ref={skeletonRef}
          onTransitionEnd={transition}
          aria-busy="true" // 로딩 상태임을 화면 리더에게 알림
          aria-live="polite" // 상태 변화를 알릴 수 있는 설정 - polite: 사용자 작업을 방해하지 않고 업데이트를 알리는 옵션
          aria-hidden="true" // 자식 요소가 보이지 않고  비활성화된 상태임
        >
          <div
            style={{
              visibility: "hidden",
            }}
          >
            {Compo}
          </div>
        </div>
      );
    }
  }
};

export { SkeletonCircle, Skeleton, SkeletonText };

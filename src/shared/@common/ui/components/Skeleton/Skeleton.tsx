import React, { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./Skeleton.module.css";

interface SkeletonCircleProps {
  size: number; // 원의 지름
  loading?: boolean; // loading이 false이면 사라짐
}

const SkeletonCircle = ({ size, loading = true }: SkeletonCircleProps) => {
  if (!loading) return null;

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={styles.skeletonCircle}
    />
  );
};

interface SkeletonTextProps {
  noOfLines: number;
  gap?: number;
  loading?: boolean; // loading이 false이면 사라짐
}

const SkeletonText = ({
  noOfLines,
  gap = 1,
  loading = true,
}: SkeletonTextProps) => {
  if (!loading) return null;

  const Compo = Array.from({ length: noOfLines }).map((_, index) => (
    <li style={{}} className={styles.skeletonText} key={index} />
  ));

  return (
    <ul
      className={styles[`skeleton-text-container`]}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        gap: `${8 * gap}px`,
      }}
    >
      {Compo}
    </ul>
  );
};

interface SkeletonProps {
  height?: number;
  asChild?: boolean;
  children?: ReactElement;
}

const Skeleton = ({ height, asChild, children }: SkeletonProps) => {
  if (!children) {
    return (
      <div
        className={styles.skeleton}
        style={{
          height: `${height}px`,
          width: `${"100%"}`,
        }}
      />
    );
  } else if (children && !asChild) {
    return (
      <div
        className={styles.skeleton}
        style={{
          height: `${height}px`,
          width: `${"100%"}`,
        }}
      >
        <div style={{ visibility: "hidden" }}>{children}</div>
      </div>
    );
  } else if (children && asChild) {
    return (
      <div
        className={styles.skeleton}
        style={{
          width: "fit-content", // 자식요소와 동일한 크기를 가지게 하기 위한 설정
          borderRadius: "2px",
        }}
      >
        <div style={{ visibility: "hidden" }}>{children}</div>
      </div>
    );
  }
};

export { SkeletonCircle, Skeleton, SkeletonText };

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
  width: number;
}
const Skeleton = ({ width }: SkeletonProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.skeleton}
          style={{ width: `${width}px`, aspectRatio: `4/3` }}
        />
      </div>
    </div>
  );
};

export { SkeletonCircle, Skeleton, SkeletonText };

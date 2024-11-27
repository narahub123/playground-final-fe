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

export { SkeletonCircle, Skeleton };

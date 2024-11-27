import styles from "./Skeleton.module.css";

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

export default Skeleton;

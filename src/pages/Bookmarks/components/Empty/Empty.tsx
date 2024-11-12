import styles from "./Empty.module.css";

type EmptyProps = {
  title: string;
  description: string;
};

// 게시물이 없는 경우 사용하는 컴포넌트
const Empty = ({ title, description }: EmptyProps) => {
  return (
    <div className={styles.empty}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Empty;

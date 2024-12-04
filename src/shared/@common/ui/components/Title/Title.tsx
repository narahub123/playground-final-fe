import styles from "./Title.module.css";

interface TitleProps {
  text: string; // 타이틀 내용
  className?: string; // 스타일 추가
}

const Title = ({ text, className }: TitleProps) => {
  return <h3 className={`${styles.title} ${className}`}>{text}</h3>;
};

export default Title;

import styles from "./WriteButton.module.css";

type WriteButtonProps = {
  text: string;
  isValid: boolean; // 저장 가능 여부 확인
};

const WriteButton = ({ text, isValid }: WriteButtonProps) => {
  return (
    <button
      className={`${styles.button} ${isValid ? styles.active : undefined}`}
      disabled={isValid ? false : true}
    >
      {text}
    </button>
  );
};

export default WriteButton;

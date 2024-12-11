import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  handleClick: (value: any) => any;
  isValid?: boolean; // 유효성 검사: 클릭 이벤트와 버튼 스타일과 관계
  className?: string; // 추가 스타일링
}

const Button = ({
  text,
  isValid = false,
  className,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`button ${styles.button} ${
        isValid ? styles.valid : styles.invalid
      } ${className}`}
      onClick={handleClick}
      tabIndex={isValid ? 0 : -1} // 유효성에 따른 포커스 가능 여부 변경
    >
      {text}
    </button>
  );
};

export default Button;

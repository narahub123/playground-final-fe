import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
import Icon from "../Icon/Icon";

interface InputProps {
  field: string;
  fieldTitle: string;
  valueMaxLength?: number;
  iconName?: string;
  iconTitle?: string;
  iconColor?: string;
  iconHandleClick?: () => void;
}

const Input = ({
  field,
  fieldTitle,
  valueMaxLength,
  iconName,
  iconTitle = "",
  iconColor,
  iconHandleClick,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  // 비밀번호 보이기 여부 상태
  const [isVisible, setIsVisible] = useState(false);
  // 입력값의 유효성을 여부 상태
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState("");
  const focusCond = isFocus || value ? styles.focused : "";

  useEffect(() => {
    if (!isFocus) return;
    if (!inputRef.current) return;

    if (isFocus) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  // input type 변수
  const inputType = field === "password" && !isVisible ? "password" : "text";

  return (
    <div
      className={`${styles.container} ${focusCond}`}
      onClick={() => {}}
      tabIndex={0}
      onFocus={() => setIsFocus(true)}
      onBlur={(e) => {
        e.stopPropagation();
        setIsFocus(false);
      }}
    >
      <div className={`${styles.upper} ${focusCond}`}>
        <span className={`${styles.title} ${focusCond}`}>{fieldTitle}</span>
        <span
          className={`${styles.count} ${valueMaxLength ? focusCond : ""}`}
        >{`${value.length} / ${valueMaxLength}`}</span>
      </div>
      <div className={`${styles.lower} ${focusCond}`}>
        <input
          type={inputType}
          className={`${styles.input} ${focusCond}`}
          onChange={(e) => handleChange(e)}
          ref={inputRef}
        />
        {field === "password" && (
          <Icon
            iconName={isVisible ? "eyeoff" : "eye"}
            iconTitle={isVisible ? "비밀번호 숨기기" : "비밀번호 보이기"}
            handleClick={() => {
              setIsVisible(!isVisible);
            }}
            className={`${styles.icon} ${focusCond}`}
          />
        )}
        {field === "userId" && (
          <Icon
            iconName={isValid ? "valid" : "invalid"}
            iconTitle={isValid ? "입력값이 유효함" : "입력값이 유효하지 않음"}
            className={`${styles.icon} ${focusCond}`}
            color={isValid ? "green" : "red"}
            ariaHidden="true"
          />
        )}
        {iconName && (
          <Icon
            iconName={iconName}
            iconTitle={iconTitle}
            className={`${styles.icon} ${focusCond}`}
            color={iconColor}
            handleClick={iconHandleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Input;

import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
import Icon from "../Icon/Icon";
import { debounce } from "@shared/@common/utils";

interface InputProps {
  field: string;
  fieldTitle: string;
  valueMaxLength?: number;
  iconName?: string;
  iconTitle?: string;
  iconColor?: string;
  iconHandleClick?: () => void;
  errorMessage?: string;
  disabled?: boolean;
}

const Input = ({
  field,
  fieldTitle,
  valueMaxLength,
  iconName,
  iconTitle = "",
  iconColor,
  iconHandleClick,
  errorMessage,
  disabled = false,
}: InputProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  // 비밀번호 보이기 여부 상태
  const [isVisible, setIsVisible] = useState(false);
  // 입력값의 유효성을 여부 상태
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const focusCond = isFocus || value ? styles.focused : "";
  const validCond = !isValid && value ? styles.invalid : "";

  useEffect(() => {
    if (!isFocus || !inputRef.current) return;

    if (isFocus && document.activeElement === containerRef.current) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);

    setValue(value);
  };

  // debounce를 적용한 handleChange 함수
  const debounceHandleChange = debounce<typeof handleChange>(handleChange, 500);

  // input type 변수
  const inputType = field === "password" && !isVisible ? "password" : "text";

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${focusCond} ${validCond}`}
        onClick={() => {}}
        tabIndex={isFocus || disabled ? -1 : 0}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={containerRef}
      >
        <div className={`${styles.upper} ${focusCond}`}>
          <label htmlFor={field} className={`${styles.title} ${focusCond}`}>
            {fieldTitle}
          </label>
          <span
            className={`${styles.count} ${valueMaxLength ? focusCond : ""}`}
          >{`${value.length} / ${valueMaxLength}`}</span>
        </div>
        <div className={`${styles.lower} ${focusCond}`}>
          <input
            id={field}
            type={inputType}
            className={`${styles.input} ${focusCond}`}
            onChange={debounceHandleChange}
            ref={inputRef}
            aria-labelledby={field}
            aria-invalid={!isValid}
            aria-describedby={isValid ? "" : "input-error"}
            disabled={disabled}
            aria-hidden={disabled}
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
      {validCond && (
        <div className={styles.error}>
          <p id="input-error" className={styles[`error-message`]}>
            {errorMessage || "입력값이 유효하지 않습니다."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;

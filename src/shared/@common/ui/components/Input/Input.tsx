import { useState } from "react";
import styles from "./Input.module.css";
import Icon from "../Icon/Icon";

interface InputProps {
  field: string;
  fieldTitle: string;
  valueMaxLength?: number;
}

const Input = ({ field, fieldTitle, valueMaxLength }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  // 비밀번호 보이기 여부 상태
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  const focusCond = isFocus || value ? styles.focused : "";

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
      </div>
    </div>
  );
};

export default Input;

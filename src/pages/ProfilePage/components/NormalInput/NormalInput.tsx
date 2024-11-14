import styles from "./NormalInput.module.css";
import { useRef, useState } from "react";

type NormalInputProps = {
  title: string;
  value: string;
  maxLength?: number;
};

const NormalInput = ({ title, value, maxLength }: NormalInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(value);

  const focusedCond = isFocused || text ? styles.focused : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <div
      className={styles.container}
      onFocus={() => {
        setIsFocused(true);
        // 해당 요소에 focus가 걸리는 경우 input에 focus 이동
        inputRef.current?.focus();
      }}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
    >
      {/* text */}
      <div className={`${styles.upper} ${focusedCond}`}>
        <span className={`${styles.title} ${focusedCond}`}>
          <p>{title}</p>
        </span>
        {maxLength && (
          <span className={`${styles.countWords} ${focusedCond}`}>
            <p>{`${text.length}/${maxLength}`}</p>
          </span>
        )}
      </div>

      {/* input  */}
      <div className={`${styles.lower} ${focusedCond}`}>
        <input
          type="text"
          className={`${styles.input} ${focusedCond}`}
          onChange={(e) => handleChange(e)}
          defaultValue={value}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default NormalInput;

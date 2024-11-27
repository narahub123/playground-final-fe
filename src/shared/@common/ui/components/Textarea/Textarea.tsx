import { useEffect, useRef, useState } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps {
  field: string;
  fieldTitle: string;
  valueMaxLength?: number;
  errorMessage?: string;
}

const Textarea = ({
  field,
  fieldTitle,
  valueMaxLength,
  errorMessage,
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isFocused) {
      textareaRef.current?.focus();
    }
  }, [isFocused]);

  const focusCond = isFocused || value !== "" ? styles.focused : "";
  const validCond = !isValid && value !== "" ? styles.invalid : "";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setValue(value);
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${focusCond} ${validCond}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={isFocused ? -1 : 0}
      >
        <div className={`${styles.upper} ${focusCond}`}>
          <label htmlFor={field} className={`${styles.title} ${focusCond}`}>
            {fieldTitle}
          </label>
          <span
            className={`${styles.count} ${focusCond}`}
          >{`${value.length} / ${valueMaxLength}`}</span>
        </div>
        <div className={`${styles.lower} ${focusCond}`}>
          <textarea
            id={field}
            className={`${styles.textarea} ${focusCond}`}
            onChange={(e) => handleChange(e)}
            ref={textareaRef}
          />
        </div>
      </div>
      <div className={styles.error}>
        <p className={`${styles[`error-message`]} ${validCond}`}>
          {errorMessage || "입력값이 유효하지 않습니다."}
        </p>
      </div>
    </div>
  );
};

export default Textarea;

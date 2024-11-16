import { useState } from "react";
import styles from "./NormalTextarea.module.css";

type NormalTextareaProps = {
  title: string;
  value: string;
  maxLength?: number;
};

const NormalTextarea = ({ title, value, maxLength }: NormalTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(value);

  const focusedCond = isFocused || text ? styles.focused : "";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <div
      className={styles.container}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className={`${styles.upper} ${focusedCond}`}>
        <p className={`${styles.title} ${focusedCond}`}>{title}</p>
        {maxLength && (
          <p
            className={`${styles.countWords} ${focusedCond}`}
          >{`${text.length}/${maxLength}`}</p>
        )}
      </div>
      <div className={styles.lower}>
        <textarea
          className={styles.textarea}
          onChange={(e) => handleChange(e)}
          defaultValue={value}
        />
      </div>
    </div>
  );
};

export default NormalTextarea;

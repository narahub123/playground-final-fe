import { useState } from "react";
import styles from "./Input.module.css";

const Input = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  const focusCond = isFocus || value ? styles.focused : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div
      className={`${styles.container} ${focusCond}`}
      onClick={() => {}}
      tabIndex={0}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      <div className={`${styles.upper} ${focusCond}`}>
        <span className={`${styles.title} ${focusCond}`}>title</span>
        <span className={`${styles.count} ${focusCond}`}>count</span>
      </div>
      <div className={`${styles.lower} ${focusCond}`}>
        <input
          type="text"
          className={`${styles.input} ${focusCond}`}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Input;

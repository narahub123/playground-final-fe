import { useState } from "react";
import styles from "./Select.module.css";
import { listModalExample } from "@shared/@common/data";

const Select = () => {
  const [selection, setSelection] = useState<string | number | undefined>(
    listModalExample[0].value
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.select} onClick={() => setIsOpen(!isOpen)}>
        {listModalExample.find((item) => item.value === selection)?.text || ""}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {listModalExample.map((option) => (
            <li
              key={option.value}
              className={styles.option}
              onClick={() => {
                setSelection(option.value);
                setIsOpen(!isOpen);
              }}
            >
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

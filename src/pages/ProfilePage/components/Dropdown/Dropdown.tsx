import { LuChevronUp } from "react-icons/lu";
import styles from "./Dropdown.module.css";
import { useState } from "react";
import { DropdownListType } from "@/types";

type DropdownProps = {
  title: string;
  selection: string | number;
  list: DropdownListType[];
  unit?: string;
};

const Dropdown = ({ title, selection, list, unit }: DropdownProps) => {
  const [showModal, setShowModal] = useState(false);
  const [choice, setChoice] = useState(selection);

  const selectedCond = (item: any) => {
    if (typeof item.type !== typeof choice) {
      if (typeof item.type === "number") {
        return item.type.toString() === choice ? styles.selected : "";
      } else if (typeof choice === "number") {
        return choice.toString() === item.type ? styles.selected : "";
      }
    }

    return item.type === choice ? styles.selected : "";
  };

  const openCond = showModal ? styles.open : "";

  const handleClick = (item: {
    type: string | number;
    name: string | number;
  }) => {
    setChoice(item.type);
  };

  const getValue = () => {
    const value =
      list.find((item) => {
        if (typeof item.type !== typeof choice) {
          if (typeof item.type === "number") {
            return item.type.toString() === choice;
          } else if (typeof choice === "number") {
            return choice.toString() === item.type;
          }
        }
        return item.type === choice;
      })?.name || "";
    return value;
  };

  return (
    <div className={styles.dropdown} onClick={() => setShowModal(!showModal)}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>{title}</p>
          <p>{`${getValue()}${unit ? unit : ""}`}</p>
        </div>
        <div className={styles.right}>
          <LuChevronUp className={`${styles.icon} ${openCond}`} />
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <ul className={styles.modalContainer}>
            {list.map((item, index) => (
              <li
                className={`${styles.item} ${selectedCond(item)}`}
                key={index}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

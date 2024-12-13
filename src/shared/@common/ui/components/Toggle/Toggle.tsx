import { useState } from "react";
import styles from "./Toggle.module.css";

interface ToggleProps {
  value?: boolean;
  size?: number;
  unit?: string;
}

const Toggle = ({ value = false, size = 16, unit = "px" }: ToggleProps) => {
  const [toggle, setToggle] = useState(value);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={`${styles.wrapper} ${
        toggle ? styles.active : styles.inactive
      }`}
      style={{
        width: `${2 * size + size / 4 + 1}${unit}`,
        height: `${size + size / 4 + 1}${unit}`,
        borderRadius: `${size}${unit}`,
        border: "none",
      }}
      onClick={handleClick}
    >
      <div
        className={`${styles.container} ${
          toggle ? styles.active : styles.inactive
        }`}
        style={{
          display: "flex",
          alignContent: "center",
          width: `${2 * size}${unit}`,
          height: `${size}${unit}`,
          borderRadius: `${size}${unit}`,
          transform: `translateX(${toggle ? size : 0}${unit})`,
          transition: `all 0.3s ease-in-out`,
        }}
      >
        <div
          className={`${styles.circle}`}
          style={{
            height: `${size}${unit}`,
            width: `${size}${unit}`,
            borderRadius: "50%",
            backgroundColor: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default Toggle;

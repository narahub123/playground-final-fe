import { useAppDispatch } from "@app/store";
import styles from "./Toggle.module.css";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface ToggleProps {
  toggle?: boolean;
  reducer?: ActionCreatorWithPayload<any, string>;
  setter?: React.Dispatch<React.SetStateAction<boolean>>;
  size?: number;
  unit?: string;
}

const Toggle = ({
  toggle = false,
  reducer,
  setter,
  size = 16,
  unit = "px",
}: ToggleProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (reducer) {
      dispatch(reducer(!toggle));
    } else if (setter) {
      setter(!toggle);
    }
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

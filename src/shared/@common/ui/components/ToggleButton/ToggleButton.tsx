import { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={styles.toggle}
      style={{
        backgroundColor: `${
          isOn ? "rgba(100, 149, 237, 0.5)" : "rgba(100, 149, 237, 0.5)"
        }`,
      }}
    >
      <div className={styles.track} onClick={() => setIsOn(!isOn)}>
        <span
          className={styles.btn}
          style={{
            left: `${isOn ? "29px" : "-14px"}`,
            backgroundColor: `${isOn ? "rgb(100, 149, 237)" : "white"}`,
            color: `${isOn ? "yellow" : "rgb(100, 149, 237)"}`,
          }}
        >
          <Icon iconName={isOn ? "light" : "dark"} iconTitle="" fontSize={20} />
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;

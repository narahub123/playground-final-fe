import { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className={styles.toggle}>
      <div className={styles.track} onClick={() => setIsOn(!isOn)}>
        <span
          className={styles.btn}
          style={{ left: `${isOn ? "-15px" : "32px"}` }}
        >
          <Icon iconName="close" iconTitle="" />
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;

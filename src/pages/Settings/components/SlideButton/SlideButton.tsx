import { useState } from "react";
import styles from "./SlideButton.module.css";

type SlideButtonProps = {
  setting: boolean;
};

const SlideButton = ({ setting }: SlideButtonProps) => {
  const [toggle, setToggle] = useState(setting);
  const handleClick = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <div className={styles.container}>
      <div className={`${styles.slider}`} onClick={handleClick}>
        <div
          className={`${styles.circle} ${toggle ? styles.right : styles.left}`}
        />
      </div>
    </div>
  );
};

export default SlideButton;

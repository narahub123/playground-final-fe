import { LuSettings } from "react-icons/lu";
import styles from "./SettingButton.module.css";
type SettingButtonProps = {
  pageName: string;
};

const SettingButton = ({ pageName }: SettingButtonProps) => {
  const handleClick = () => {
    // pageName에 따라서 다른 모달창 혹은 같은 모달창이지만 다른 내용 보여주기
    if (pageName === "") {
    }
  };
  return (
    <button className={styles.button} title="설정" onClick={handleClick}>
      <LuSettings className={styles.icon} />
    </button>
  );
};

export default SettingButton;

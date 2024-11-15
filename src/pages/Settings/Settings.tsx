import styles from "./Settings.module.css";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <Outlet />
    </div>
  );
};

export default Settings;

import { Outlet } from "react-router-dom";
import styles from "./MessageDetailView.module.css";

const MessageDetailView = () => {
  return (
    <div className={styles.view}>
      <Outlet />
    </div>
  );
};

export default MessageDetailView;

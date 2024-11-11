import styles from "./AuthLayout.module.css";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;

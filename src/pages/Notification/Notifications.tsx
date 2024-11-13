import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./Notifications.module.css";
import Constant from "@constants/index";
import Tabs from "@pages/Explore/components/Tabs/Tabs";
import { Outlet } from "react-router-dom";

const Notifications = () => {
  return (
    <div className={styles.notifiaction}>
      <Header title={Constant.notifications.title} />
      <Tabs tabList={Constant.notifications.tabList} />
      <Outlet />
    </div>
  );
};

export default Notifications;

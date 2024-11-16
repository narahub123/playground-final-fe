import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./Notifications.module.css";
import Constant from "@constants/index";
import Tabs from "@pages/Explore/components/Tabs/Tabs";
import { Outlet } from "react-router-dom";

const Notifications = () => {
  const { title, tabList } = Constant.notifications;
  return (
    <div className={styles.notifiaction}>
      <Header title={title} />
      <Tabs tabList={tabList} />
      <Outlet />
    </div>
  );
};

export default Notifications;

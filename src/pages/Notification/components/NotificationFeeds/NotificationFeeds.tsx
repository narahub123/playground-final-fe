import { useLocation } from "react-router-dom";
import styles from "./NotificationFeeds.module.css";
import { useState } from "react";
import Empty from "@pages/Bookmarks/components/Empty/Empty";
import Notification from "../Notification/Notification";
import Constant from "@constants/index";

const NotificationFeeds = () => {
  const { pathname } = useLocation();
  const [notifications, setNotifications] = useState([]);

  const currentPath = pathname.split("/")[2];
  console.log("현재 path", currentPath);

  const description =
    currentPath === "verified"
      ? Constant.notifications.empty.description.verified
      : currentPath === "mentions"
      ? Constant.notifications.empty.description.mentions
      : Constant.notifications.empty.description.all;

  //url에 따라서 다른 데이터를 불러와야 함

  return (
    <div className={styles.feeds}>
      {notifications.length === 0 ? (
        <Empty
          title={Constant.notifications.empty.title}
          description={description}
        />
      ) : (
        notifications.map((item) => <Notification item={item} />)
      )}
    </div>
  );
};

export default NotificationFeeds;

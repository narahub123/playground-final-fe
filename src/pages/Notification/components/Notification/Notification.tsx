import Image from "@pages/Explore/components/Image/Image";
import NotificationIcon from "../NotificationIcon/NotificationIcon";
import styles from "./Notification.module.css";

type NotificationProps = {
  item: any; // 알림 타입에 맞는 정보
};

const Notification = ({ item }: NotificationProps) => {
  return (
    <div className={styles.notification}>
      <span className={styles.left}>
        <NotificationIcon option={item.type} />
      </span>
      <span className={styles.right}>
        <Image url={item.image} width="40px" />
        <p>{item.name}님의 새게시물 알림</p>
      </span>
    </div>
  );
};

export default Notification;

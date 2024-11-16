import Image from "@pages/Explore/components/Image/Image";
import NotificationIcon from "../NotificationIcon/NotificationIcon";
import styles from "./Notification.module.css";
import Constant from "@constants/index";

type NotificationProps = {
  item: any; // 알림 타입에 맞는 정보
};

const Notification = ({ item }: NotificationProps) => {
  const { imageWidth, text } = Constant.notifications.notificationCard;
  return (
    <div className={styles.notification}>
      <span className={styles.left}>
        <NotificationIcon option={item.type} />
      </span>
      <span className={styles.right}>
        <Image url={item.image} width={imageWidth} />
        <p>{`${item.name}${text}`}</p>
      </span>
    </div>
  );
};

export default Notification;

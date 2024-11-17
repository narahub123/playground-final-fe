import styles from "./NotificationIcon.module.css";
import ICONS from "@/shared/@common/ui/icons";

type NotificationIconProps = {
  option: string;
};

const NotificationIcon = ({ option }: NotificationIconProps) => {
  const Icon =
    ICONS.notificationIcons[option as keyof typeof ICONS.notificationIcons];
  return <Icon className={styles.icon} />;
};

export default NotificationIcon;

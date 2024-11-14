import Image from "@pages/Explore/components/Image/Image";
import styles from "./MessageCard.module.css";
import Dot from "../Dot/Dot";
import { Link } from "react-router-dom";
import MessageCardIcon from "../MessageCardIcon/MessageCardIcon";

type MessageCardProps = {
  item: any;
};

const MessageCard = ({ item }: MessageCardProps) => {
  // Date객체를 문자열로 바꾸는 메서드: util로 저장할 것
  const convertDateToString = (date: Date) => {
    return date.toLocaleString();
  };
  return (
    <Link to="" className={styles.link}>
      <div className={styles.card}>
        <div className={styles.left}>
          <Image url={item.image} />
        </div>
        <div className={styles.right}>
          <div className={styles.userInfo}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.id}>@{item.id}</span>
            <Dot />
            <span className={styles.lastDate}>
              {convertDateToString(item.lastDate)}
            </span>
          </div>
          <p className={styles.lastMsg}>{item.lastMsg}</p>
        </div>
      </div>
      <MessageCardIcon item={item} />
    </Link>
  );
};

export default MessageCard;

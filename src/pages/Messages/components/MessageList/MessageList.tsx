import MessageCard from "../MessageCard/MessageCard";
import styles from "./MessageList.module.css";

type MessageListProps = {
  items: any[];
};

const MessageList = ({ items }: MessageListProps) => {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <MessageCard item={item} key={index} />
      ))}
    </div>
  );
};

export default MessageList;

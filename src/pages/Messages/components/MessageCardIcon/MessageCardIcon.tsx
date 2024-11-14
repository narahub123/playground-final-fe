import ICONS from "@/icons";
import styles from "./MessageCardIcon.module.css";
import { useState } from "react";
import MessageCardIconModal from "../MessageCardIconModal/MessageCardIconModal";

type MessageCardIconProps = {
  item: any;
};

const MessageCardIcon = ({ item }: MessageCardIconProps) => {
  const [showModal, setShowModal] = useState(false);
  const Icon = ICONS.messageIcons.more;

  const handleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    // 이동 방지
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className={styles.more}>
      {showModal && (
        <MessageCardIconModal setShowModal={setShowModal} item={item} />
      )}
      <Icon className={styles.icon} onClick={(e) => handleClick(e)} />
    </div>
  );
};

export default MessageCardIcon;

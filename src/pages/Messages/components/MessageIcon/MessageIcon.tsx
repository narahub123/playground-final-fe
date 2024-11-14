import ICONS from "@/icons";
import styles from "./MessageIcon.module.css";
import TalkModal from "../TalkModal/TalkModal";
import { useState } from "react";

type MessageIconProps = {
  option: string;
  handleClick: () => void;
  title?: string;
  modal?: string;
};

const MessageIcon = ({
  option,
  handleClick,
  title,
  modal,
}: MessageIconProps) => {
  const [showModal, setShowModal] = useState(false);
  const Icon = ICONS.messageIcons[option as keyof typeof ICONS.messageIcons];

  const openModal = () => {
    setShowModal(!showModal);
  };

  const Modal =
    modal === "conversationOption" ? (
      ""
    ) : modal === "talkModal" ? (
      <TalkModal />
    ) : (
      ""
    );

  return (
    <div className={styles.container} onClick={modal ? openModal : undefined}>
      {showModal && Modal}
      <Icon className={styles.icon} onClick={handleClick} title={title} />
    </div>
  );
};

export default MessageIcon;

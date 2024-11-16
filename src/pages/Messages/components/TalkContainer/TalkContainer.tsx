import styles from "./TalkContainer .module.css";
import { currentUserData } from "@data/example";
import { TalkType } from "@/types";
import MessageIcon from "../MessageIcon/MessageIcon";
import { useState } from "react";
import TalkModal from "../TalkModal/TalkModal";
import Constant from "@constants/index";

type TalkContainerProps = {
  talk: TalkType;
};

const TalkContainer = ({ talk }: TalkContainerProps) => {
  const { moreIcon } = Constant.components.conversation;
  const [isOver, setIsOver] = useState(false);

  const curUser = currentUserData;
  return (
    <div
      className={`${styles.talk} ${
        curUser.userId === talk.userId ? styles.right : styles.left
      }`}
    >
      <div
        className={`${styles.container} ${
          curUser.userId === talk.userId ? styles.me : styles.you
        }`}
      >
        <div
          className={styles.textArea}
          onMouseEnter={() => {
            setIsOver(true);
          }}
          onMouseLeave={() => {
            setIsOver(false);
          }}
        >
          {isOver && curUser.userId === talk.userId && (
            <MessageIcon
              option={moreIcon.option}
              handleClick={() => {}}
              title={moreIcon.title}
            />
          )}
          <p
            className={`${styles.text} ${
              curUser.userId === talk.userId ? styles.me1 : styles.you1
            }`}
          >
            {talk.text}
          </p>
          {isOver && curUser.userId !== talk.userId && (
            <MessageIcon
              option={moreIcon.option}
              handleClick={() => {}}
              title={moreIcon.title}
              modal="talkModal"
            />
          )}
        </div>

        <p className={styles.date}>{talk.talkDate.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default TalkContainer;

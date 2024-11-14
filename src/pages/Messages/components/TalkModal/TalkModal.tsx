import MessageIcon from "../MessageIcon/MessageIcon";
import styles from "./TalkModal.module.css";

const TalkModal = () => {
  const talkOptions = [
    { type: "talkReply", name: "답글" },
    { type: "talkReport", name: "톡 신고" },
    { type: "talkCopy", name: "톡 복사" },
    { type: "talkDelete", name: "톡 삭제" },
  ];

  return (
    <div className={styles.modal}>
      <ul className={styles.container}>
        {talkOptions.map((op) => (
          <li key={op.type} className={styles.item}>
            <MessageIcon option={op.type} handleClick={() => {}} />
            <p>{op.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalkModal;

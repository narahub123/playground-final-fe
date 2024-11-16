import Constant from "@constants/index";
import MessageIcon from "../MessageIcon/MessageIcon";
import styles from "./TalkModal.module.css";

const TalkModal = () => {
  const { talkOptions } = Constant.components.conversation;

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

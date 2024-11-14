import styles from "./MessageCardIconModal.module.css";
import MessageIcon from "../MessageIcon/MessageIcon";
import Constant from "@constants/index";
type MessageCardIconModalProps = {
  item: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MessageCardIconModal = ({
  item,
  setShowModal,
}: MessageCardIconModalProps) => {
  const { conversationId } = item;

  // 클릭시 각 항목당 각자의 기능 실행하기
  const handleClick = (type: string) => {
    // 메인 올리기
    if (type === "pin") {
      // 대화 id 필요할 듯
      console.log(conversationId);
    } else if (type === "block") {
      // 대화 id 필요함
      console.log(conversationId);
    } else if (type === "report") {
      // 신고 모달이 열림
    } else if (type === "delConversation") {
      // 대화 id 필요함
      console.log(conversationId);
    }
    // 창 닫기
    setShowModal(false);
  };
  return (
    <div className={styles.modal}>
      <ul className={styles.container}>
        {Constant.messages.moreList.map((item) => (
          <li
            className={styles.item}
            key={item.text}
            onClick={() => handleClick(item.type)}
          >
            <MessageIcon option={item.type} handleClick={() => {}} />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageCardIconModal;

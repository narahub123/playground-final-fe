import { replyOptionArr } from "@data/text-editor";
import styles from "./ReplyOptionsModal.module.css";
import ReplyOption from "../ReplyOption/ReplyOption";

type ReplyOptionsModalProps = {
  setOption: React.Dispatch<React.SetStateAction<string>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReplyOptionsModal = ({
  setOption,
  setShowModal,
}: ReplyOptionsModalProps) => {
  const handleClick = (option: string) => {
    setOption(option);
    setShowModal(false);
  };

  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <p className={styles.title}>답글을 달 수 있는 사람</p>
        <p className={styles.detail}>
          이 게시물에 답글을 달 수 있는 사람을 선택하세요. 멘션된 사람은
          언제든지 답글을 달 수 있습니다.
        </p>
      </header>
      <ul className={styles.container}>
        {replyOptionArr.map((option) => {
          return (
            <li onClick={() => handleClick(option.type)} key={option.type}>
              <ReplyOption
                option={option.type}
                handleClick={() => handleClick(option.type)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReplyOptionsModal;

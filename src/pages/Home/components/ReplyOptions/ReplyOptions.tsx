import styles from "./ReplyOptions.module.css";
import ReplyOptionsModal from "../ReplyOptionsModal/ReplyOptionsModal";
import { useState } from "react";
import ReplyOption from "../ReplyOption/ReplyOption";

const ReplyOptions = () => {
  // 옵션 모달창 열기 상태
  const [showModal, setShowModal] = useState(false);
  // user settings에서 답글에 관련된 기본 옵션을 가져와야 함
  const [option, setOption] = useState("all");

  // 클릭하여 모달창 여닫기
  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.options}>
      {showModal && (
        <ReplyOptionsModal setOption={setOption} setShowModal={setShowModal} />
      )}
      <div className={styles.option}>
        <ReplyOption option={option} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ReplyOptions;

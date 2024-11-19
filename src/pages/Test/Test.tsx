import styles from "./Test.module.css";
import { Icon, ListModal } from "@shared/@common/ui/components";

import { useRef, useState } from "react";
import { useFocusTrap } from "@shared/@common/model/hooks";
import { listModalExample } from "@shared/@common/data";

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const { setLastClick } = useFocusTrap({
    ref: pageRef,
    location: "test page",
    showModal,
  });

  // 각 모달에 따라 다른 값이 들어가게 됨
  // 매개변수의 타입을 string | number | undefined로 한정함
  const handleClick = (value: string | number | undefined) => {
    setShowModal(!showModal); // 클릭하면 해당 모달창이 닫혀야 함
  };

  return (
    <div className="test" ref={pageRef}>
      <div className={styles[`modal-container`]}>
        <Icon
          iconName="backward"
          iconTitle="뒤로 가기"
          handleClick={(e) => {
            setShowModal(!showModal);
            setLastClick(e.target); // 기존 페이지의 마지막 요소 저장
          }}
        />
        <Icon
          iconName="wrong"
          iconTitle="뒤로 가기"
          handleClick={(e) => {
            setShowModal(!showModal);
            setLastClick(e.target); // 기존 페이지의 마지막 요소 저장
          }}
        />
        {showModal && (
          <ListModal
            list={listModalExample}
            handleClick={handleClick}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default Test;

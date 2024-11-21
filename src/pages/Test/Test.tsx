import styles from "./Test.module.css";
import { Icon, ListModal } from "@shared/@common/ui/components";

import { useRef, useState } from "react";
import { useFocusTrap } from "@shared/@common/model/hooks";
import { listModalExample } from "@shared/@common/data";
import ModalLayout from "@shared/@common/layouts/ModalLayout/ModalLayout";

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const { setLastClick } = useFocusTrap({
    ref: pageRef,
    location: "test page",
    showModal: showModal || isOpen, // 여러 모달 창에 적용하기 위해서 유니언으로 전달해야 함
  });

  // 각 모달에 따라 다른 값이 들어가게 됨
  // 매개변수의 타입을 string | number | undefined로 한정함
  const handleClick = (value: string | number | undefined) => {
    console.log(value);
  };

  // 컴포넌트 생성해서 사용할 때 아래의 사용법을 사용해야 함
  const Content = (props: any) => {
    const { hideModal } = props;
    return (
      // 클래스 이름 추가하기
      <div>
        {/* 클릭이벤트에 hideModal 추가하기 */}
        <button className={styles.button} onClick={() => hideModal()}>
          1
        </button>
      </div>
    );
  };

  return (
    <div className="test" ref={pageRef}>
      {showModal && (
        <ModalLayout setToggle={setShowModal}>
          <Content />
        </ModalLayout>
      )}
      <div className={styles[`modal-container`]}>
        <div className={styles.right}>
          <Icon
            iconName="wrong"
            iconTitle="뒤로 가기"
            handleClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
              setLastClick(e.target as HTMLElement); // 기존 페이지의 마지막 요소 저장
            }}
          />
          {isOpen && (
            <ListModal
              list={listModalExample}
              handleClick={handleClick}
              showModal={isOpen}
              setShowModal={setIsOpen}
            />
          )}
        </div>
        <div className={styles.left}>
          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(!showModal);
              setLastClick(e.target as HTMLElement);
            }}
          >
            모달창 열기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;

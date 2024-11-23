import { Icon, Overlay } from "@shared/@common/ui/components";
import styles from "./ModalLayout.module.css";
import {
  useClickOutside,
  useFocusTrap,
  useShowAndHideEffect,
} from "@shared/@common/model/hooks";
import React, { useRef } from "react";
import Portal from "../Portal/Portal";

const ModalLayout = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { children, setToggle, overlayColor } = props;

  // 창 여닫기 효과
  const { showCond, hideModal, handleTransitionEnd } =
    useShowAndHideEffect(setToggle);

  // 포커스 트랩
  useFocusTrap({
    ref: containerRef,
    location: "ModalLayout",
    setShowModal: setToggle,
    hideModal,
  });

  // 외부 클릭시 창 닫기
  useClickOutside(containerRef, setToggle, hideModal);

  // content 생성하기
  const Content = React.cloneElement(children, {
    hideModal, // 내부 버튼을 누르면 창이 닫히는 효과를 위해 사용
  });

  return (
    <Portal>
      <div
        className={`${styles.backdrop} ${showCond}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <Overlay bgColor={overlayColor} />
        <div className={styles.wrapper} ref={containerRef}>
          <div className={styles.close}>
            <Icon
              iconName="close"
              iconTitle="닫기"
              handleClick={(e) => {
                e.stopPropagation();
                hideModal();
              }}
            />
          </div>
          <div className={styles.content}>{Content}</div>
        </div>
      </div>
    </Portal>
  );
};

export default ModalLayout;

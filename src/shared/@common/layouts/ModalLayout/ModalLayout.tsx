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
  const { children, setToggle, overlayColor, showModal } = props;

  // 창 여닫기 효과
  const { showCond, hideModal, handleTransitionEnd } =
    useShowAndHideEffect(setToggle);

  // 포커스 트랩
  const { setLastClick } = useFocusTrap({
    ref: containerRef,
    location: "ModalLayout",
    showModal, // 이중 모달을 사용하는 경우 필요함
    setShowModal: setToggle,
    hideModal,
  });

  // 외부 클릭시 창 닫기
  useClickOutside(containerRef, setToggle, hideModal);

  // content 생성하기
  const Content = React.cloneElement(children, {
    hideModal, // 내부 버튼을 누르면 창이 닫히는 효과를 위해 사용
    setLastClick, // 이 부분을 활용 안하면 마지막 클릭은 저장 안되지만 이전 모달창으로 이동은 함
  });

  return (
    <Portal>
      <div
        role="dialog"
        aria-modal="true"
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

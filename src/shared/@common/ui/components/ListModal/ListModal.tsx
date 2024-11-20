import styles from "./ListModal.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { listModalCardType } from "@shared/@common/types";
import {
  useClickOutside,
  useDynamicPosition,
  useFocusTrap,
  useShowAndHideEffect,
} from "@shared/@common/model/hooks";

type ListModalProps = {
  list: listModalCardType[]; // 모달창안의 목록에 대한 정보
  handleClick: (value: string | number | undefined) => void; // 호출할 클릭 이벤트
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListModal = ({ list, handleClick, setShowModal }: ListModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { showCond, hideModal, handleTransitionEnd } =
    useShowAndHideEffect(setShowModal);

  // 모달 위치 지정
  const position = useDynamicPosition(modalRef);

  // 포커스 트랩
  useFocusTrap({
    ref: modalRef,
    location: "ListModal component",
    setShowModal,
    hideModal,
  });

  // 외부 클릭시 모달창 닫힘
  useClickOutside(modalRef, setShowModal, hideModal);

  // 아이템 클릭시 호출되는 함수
  const handleClickItem = (value: string | number | undefined) => {
    handleClick(value);
    hideModal();
  };

  return (
    <div
      className={`${styles.modal} ${position} ${showCond}`}
      role="dialog"
      ref={modalRef}
      onTransitionEnd={handleTransitionEnd}
    >
      <ul className={styles.container}>
        {list.map((item) => {
          const { text, cardTitle, iconName, url, value } = item;
          const ItemCompo = url ? Link : "li";
          // 필수 속성 검증: 텍스트가 없는 경우 아무것도 리턴하지 않음
          if (!text) return null;
          return (
            <ItemCompo
              key={value || text}
              to={url ? url : ""}
              className={styles.item}
              onClick={() => handleClickItem(value)}
              title={cardTitle}
              aria-label={cardTitle}
              tabIndex={0}
            >
              {iconName && <Icon iconName={iconName} iconTitle="" />}
              <p className={styles.text}>{text}</p>
            </ItemCompo>
          );
        })}
      </ul>
    </div>
  );
};

export default ListModal;

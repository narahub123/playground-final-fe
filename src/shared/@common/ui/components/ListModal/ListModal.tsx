import styles from "./ListModal.module.css";
import { useEffect, useRef, useState } from "react";
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
    onEscapeFocusTrap: () => {
      handleClick(undefined);
      hideModal();
    },
  });

  // 외부 클릭시 모달창 닫힘
  useClickOutside(modalRef, setShowModal);

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

          // 필수 속성 검증: 텍스트가 없는 경우 아무것도 리턴하지 않음
          if (!text) return null;

          return url ? (
            // url이 있는 경우: 다른 url로 이동함
            <Link
              key={value || text}
              to={url}
              className={styles.item}
              onClick={() => {
                handleClick(value);
                hideModal();
              }} // Link인 경우 이동을 주로하기 때문에 추가적인 onClick 이벤트 사용 안할 가능성이 있음 한다면 value 값을 전달하지 않을까 싶음
              title={cardTitle}
              aria-label={cardTitle}
              tabIndex={0}
            >
              {iconName && <Icon iconName={iconName} iconTitle="" />}
              <p className={styles.text}>{text}</p>
            </Link>
          ) : (
            // url이 없는 경우: 해당 이벤트 처리
            <li
              key={value || text}
              className={styles.item}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleClick(value);
                hideModal();
              }}
              title={cardTitle}
              aria-label={cardTitle}
              tabIndex={0}
            >
              {iconName && <Icon iconName={iconName} iconTitle="" />}
              <p className={styles.text}>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListModal;

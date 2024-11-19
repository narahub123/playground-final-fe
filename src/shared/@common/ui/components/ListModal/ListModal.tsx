import { listModalCardType } from "@shared/@common/types";
import styles from "./ListModal.module.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useClickOutside, useFocusTrap } from "@shared/@common/model/hooks";
import { PiCylinderThin } from "react-icons/pi";

type ListModalProps = {
  list: listModalCardType[]; // 모달창안의 목록에 대한 정보
  handleClick: (value: string | number | undefined) => void; // 호출할 클릭 이벤트
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListModal = ({
  list,
  handleClick,

  setShowModal,
}: ListModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  useFocusTrap({
    ref: modalRef,
    location: "ListModal component",
    onEscapeFocusTrap: () => {
      handleClick(undefined);
    },
  });

  useClickOutside(modalRef, setShowModal);

  // 컨테이너의 창 내에의 위치에 따라 모달창 위치 변경하기
  useEffect(() => {
    if (!modalRef.current) return;

    const modal = modalRef.current;
    const parentElem = modal.parentElement as HTMLElement;

    // 창 너비, 창 높이
    const { clientWidth, clientHeight } = document.documentElement;

    const parentRect = parentElem.getBoundingClientRect();
    const modalRect = modal.getBoundingClientRect();

    const shouldFlipHorizontally =
      clientWidth - parentRect.right < modalRect.width;
    const shouldFlipvertically =
      clientHeight - parentRect.bottom < modalRect.height;

    if (shouldFlipHorizontally) {
      modal.style.right = `0px`;
      modal.style.left = "auto";
    } else {
      modal.style.left = "0px";
      modal.style.right = "auto";
    }

    if (shouldFlipvertically) {
      modal.style.bottom = `0px`;
      modal.style.top = "auto";
    } else {
      modal.style.top = `0px`;
      modal.style.bottom = "auto";
    }
  }, [modalRef]);

  return (
    <div className={styles.modal} role="dialog" ref={modalRef}>
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
              onClick={() => handleClick(value)} // Link인 경우 이동을 주로하기 때문에 추가적인 onClick 이벤트 사용 안할 가능성이 있음 한다면 value 값을 전달하지 않을까 싶음
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
              onClick={() => handleClick(value)}
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

import { useRef, useState } from "react";
import styles from "./Select.module.css";
import { listModalExample } from "@shared/@common/data";
import {
  useFocusTrap,
  useShowAndHideEffect,
} from "@shared/@common/model/hooks";

type ListProps = {
  isOpen: boolean;
  setSelection: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = ({ setSelection, setIsOpen, isOpen }: ListProps) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const { showCond, handleTransitionEnd, hideModal } = useShowAndHideEffect(
    setIsOpen,
    "dropdown"
  );
  useFocusTrap({
    ref: containerRef,
    location: "List component",
    showModal: isOpen,
    setShowModal: setIsOpen,
    hideModal,
  });

  return (
    <ul
      className={`${styles.list} ${showCond}`}
      ref={containerRef}
      onTransitionEnd={handleTransitionEnd}
    >
      {listModalExample.map((option) => (
        <li
          key={option.text}
          className={styles.option}
          onClick={() => {
            setSelection(option.value);
            setIsOpen(!isOpen);
          }}
          tabIndex={0}
        >
          {option.text}
        </li>
      ))}
    </ul>
  );
};

type SelectProps = {
  pageRef: React.RefObject<HTMLDivElement>; // 드롭다운이 포함된 페이지
  isOpen: boolean; // 드롭다운을 열 수 있는 상태
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLastClick: React.Dispatch<React.SetStateAction<HTMLElement | null>>; // 버튼을 저장하기 위한 set 함수
};

const Select = ({ pageRef, isOpen, setIsOpen, setLastClick }: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [selection, setSelection] = useState<string | number | undefined>(
    listModalExample[0].value
  );

  useFocusTrap({
    ref: pageRef,
    location: "Select component",
    showModal: isOpen,
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.select}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
          setLastClick(buttonRef.current);
        }}
        ref={buttonRef}
      >
        {listModalExample.find((item) => item.value === selection)?.text || ""}
      </button>
      {isOpen && (
        <List
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelection={setSelection}
        />
      )}
    </div>
  );
};

export default Select;

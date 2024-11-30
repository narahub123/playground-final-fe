import { useRef, useState } from "react";
import styles from "./Select.module.css";
import {
  useClickOutside,
  useFocusTrap,
  useShowAndHideEffect,
} from "@shared/@common/model/hooks";
import Icon from "../Icon/Icon";
import { SelectOptionType } from "@shared/@common/types";
import { LuChevronDown } from "react-icons/lu";

type OptionProps = {
  option: SelectOptionType;
  selection: string | number | undefined;
  setSelection: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  hideModal: () => void;
  showCond: string;
};

const Option = ({
  option,
  selection,
  setSelection,
  hideModal,
  showCond,
}: OptionProps) => {
  const selectedCond = option.value === selection ? styles.selected : "";

  console.log(option);

  return (
    <li
      role="option" // 역할 정의
      className={`${styles.option} ${selectedCond} ${showCond}`}
      onClick={
        selectedCond
          ? undefined
          : () => {
              setSelection(option.value);
              hideModal();
            }
      }
      tabIndex={option.value === selection ? -1 : 0}
      aria-selected={option.value === selection} // 현재 선택된 항목인지 표시
      title={option.optionTitle}
    >
      {/* 아이콘이 있는 경우 */}
      {option.iconName && (
        <Icon iconName={option.iconName} iconTitle="" ariaHidden="true" />
      )}
      {/* 이미지가 있는 경우 */}
      {option.imgSrc && (
        <img
          src={option.imgSrc}
          alt={option.imgAlt}
          aria-hidden="true"
          className={styles.img}
        />
      )}
      <span className={styles.text}>{option.text}</span>
    </li>
  );
};

type ListProps = {
  isOpen: boolean;
  selection: string | number | undefined;
  setSelection: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list: any[];
};

const List = ({
  selection,
  setSelection,
  setIsOpen,
  isOpen,
  list,
}: ListProps) => {
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

  useClickOutside(containerRef, setIsOpen, hideModal);

  return (
    <ul
      className={`${styles.list} ${showCond}`}
      ref={containerRef}
      onTransitionEnd={handleTransitionEnd}
      role="listbox" // 리스트 역할 명시
      id="dropdown-list" // 버튼과 연결
    >
      {list.map((option) => (
        <Option
          key={option.text}
          option={option}
          selection={selection}
          setSelection={setSelection}
          hideModal={hideModal}
          showCond={showCond}
        />
      ))}
    </ul>
  );
};

type SelectProps = {
  pageRef: React.RefObject<HTMLDivElement>; // 드롭다운이 포함된 페이지
  isOpen: boolean; // 드롭다운을 열 수 있는 상태
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLastClick: React.Dispatch<React.SetStateAction<HTMLElement | null>>; // 버튼을 저장하기 위한 set 함수
  list: any[];
  disabled?: boolean;
  width?: number | string;
  widthUnit?: string;
};

const Select = ({
  pageRef,
  isOpen,
  setIsOpen,
  setLastClick,
  list,
  disabled = false,
  width = "100%",
  widthUnit = "px",
}: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [selection, setSelection] = useState<string | number | undefined>(
    list[0].value
  );

  const { hideModal } = useShowAndHideEffect(setIsOpen);

  useFocusTrap({
    ref: pageRef,
    location: "Select component",
    showModal: isOpen,
  });

  const selected = list.find((item) => item.value === selection);
  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ width: `${width}${typeof width === "string" ? "" : widthUnit}` }}
    >
      <button
        className={styles.select}
        onClick={(e) => {
          e.stopPropagation();
          setLastClick(buttonRef.current);
          hideModal();
          setIsOpen(!isOpen);
        }}
        ref={buttonRef}
        aria-haspopup="listbox" // 버튼이 리스트 박스를 열 수 있음 명시
        aria-expanded={isOpen} // 현재 드롭다운이 열렸는지 여부 표시
        aria-controls="dropdown-list" // 드롭다운 리스트의 ID를 참조
        disabled={disabled}
        aria-hidden={disabled}
      >
        {/* 아이콘이 있는 경우 */}
        {selected.iconName && (
          <Icon iconName={selected.iconName} iconTitle="" ariaHidden="true" />
        )}
        {/* 이미지가 있는 경우 */}
        {selected.imgSrc && (
          <img
            src={selected.imgSrc}
            alt={selected.imgAlt}
            aria-hidden="true"
            className={styles.img}
          />
        )}
        <span className={styles.text}>{selected?.text || ""}</span>
        <Icon
          iconName="down"
          iconTitle=""
          className={`${styles.icon} ${isOpen ? styles.open : ""}`}
          ariaHidden="true"
        />
      </button>
      {isOpen && (
        <List
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelection={setSelection}
          selection={selection}
          list={list}
        />
      )}
    </div>
  );
};

export default Select;

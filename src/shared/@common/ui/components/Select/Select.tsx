import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";
import {
  useClickOutside,
  useFocusTrap,
  useShowAndHideEffect,
} from "@shared/@common/model/hooks";
import Icon from "../Icon/Icon";
import { SelectOptionType } from "@shared/@common/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "@app/store";

type OptionProps = {
  option: SelectOptionType;
  selection: string | number | undefined;
  setSelection: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  hideModal: () => void;
  showCond: string;
  reducer?: ActionCreatorWithPayload<any, string>;
};

const Option = forwardRef<HTMLLIElement, OptionProps>(
  ({ option, selection, setSelection, hideModal, showCond, reducer }, ref) => {
    const dispatch = useAppDispatch();

    const selectedCond = option.value === selection ? styles.selected : "";

    return (
      <li
        role="option" // 역할 정의
        className={`${styles.option} ${selectedCond} ${showCond}`}
        onClick={
          selectedCond
            ? undefined
            : () => {
                setSelection(option.value);
                reducer && dispatch(reducer(option.value));
                hideModal();
              }
        }
        tabIndex={0} // 선택된 값에 커서 이동하지 않을 경우 option.value === selection ? -1 : 0
        aria-selected={option.value === selection} // 현재 선택된 항목인지 표시
        title={option.optionTitle}
        ref={ref}
      >
        {/* 아이콘이 있는 경우 */}
        {option.iconName && (
          <Icon iconName={option.iconName} iconTitle="" ariaHidden={true} />
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
  }
);

type ListProps = {
  isOpen: boolean;
  selection: string | number | undefined;
  setSelection: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list: any[];
  reducer?: ActionCreatorWithPayload<any, string>;
};

const List = ({
  selection,
  setSelection,
  setIsOpen,
  isOpen,
  list,
  reducer,
}: ListProps) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const optionRefs = useRef<HTMLLIElement[]>([]); // 동적 ref 생성하기
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

  useEffect(() => {
    const options = optionRefs.current;

    const selected = options.find((item) =>
      item.className.includes("selected")
    );

    // 선택된 요소에 focus 주기
    selected?.focus();

    // 선택 요소가 가운데에 위치하도록 스크롤을 이동하는 함수
    const moveToSelected = () => {
      selected?.scrollIntoView({
        behavior: "smooth", // 부드럽게 이동
        block: "center", // 리스트의 가운데 위치
      });
    };

    // 리스트에 transition이 걸려 있어서 tranistion 종료 후에 스크롤 이동이 이루어지도록 함
    selected?.addEventListener("transitionend", moveToSelected);

    return () => selected?.removeEventListener("transitionend", moveToSelected);
  }, [selection]);

  return (
    <ul
      className={`${styles.list} ${showCond}`}
      ref={containerRef}
      onTransitionEnd={handleTransitionEnd}
      role="listbox" // 리스트 역할 명시
      id="dropdown-list" // 버튼과 연결
    >
      {list.map((option, idx) => (
        <Option
          key={option.text}
          option={option}
          selection={selection}
          setSelection={setSelection}
          hideModal={hideModal}
          showCond={showCond}
          reducer={reducer}
          ref={(el: HTMLLIElement) => (optionRefs.current[idx] = el)} // 동적 ref 적용하기
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
  initialValue?: number | string; // 초기 값
  initialIndex?: number; // 초기 값이 주어지지 않을 때 list 목록에서 초기값으로 주어질 값 지정
  reducer?: ActionCreatorWithPayload<any, string>;
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
  initialValue,
  initialIndex = 0, // index가 주어지지 않으면 첫 번째 아이템을 초기값으로 지정
  reducer,
  disabled = false,
  width = "100%",
  widthUnit = "px",
}: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [selection, setSelection] = useState<string | number | undefined>(
    initialValue || list[initialIndex].value // initialValue가 주어지면 initialValue로 아니면 목록의 값 중 하나를 초기 값으로 지정
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
          <Icon iconName={selected.iconName} iconTitle="" ariaHidden={true} />
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
          ariaHidden={true}
        />
      </button>
      {isOpen && (
        <List
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelection={setSelection}
          selection={selection}
          list={list}
          reducer={reducer}
        />
      )}
    </div>
  );
};

export default Select;

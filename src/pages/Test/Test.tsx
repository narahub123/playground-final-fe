import styles from "./Test.module.css";
import { Icon, ListModal } from "@shared/@common/ui/components";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFocusTrap } from "@shared/@common/model/hooks";
import { listModalExample } from "@shared/@common/data";

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const { setLastClick } = useFocusTrap({
    ref: pageRef,
    location: "test page",
    showMoal: showModal,
  });

  // 마지막 클릭한 요소가 저장되어 있거나 모달이 닫혀 있는 경우
  // 저장된 요소에 포커스가 걸리게 함
  // useLayoutEffect(() => {
  //   if (!lastClick || showModal) return;

  //   lastClick.focus();
  //   setLastClick(null);
  // }, [showModal, lastClick, setLastClick]); // 의존성 배열 추가

  // 각 모달에 따라 다른 값이 들어가게 됨
  // 매개변수의 타입을 string | number | undefined로 한정함
  const handleClick = (value: string | number | undefined) => {
    console.log("클릭 이벤트가 실행됨");
    console.log(value); // 클릭시 해당 값이 잘 나오는지 확인함
    setShowModal(!showModal); // 클릭하면 해당 모달창이 닫혀야 함
  };

  console.log("모달창 닫힘 여부", showModal);

  return (
    <div className="test" ref={pageRef}>
      <div className={styles[`modal-container`]}>
        <Icon
          iconName="backward"
          iconTitle="뒤로 가기"
          handleClick={(e) => {
            console.log("아이콘을 클릭한 함수가 실행됨");
            setShowModal(!showModal);
            setLastClick(e.target); // 기존 페이지의 마지막 요소 저장
          }}
        />
        <Icon
          iconName="wrong"
          iconTitle="뒤로 가기"
          handleClick={(e) => {
            console.log("아이콘을 클릭한 함수가 실행됨");
            setShowModal(!showModal);
            setLastClick(e.target); // 기존 페이지의 마지막 요소 저장
          }}
        />
        {showModal && (
          <ListModal list={listModalExample} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default Test;

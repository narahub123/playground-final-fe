import { listModalCardType } from "@shared/@common/types";
import styles from "./Test.module.css";
import { Icon, ListModal } from "@shared/@common/ui/components";

import { useRef, useState } from "react";
import { useFocusTrap } from "@shared/@common/model/hooks";

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  useFocusTrap({ ref: pageRef });
  // 예시
  const list: listModalCardType[] = [
    { value: 1, text: "실패", cardTitle: "실패", iconName: "backward" },
    { value: 2, text: "그냥", cardTitle: "그냥", iconName: "backward" },
    {
      url: "/settings",
      text: "ㅋㅋㅋㅋㅋㅋ",
      cardTitle: "ㅋㅋㅋㅋㅋㅋ",
      iconName: "backward",
    },
    { value: 4, text: "안녕", cardTitle: "안녕", iconName: "backward" },
  ];

  // 각 모달에 따라 다른 값이 들어가게 됨
  // 매개변수의 타입을 string | number | undefined로 한정함
  const handleClick = (value: string | number | undefined) => {
    console.log(value); // 클릭시 해당 값이 잘 나오는지 확인함
    setShowModal(!showModal); // 클릭하면 해당 모달창이 닫혀야 함
  };

  return (
    <div className="test" ref={pageRef}>
      <div className={styles[`modal-container`]}>
        <Icon
          iconName="backward"
          iconTitle="뒤로 가기"
          handleClick={() => {
            setShowModal(!showModal);
          }}
        />
        {showModal && <ListModal list={list} handleClick={handleClick} />}
      </div>
    </div>
  );
};

export default Test;

import { useRef, useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./ToggleButton.module.css";
import { useAppDispatch } from "@app/store";

type ToggleButtonProps = {
  isOnCond: boolean; // 최소의 값
  reducer: { payload: any; type: string }; // 값 변경
  iconName: string; // 버튼에 들어갈 아이콘 결정
  iconTitle: string; // 버튼에 대한 설명
  setLastClick: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  backgroundColor?: string; // 토글의 배경색 결정
  buttonColor?: string; // 버튼 배경색 결정
  iconColor?: string; // 아이콘의 색상 결정
  fontSize?: number; // 토글의 크기 결정
};

const ToggleButton = ({
  reducer,
  isOnCond,
  iconName,
  iconTitle,
  backgroundColor = "rgba(100, 149, 237, 0.5)",
  buttonColor = "white",
  iconColor = "rgba(100, 149, 237, 1)",
  fontSize = 14,
  setLastClick,
}: ToggleButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const [isOn, setIsOn] = useState(isOnCond);

  const buttonWidth = fontSize + 16;
  const trackWidth = fontSize * 2 + 8;
  const toggleWidth = buttonWidth + trackWidth + 7;
  const toggleHeight = buttonWidth + 7;
  const buttonPositionCond = isOn
    ? `${trackWidth - buttonWidth / 2}px`
    : `${-(buttonWidth / 2) + 1}px`;

  return (
    <div
      className={styles.toggle}
      style={{
        backgroundColor: `${backgroundColor}`,
        width: `${toggleWidth}px`,
        height: `${toggleHeight}px`,
        borderRadius: `${buttonWidth}px`,
      }}
      onClick={() => {
        setIsOn(!isOn);
        dispatch(reducer);
        setLastClick(buttonRef.current);
      }}
    >
      <div className={styles.track} style={{ width: `${trackWidth}px` }}>
        <button
          role="button"
          className={styles.btn}
          style={{
            left: `${buttonPositionCond}`,
            backgroundColor: `${buttonColor}`,
            color: `${iconColor}`,
          }}
          ref={buttonRef}
        >
          <Icon iconName={iconName} iconTitle={iconTitle} fontSize={fontSize} />
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;

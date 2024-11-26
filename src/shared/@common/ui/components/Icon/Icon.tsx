import styles from "./Icon.module.css";
import ICONS from "#icons/index";
import CONSTANTS from "@shared/@common/constants";
import { useState } from "react";
import { useGetBGThemeColor } from "@shared/@common/model/hooks";

type IconProps = {
  iconName: string;
  iconTitle: string;
  fontSize?: number;
  color?: string;
  bgSize?: number;
  bgColor?: string;
  unit?: string;
  handleClick?: (value: any) => void;
  ariaHidden?: "true" | "false";
};

const Icon = ({
  iconName, // 아이콘 이름
  iconTitle, // 아이콘 설명
  fontSize = 16, // 아이콘의 사이즈
  color = "inherit", // 아이콘의 색
  bgSize = 15, // hover시 배경의 사이즈: 아이콘 사이즈 + bgSize
  bgColor, // hover 시 배경색
  unit = "px", // 사이즈 단위
  handleClick, // 클릭 이벤트 적용하는 경우
  ariaHidden = "false", // 아이콘이 의미 전달을 하는지 여부 aria-hidden: true이면 장식일 뿐 의미전달 하지 않음
}: IconProps) => {
  const iconHover = useGetBGThemeColor("hoverIcon");

  const { wrongIcon } = CONSTANTS.components.icon;
  const [isOver, setIsOver] = useState(false);

  // hover 효과 발생 조건: 클릭 이벤트가 호출되면 hover 발생, 아니면 hover 발생 안함
  const hoverCond = handleClick ? true : false;

  // 아이콘이 존재하는지 확인하고, 없으면 기본 아이콘 사용
  const Icon =
    ICONS[iconName as keyof typeof ICONS] ||
    ICONS[wrongIcon.iconName as keyof typeof ICONS];

  // 잘못된 아이콘일 경우 title에 기본 제목 설정
  const title = ICONS[iconName as keyof typeof ICONS]
    ? iconTitle
    : wrongIcon.iconTitle;

  const containerSize = fontSize + bgSize;

  // 마우스가 container 위에 들어왔을 때
  const handleMouseEnter = () => {
    setIsOver(true);
  };

  // 마우스가 container를 떠났을 때
  const handleMouseLeave = () => {
    setIsOver(false);
  };

  return (
    <div
      className={`${styles.container} ${handleClick ? styles.button : ""}`}
      style={{
        width: `${containerSize}${unit}`,
        height: `${containerSize}${unit}`,
        borderRadius: `50%`,
        backgroundColor: `${
          isOver ? (bgColor ? bgColor : iconHover) : `transparent`
        }`,
      }}
      tabIndex={handleClick ? 0 : -1} // 클릭 이벤트가 있는 경우 tab 이동 가능 없는 경우 tab 이동 불가
      title={title}
      onClick={handleClick}
      onMouseEnter={hoverCond ? handleMouseEnter : undefined}
      onMouseLeave={hoverCond ? handleMouseLeave : undefined}
      aria-hidden={ariaHidden}
    >
      <Icon
        className={`${styles.icon}`}
        style={{ fontSize: `${fontSize}${unit}`, color: `${color}` }}
        aria-label={title} // 아이콘을 설명하는 label 추가
      />
    </div>
  );
};

export default Icon;

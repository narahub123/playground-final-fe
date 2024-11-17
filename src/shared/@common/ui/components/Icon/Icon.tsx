import styles from "./Icon.module.css";
import ICONS from "#icons/index";
import CONSTANTS from "@shared/@common/constants";

type IconProps = {
  iconName: string;
  iconTitle: string;
};

const Icon = ({ iconName, iconTitle }: IconProps) => {
  const { wrongIcon } = CONSTANTS.components.icon;

  // 아이콘이 존재하는지 확인하고, 없으면 기본 아이콘 사용
  const Icon =
    ICONS[iconName as keyof typeof ICONS] ||
    ICONS[wrongIcon.iconName as keyof typeof ICONS];

  // 잘못된 아이콘일 경우 title에 기본 제목 설정
  const title = ICONS[iconName as keyof typeof ICONS]
    ? iconTitle
    : wrongIcon.iconTitle;

  return (
    <Icon
      className={`${styles.icon}`}
      title={title}
      aria-label={title} // 아이콘을 설명하는 label 추가
      role="img" // 이미지의 목적을 명확히 함
    />
  );
};

export default Icon;

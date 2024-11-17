import ICONS from "#icons/index";
import styles from "./Icon.module.css";

type IconProps = {
  iconName: string;
};

const Icon = ({ iconName }: IconProps) => {
  const Icon = ICONS[iconName as keyof typeof ICONS];

  if (!Icon) return <p>유효하지 않은 아이콘 이름</p>;

  return <Icon className={`${styles.icon}`} />;
};

export default Icon;

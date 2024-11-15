import styles from "./Icon.module.css";
import ICONS from "@/icons";

type IconProps = {
  option: string;
  color?: string;
  fontSize?: string;
  handleClick?: () => void;
};

const Icon = ({
  option,
  color = "black",
  fontSize = "16px",
  handleClick,
}: IconProps) => {
  const Icon = ICONS.settingsIcons[option as keyof typeof ICONS.settingsIcons];

  return (
    <div
      className={styles.container}
      onClick={handleClick ? handleClick : undefined}
    >
      <Icon style={{ color, fontSize }} className={styles.icon} />
    </div>
  );
};

export default Icon;

import styles from "./Icon.module.css";
import ICONS from "@/shared/@common/ui/icons";

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
  const Icon = ICONS.searchIcons[option as keyof typeof ICONS.searchIcons];

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

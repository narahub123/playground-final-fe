import { useRef } from "react";
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
  const fileRef = useRef<HTMLInputElement>(null);
  const Icon = ICONS.profileIcons[option as keyof typeof ICONS.profileIcons];

  const handleImage = () => {
    fileRef.current?.click();
  };
  return (
    <div
      className={styles.container}
      onClick={option === "addImage" ? handleImage : handleClick}
    >
      <input type="file" hidden ref={fileRef} />
      <Icon style={{ color, fontSize }} className={styles.icon} />
    </div>
  );
};

export default Icon;

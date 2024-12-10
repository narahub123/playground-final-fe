import styles from "./HyperLinkCard.module.css";
import { HyperLinkCardType } from "@shared/@common/types";
import Icon from "../Icon/Icon";

interface HyperLinkCardProps {
  item: HyperLinkCardType;
  className?: string;
}

const HyperLinkCard = ({ item, className }: HyperLinkCardProps) => {
  const { text, path } = item;

  return (
    <a className={`${styles.card} ${className}`} target="_blank" href={path}>
      <span>{text}</span>
      <Icon iconName="outlink" iconTitle="" ariaHidden fontSize={18} />
    </a>
  );
};

export default HyperLinkCard;

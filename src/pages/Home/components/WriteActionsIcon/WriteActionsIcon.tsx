import styles from "./WriteActionsIcon.module.css";
import ICONS from "@/shared/@common/ui/icons";

type WriteActionsIconType = {
  option: string;
  title: string;
};

// 각 아이콘마다의 고유의 기능을 넣을 방법에 대해서 생각해 볼 것
const WriteActionsIcon = ({ option, title }: WriteActionsIconType) => {
  const Icon = ICONS.writeOptions[option as keyof typeof ICONS.writeOptions];
  return <Icon title={title} className={styles.icon} />;
};

export default WriteActionsIcon;

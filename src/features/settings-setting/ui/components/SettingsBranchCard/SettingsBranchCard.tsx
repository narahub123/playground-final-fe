import { Description, Icon } from "@shared/@common/ui/components";
import styles from "./SettingsBranchCard.module.css";
import { SettingsBranchType } from "@features/settings-setting/types/data";
import { Link } from "react-router-dom";

interface settingsbranchcardProps {
  item?: SettingsBranchType;
}

const SettingsBranchCard = ({ item }: settingsbranchcardProps) => {
  if (!item) return;
  return (
    <Link className={styles.card} to={item.path}>
      {item?.icon && (
        <Icon
          iconName={item.icon}
          iconTitle=""
          ariaHidden
          className={styles.icon}
          fontSize={18}
        />
      )}
      <span className={styles.content}>
        <div>{item.title}</div>
        {item.expl && <Description text={item.expl} />}
      </span>
      <Icon iconName="right" iconTitle="" ariaHidden fontSize={20} />
    </Link>
  );
};

export default SettingsBranchCard;

import { Description, Icon } from "@shared/@common/ui/components";
import styles from "./SettingsBranchCard.module.css";
import { SettingsBranchType } from "@features/settings-setting/types/data";
import { Link } from "react-router-dom";

interface settingsbranchcardProps {
  item?: SettingsBranchType;
}

const SettingsBranchCard = ({ item }: settingsbranchcardProps) => {
  if (!item) return;

  const openModal = item.path.includes("/i/");
  const liCond = item.path === "";

  const Card = openModal || liCond ? "li" : Link;

  return (
    <Card
      className={`${styles.card} ${liCond && styles.nohover}`}
      to={item.path}
      tabIndex={liCond ? -1 : 0}
      aria-label={item.title} // 링크인 경우 내용 추가
      role={openModal ? "button" : undefined} // 모달창을 열 때만 role 명시
    >
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
      {item.path !== "" && (
        <Icon iconName="right" iconTitle="" ariaHidden fontSize={20} />
      )}
    </Card>
  );
};

export default SettingsBranchCard;

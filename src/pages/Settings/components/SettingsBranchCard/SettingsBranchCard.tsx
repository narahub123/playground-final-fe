import { BranchListType } from "@/types";
import styles from "./SettingsBranchCard.module.css";
import Icon from "../Icon/Icon";
import Constant from "@constants/index";
import { Link } from "react-router-dom";

type SettingsBranchCardProps = {
  item: BranchListType;
};

const SettingsBranchCard = ({ item }: SettingsBranchCardProps) => {
  const { forwardBtn, iconFontSize, basicUrl } =
    Constant.settings.SettingsBranchCard;
  return (
    <Link to={`/${basicUrl}/${item.url}`} className={styles.card}>
      <span className={styles.icon}>
        <Icon option={item.option} fontSize={iconFontSize} />
      </span>
      <span className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.detail}>{item.detail}</p>
      </span>
      <span className={styles.forward}>
        <Icon option={forwardBtn} />
      </span>
    </Link>
  );
};

export default SettingsBranchCard;

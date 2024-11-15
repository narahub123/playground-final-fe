import { Link } from "react-router-dom";
import styles from "./SettingsBranchCard1.module.css";
import Icon from "../Icon/Icon";

type SettingsBranchCard1Props = {
  pageName: string;
  path: string;
  title: string;
  detail: string;
};

const SettingsBranchCard1 = ({
  pageName,
  path,
  title,
  detail,
}: SettingsBranchCard1Props) => {
  return (
    <Link
      to={`${pageName ? `/${pageName}/${path}` : `${path}`}`}
      className={styles.card}
    >
      <span>
        <p>{title}</p>
        {detail && <p className={styles.detail}>{detail}</p>}
      </span>
      <span>
        <Icon option="forward" />
      </span>
    </Link>
  );
};

export default SettingsBranchCard1;

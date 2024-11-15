import { BranchListType } from "@/types";
import styles from "./SettingsBranchContainer.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingsBranchCard from "@pages/Settings/components/SettingsBranchCard/SettingsBranchCard";

type SettingsBranchContainerProps = {
  title: string;
  detail: string;
  settingsBranchList: BranchListType[];
};

const SettingsBranchContainer = ({
  title,
  detail,
  settingsBranchList,
}: SettingsBranchContainerProps) => {
  return (
    <div className={styles.account}>
      <Header title={title} />
      <p className={styles.detail}>{detail}</p>
      <ul className={styles.container}>
        {settingsBranchList.map((item) => (
          <SettingsBranchCard item={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default SettingsBranchContainer;

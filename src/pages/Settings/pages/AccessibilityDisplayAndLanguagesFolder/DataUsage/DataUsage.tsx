import styles from "./DataUsage.module.css";
import Constant from "@constants/index";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";

const DataUsage = () => {
  const { title, detail, settingsList1, settingsList2 } =
    Constant.settings.accessibility.data_usage;
  return (
    <div className={styles.dataUsage}>
      <Header title={title} detail={detail} />
      <main className={styles.main}>
        <ul className={styles.container}>
          {settingsList1.map((item) => (
            <SettingCard
              key={item.text}
              text={item.text}
              setting={item.setting}
              checked={item.checked}
              unchecked={item.unchecked}
              detail={item.detail}
            />
          ))}
        </ul>
        <ul>
          {settingsList2.map((item) => (
            <SettingsBranchCard1
              key={item.path}
              pageName={item.pageName}
              path={item.path}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default DataUsage;

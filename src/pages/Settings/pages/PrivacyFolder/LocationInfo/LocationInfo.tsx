import Constant from "@constants/index";
import styles from "./LocationInfo.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";

const LocationInfo = () => {
  const { title, detail, settingsList1, settingsList2 } =
    Constant.settings.privacy.location_information;
  return (
    <div className={styles.info}>
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
            />
          ))}
        </ul>
        <ul className={styles.container}>
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

export default LocationInfo;

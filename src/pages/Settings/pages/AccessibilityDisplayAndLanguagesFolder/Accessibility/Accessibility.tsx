import Constant from "@constants/index";
import styles from "./Accessibility.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";

const Accessibility = () => {
  const {
    title,
    detail,
    heading1,
    settingsList1,
    heading2,
    settingsList2,
    settingsList3,
    heading3,
    settingsList4,
  } = Constant.settings.accessibility.accessibility;
  return (
    <div className={styles.accessibility}>
      <Header title={title} detail={detail} />
      <main className={styles.main}>
        <h3 className={styles.heading}>{heading1}</h3>
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
        <h3 className={styles.heading}>{heading2}</h3>
        <ul className={styles.container}>
          <ul className={styles.container}>
            {settingsList2.map((item) => (
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
          {settingsList3.map((item) => (
            <SettingsBranchCard1
              key={item.path}
              pageName={item.pageName}
              path={item.path}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </ul>
        <h3 className={styles.heading}>{heading3}</h3>
        <ul className={styles.container}>
          {settingsList4.map((item) => (
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
      </main>
    </div>
  );
};

export default Accessibility;

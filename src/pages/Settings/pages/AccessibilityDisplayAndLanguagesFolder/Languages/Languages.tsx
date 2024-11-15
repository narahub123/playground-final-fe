import styles from "./Languages.module.css";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";
import Header from "@pages/Bookmarks/components/Header/Header";
import Constant from "@constants/index";

const Languages = () => {
  const {
    title,
    detail,
    heading1,
    settingsList1,
    heading2,
    settingsList2,
    settingsList3,
    heading3,
  } = Constant.settings.accessibility.languages;
  return (
    <div className={styles.languages}>
      <Header title={title} detail={detail} />
      <main className={styles.main}>
        <h3 className={styles.heading}>{heading1}</h3>
        <ul className={styles.container}>
          {settingsList1.map((item) => (
            <SettingsBranchCard1
              key={item.path}
              pageName={item.pageName}
              path={item.path}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </ul>
        <h3 className={styles.heading}>{heading2}</h3>
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
        <h3 className={styles.heading}>{heading3}</h3>
        <ul className={styles.container}>
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
      </main>
    </div>
  );
};

export default Languages;

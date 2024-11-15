

import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./Contacts.module.css";
import Constant from "@constants/index";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";

const Contacts = () => {
  const {
    title,
    detail,
    heading1,
    description1,
    settingsList1,
    heading2,
    description2,
    settingsList2,
  } = Constant.settings.privacy.contacts;
  return (
    <div className={styles.contacts}>
      <Header title={title} detail={detail} />
      <main className={styles.main}>
        <section>
          <h3 className={styles.heading}>{heading1}</h3>
          <p className={styles.description}>{description1}</p>
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
        </section>
        <section>
          <h3 className={styles.heading}>{heading2}</h3>
          <p className={styles.description}>{description2}</p>
          <ul className={styles.container}>
            {settingsList2.map((item) => (
              <SettingsBranchCard1
                key={item.path}
                pageName={item.pageName}
                path={item.path}
                detail={item.detail}
                title={item.title}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Contacts;

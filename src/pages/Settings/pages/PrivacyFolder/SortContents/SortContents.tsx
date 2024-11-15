import Constant from "@constants/index";
import styles from "./SortContents.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";

const SortContents = () => {
  const { title, detail, text1, setting1, checked, unchecked, settingsList } =
    Constant.settings.privacy.sortContents;
  return (
    <div className={styles.sortContents}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <SettingCard
            text={text1}
            checked={checked}
            unchecked={unchecked}
            setting={setting1}
          />
        </section>
        <section>
          {settingsList.map((item) => (
            <SettingsBranchCard1
              title={item.title}
              detail={item.detail}
              path={item.path}
              pageName={item.pageName}
              key={item.path}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default SortContents;

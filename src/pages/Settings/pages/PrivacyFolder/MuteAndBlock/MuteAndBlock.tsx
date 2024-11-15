import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./MuteAndBlock.module.css";
import Constant from "@constants/index";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";

const MuteAndBlock = () => {
  const { title, detail, settingsList } =
    Constant.settings.privacy.mute_and_block;
  return (
    <div className={styles.muteAndBlock}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
      <main className={styles.main}>
        <ul className={styles.container}>
          {settingsList.map((item) => (
            <SettingsBranchCard1
              path={item.path}
              pageName={item.pageName}
              detail={item.detail}
              title={item.title}
              key={item.path}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MuteAndBlock;

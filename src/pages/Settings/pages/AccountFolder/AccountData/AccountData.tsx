import styles from "./AccountData.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import Constant from "@constants/index";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";

const AccountData = () => {
  const { pageName, title, settingsList } = Constant.settings.account.your_data;
  return (
    <div className={styles.account}>
      <Header title={title} />
      <main className={styles.main}>
        <ul className={styles.container}>
          {settingsList.map((item, index) => {
            return item.path ? (
              <SettingsBranchCard1
                pageName={pageName}
                path={item.path}
                key={index}
                title={item.title}
                detail={item.detail}
              />
            ) : (
              <li key={index} className={styles.item}>
                <span>
                  <p>{item.title}</p>
                  <p className={styles.detail}>{item.detail}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default AccountData;

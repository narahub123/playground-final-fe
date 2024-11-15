import Constant from "@constants/index";
import styles from "./NotificationPreferences.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";

const NotificationPreferences = () => {
  const { title, detail, settingsList2 } =
    Constant.settings.notifications.notificationPreferences;

  return (
    <div className={styles.filter}>
      <Header title={title} detail={detail} />
      <main className={styles.main}>
        
        {settingsList2.length !== 0 && (
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
        )}
      </main>
    </div>
  );
};

export default NotificationPreferences;

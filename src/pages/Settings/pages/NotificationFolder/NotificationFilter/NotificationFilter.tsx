import Constant from "@constants/index";
import styles from "./NotificationFilter.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";
import SettingsBranchCard1 from "@pages/Settings/components/SettingsBranchCard1/SettingsBranchCard1";

const NotificationFilter = () => {
  const { title, detail, settingsList1, settingsList2 } =
    Constant.settings.notifications.notificationFilter;
  return (
    <div className={styles.filter}>
      <Header title={title} detail={detail} />
      <main className={styles.main}>
        {settingsList1.length !== 0 && (
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
        )}
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

export default NotificationFilter;

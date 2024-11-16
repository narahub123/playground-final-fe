import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./MessageSettings.module.css";
import Constant from "@constants/index";
import SettingCard from "../SettingCard/SettingCard";
import { useState } from "react";

const MessageSettings = () => {
  const {
    settings,
    headerTitle,
    heading1,
    description1,
    allowMessageListSetup,
    allowMessageList,
    settingCardList,
  } = Constant.components.messageSetting;

  const [defaultValue, setDefaultValue] = useState(settings.allowMessage);
  return (
    <div className={styles.settings}>
      <Header title={headerTitle} />
      <main className={styles.main}>
        <section className={styles.section}>
          <p>{heading1}</p>
          <p>{description1}</p>
          <ul className={styles.container}>
            {allowMessageList.map((item) => (
              <SettingCard
                key={item.type}
                text={item.name}
                checked={allowMessageListSetup.checked}
                unchecked={allowMessageListSetup.unchecked}
                setting={defaultValue}
                setDefaultValue={setDefaultValue}
                value={item.type}
              />
            ))}
          </ul>
        </section>
        {settingCardList.map((item) => (
          <section className={styles.section} key={item.title}>
            <SettingCard
              text={item.title}
              checked={item.checked}
              unchecked={item.unchecked}
              setting={settings[item.settings as keyof typeof settings]}
            />

            <p>{item.description}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default MessageSettings;

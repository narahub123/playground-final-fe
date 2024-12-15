import { SettingsContainer } from "@features/settings-setting/ui/components";
import styles from "./EmailNotificationsPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Text, Toggle } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { SettingsCheckBoxContainerType } from "@features/settings-setting/types";
import { useSelector } from "react-redux";
import { getEmailNotification } from "@shared/@common/model/selectors";
import { setEmailNotification } from "@shared/@common/model/slices/settingsSlice";

const EmailNotificationsPage = () => {
  const emailNotification = useSelector(getEmailNotification);
  const { pageTitle, toggle, postList, pgList } = useLanguageMode([
    "pages",
    "EmailNotificationsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={
        <>
          <div className={styles.toggle}>
            <Text text={toggle.text} />
            <Toggle toggle={emailNotification} reducer={setEmailNotification} />
          </div>
          <Text text={toggle.expl} type="description" />
        </>
      }
      bottomContent={
        <>
          {(postList as SettingsCheckBoxContainerType[]).map((item, index) => (
            <SettingsContainer
              item={item}
              key={index}
              gap={0}
              disabled={!emailNotification}
            />
          ))}

          {(pgList as SettingsCheckBoxContainerType[]).map((item, index) => (
            <SettingsContainer
              item={item}
              key={index}
              disabled={!emailNotification}
            />
          ))}
        </>
      }
    />
  );
};

export default EmailNotificationsPage;

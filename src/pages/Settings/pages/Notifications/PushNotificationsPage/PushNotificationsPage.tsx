import styles from "./PushNotificationsPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { MainLayout } from "@shared/pages/layout";
import { Button, Text, Toggle } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { getPushNotification } from "@shared/@common/model/selectors";
import { setPushNotification } from "@shared/@common/model/slices/settingsSlice";
import { useAppDispatch } from "@app/store";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { SettingsCheckBoxContainerType } from "@features/settings-setting/types";

const PushNotificationsPage = () => {
  const dispatch = useAppDispatch();
  const pushNotification = useSelector(getPushNotification);
  const { pageTitle, toggle, empty, button, list } = useLanguageMode([
    "pages",
    "PushNotificationsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={
        <>
          <div className={styles.toggle}>
            <Text text={toggle.text} />
            <Toggle toggle={pushNotification} reducer={setPushNotification} />
          </div>
          <Text text={toggle.expl} type="description" />
        </>
      }
      bottomContent={
        <>
          {pushNotification ? (
            <>
              {(list as SettingsCheckBoxContainerType[]).map((item, index) => (
                <SettingsContainer item={item} key={index} gap={0} />
              ))}
            </>
          ) : (
            <div className={styles.empty}>
              <Text type="heading" text={empty.title} />
              <Text text={empty.expl} />
              <Button
                text={button.text}
                isValid
                handleClick={() => dispatch(setPushNotification(true))}
              />
            </div>
          )}
        </>
      }
    />
  );
};

export default PushNotificationsPage;

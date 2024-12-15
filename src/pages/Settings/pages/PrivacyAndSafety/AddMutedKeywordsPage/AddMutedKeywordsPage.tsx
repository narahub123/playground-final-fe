import styles from "./AddMutedKeywordsPage.module.css";
import { MainLayout } from "@shared/pages/layout";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Button, Input, Text, Toggle } from "@shared/@common/ui/components";
import { useState } from "react";
import {
  InputValueType,
  MuteDurationType,
  MuteTargetType,
} from "@shared/@common/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useSelector } from "react-redux";
import { getMute } from "@shared/@common/model/selectors";
import { setMute } from "@shared/@common/model/slices/settingsSlice";

const AddMutedKeywordsPage = () => {
  const mute = useSelector(getMute);
  const [value, setValue] = useState<InputValueType>("");
  const [isValid, setIsValid] = useState(false);

  const [muteInHomeFeed, setMuteInHomeFeed] = useState<boolean>(mute.homeFeed);
  const [muteNotification, setMuteNotification] = useState<boolean>(
    mute.notification
  );
  const [muteTarget, setMuteTarget] = useState<MuteTargetType>(mute.target);
  const [muteDuration, setMuteDuration] = useState<MuteDurationType>(
    mute.duration
  );

  const {
    pageTitle,
    expl,
    heading1,
    item1,
    item2,
    item3,
    heading2,
    item4,
    button,
  } = useLanguageMode(["pages", "AddMutedKeywordsPage"]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={
        <div className={styles.section}>
          <Input
            field="mutedKeywords"
            fieldTitle="단어 또는 문구를 입력하세요."
            value={value}
            setValue={setValue}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <Text text={expl} type="description" />
        </div>
      }
      bottomContent={
        <>
          <div>
            <div className={styles.section}>
              <Text text={heading1} type="heading" style={styles.heading} />
              <SettingsContainer
                item={item1}
                initialValue={muteInHomeFeed}
                setter={setMuteInHomeFeed}
              />
              <div className={styles[`toggle-container`]}>
                <Text text={item2.comp.text} />
                <Toggle
                  toggle={muteNotification}
                  setter={setMuteNotification}
                />
              </div>
            </div>
            <div className={styles.section}>
              <SettingsContainer
                item={item3}
                gap={0}
                initialValue={muteTarget}
                setter={setMuteTarget}
              />
            </div>
            <div className={styles.section}>
              <Text text={heading2} type="heading" style={styles.heading} />
              <SettingsContainer
                item={item4}
                gap={0}
                initialValue={muteDuration}
                setter={setMuteDuration}
              />
            </div>
            <div className={styles[`button-container`]}>
              <Button
                text={button.text}
                handleClick={() => {
                  setMute({
                    homeFeed: muteInHomeFeed,
                    notification: muteNotification,
                    target: muteTarget,
                    duration: muteDuration,
                  });
                }}
                isValid={isValid}
              />
            </div>
          </div>
        </>
      }
    />
  );
};

export default AddMutedKeywordsPage;

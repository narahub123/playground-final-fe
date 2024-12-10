import styles from "./GenderPage.module.css";
import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
  SettingsHyperLinkCardContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description, Input } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useState } from "react";

const GenderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pageTitle, description, list, item, input, button } = useLanguageMode(
    ["pages", "GenderPage"]
  );

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          {(
            list as (
              | SettingsBranchListContainerType
              | SettingsCheckBoxContainerType
              | SettingsHyperLinkCardContainerType
            )[]
          ).map((item, index) => (
            <SettingsContainer item={item} gap={0} key={index} isRounded />
          ))}
          <div className={styles.wrapper} onClick={() => setIsOpen(true)}>
            <SettingsContainer item={item} gap={0} isRounded />
          </div>
          {isOpen && (
            <div className={styles[`input-wrapper`]}>
              <Input
                field="gender"
                fieldTitle={input.fieldTitle}
                valueMaxLength={30}
              />
            </div>
          )}
          <div className={styles[`button-container`]}>
            <button className={styles.button}>{button.text}</button>
          </div>
        </>
      }
    />
  );
};

export default GenderPage;

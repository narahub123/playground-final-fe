import styles from "./GenderPage.module.css";
import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
  SettingsHyperLinkCardContainerType,
} from "@features/settings-setting/types";
import {
  CheckBox,
  SettingsContainer,
} from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { getGender } from "@shared/@common/model/selectors";
import { InputValueType } from "@shared/@common/types";
import { Description, Input } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useState } from "react";
import { useSelector } from "react-redux";

const GenderPage = () => {
  // input을 여닫는 상태
  const [isOpen, setIsOpen] = useState(false);
  // 등록된 성별
  const gender = useSelector(getGender);
  // 성별 상태
  const [value, setValue] = useState<InputValueType>(gender);
  // 유효성
  const [isValid, setIsValid] = useState(false);

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
            <div key={index} onClick={() => setIsOpen(false)}>
              <SettingsContainer
                item={item}
                gap={0}
                isRounded
                initialValue={value}
                setter={setValue}
              />
            </div>
          ))}
          <div
            className={styles.wrapper}
            onClick={() => {
              setIsOpen(true);
              if (value === "f" || value === "m") setValue("");
            }}
          >
            <CheckBox item={item.comp} isRounded initialValue={isOpen} />
          </div>
          {isOpen && (
            <div className={styles[`input-wrapper`]}>
              <Input
                field="gender"
                fieldTitle={input.fieldTitle}
                valueMaxLength={30}
                value={value}
                setValue={setValue}
                isValid={isValid}
                setIsValid={setIsValid}
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

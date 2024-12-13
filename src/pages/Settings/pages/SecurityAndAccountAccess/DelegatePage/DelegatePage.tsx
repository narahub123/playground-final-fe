import styles from "./DelegatePage.module.css";
import { MainLayout } from "@shared/pages/layout";
import { useLanguageMode } from "@shared/@common/model/hooks";
import {
  Description,
  Text,
  Title,
  Toggle,
} from "@shared/@common/ui/components";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { SettingsBranchListContainerType } from "@features/settings-setting/types";
import { useSelector } from "react-redux";
import { getCanbeInvited } from "@shared/@common/model/selectors";
import { setCanBeInvited } from "@shared/@common/model/slices/settingsSlice";

const DelegatePage = () => {
  const canBeInvited = useSelector(getCanbeInvited);
  const { pageTitle, description, text, expl, heading, list } = useLanguageMode(
    ["pages", "DelegatePage"]
  );
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Text text={description} type="description" />}
      bottomContent={
        <>
          <div className={styles[`slider-section`]}>
            <div className={styles.container}>
              <Text text={text} />
              <Toggle toggle={canBeInvited} reducer={setCanBeInvited} />
            </div>
            <Text text={expl} type="description" />
          </div>
          <div className={styles[`list-container`]}>
            <Text text={heading} style={styles.heading} type="heading" />
            {(list as SettingsBranchListContainerType[]).map((item, index) => (
              <SettingsContainer item={item} key={index} />
            ))}
          </div>
        </>
      }
    />
  );
};

export default DelegatePage;

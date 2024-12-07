import {
  CheckBoxType,
  SettingsBranchType,
} from "@features/settings-setting/types/data";
import styles from "./SecurityPage.module.css";
import {
  CheckBox,
  SettingsBranchCard,
} from "@features/settings-setting/ui/components";
import { Description, Title } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useLanguageMode } from "@shared/@common/model/hooks";

interface SettingsContainerType {
  title: string;
  type: string;
  description: string;
}

interface SettingsBranchListContainerType extends SettingsContainerType {
  comp: SettingsBranchType;
}

interface SettingsCheckBoxContainerType extends SettingsContainerType {
  comp: CheckBoxType;
}

const SecurityPage = () => {
  const { pageTitle, description, list } = useLanguageMode([
    "pages",
    "SecurityPage",
  ]);
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
            )[]
          ).map((item) => {
            const { title, type, comp, description } = item;

            return (
              <div className={styles.section}>
                <Title text={title} />
                {type === "card" ? (
                  <SettingsBranchCard item={comp as SettingsBranchType} />
                ) : (
                  <CheckBox item={comp as CheckBoxType} />
                )}
                <Description text={description} />
              </div>
            );
          })}
        </>
      }
    />
  );
};

export default SecurityPage;

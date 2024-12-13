import { MainLayout } from "@shared/pages/layout";
import styles from "./DelegatePage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description, Title, Toggle } from "@shared/@common/ui/components";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { SettingsBranchListContainerType } from "@features/settings-setting/types";
import { useSelector } from "react-redux";
import { getCanbeInvited } from "@shared/@common/model/selectors";
import { setCanBeInvited } from "@shared/@common/model/slices/settingsSlice";

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps) => {
  return <p>{text}</p>;
};

const DelegatePage = () => {
  const canBeInvited = useSelector(getCanbeInvited);
  const { pageTitle, description, text, expl, heading, list } = useLanguageMode(
    ["pages", "DelegatePage"]
  );
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          <div className={styles[`slider-section`]}>
            <div className={styles.container}>
              <Text text={text} />
              <Toggle toggle={canBeInvited} reducer={setCanBeInvited} />
            </div>
            <Description text={expl} />
          </div>
          <div className={styles[`list-container`]}>
            <Title text={heading} className={styles.heading} />
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

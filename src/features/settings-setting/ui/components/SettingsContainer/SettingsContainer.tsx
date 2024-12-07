import { Description, Title } from "@shared/@common/ui/components";
import styles from "./SettingsContainer.module.css";
import SettingsBranchCard from "../SettingsBranchCard/SettingsBranchCard";
import CheckBox from "../CheckBox/CheckBox";
import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import {
  CheckBoxType,
  SettingsBranchType,
} from "@features/settings-setting/types/data";

interface SettingsContainerProps {
  list: (SettingsBranchListContainerType | SettingsCheckBoxContainerType)[];
}

const SettingsContainer = ({ list }: SettingsContainerProps) => {
  return (
    <>
      {list.map((item) => {
        const { title, type, comp, description } = item;

        return (
          <div className={styles.container}>
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
  );
};

export default SettingsContainer;

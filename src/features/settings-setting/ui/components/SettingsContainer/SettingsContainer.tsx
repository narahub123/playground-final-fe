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
  item: SettingsBranchListContainerType | SettingsCheckBoxContainerType;
  isRounded?: boolean;
  gap?: number;
  unit?: string;
}

const SettingsContainer = ({
  item,
  isRounded = false,
  gap = 10,
  unit = "px",
}: SettingsContainerProps) => {
  const { title, type, comp, description } = item;
  const { selector } = item as SettingsCheckBoxContainerType;

  return (
    <div className={styles.container} style={{ gap: `${gap}${unit}` }}>
      {title && <Title text={title} />}
      {type === "card" ? (
        <SettingsBranchCard item={comp as SettingsBranchType} />
      ) : type === "checkbox" ? (
        <CheckBox
          item={comp as CheckBoxType}
          className={styles.front}
          isRounded={isRounded}
          selector={selector}
        />
      ) : type === "checkboxlist" ? (
        (comp as CheckBoxType[]).map((i, index) => (
          <CheckBox
            key={index}
            item={i}
            className={styles.front}
            isRounded={isRounded}
            selector={selector}
          />
        ))
      ) : undefined}
      {description && (
        <Description
          text={description}
          className={`${styles.front} ${styles.bottom}`}
        />
      )}
    </div>
  );
};

export default SettingsContainer;

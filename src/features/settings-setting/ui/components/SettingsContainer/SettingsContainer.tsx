import {
  Description,
  HyperLinkCard,
  Title,
} from "@shared/@common/ui/components";
import styles from "./SettingsContainer.module.css";
import SettingsBranchCard from "../SettingsBranchCard/SettingsBranchCard";
import CheckBox from "../CheckBox/CheckBox";
import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
  SettingsHyperLinkCardContainerType,
} from "@features/settings-setting/types";
import {
  CheckBoxType,
  SettingsBranchType,
} from "@features/settings-setting/types/data";
import { HyperLinkCardType } from "@shared/@common/types";

interface SettingsContainerProps {
  item:
    | SettingsBranchListContainerType
    | SettingsCheckBoxContainerType
    | SettingsHyperLinkCardContainerType;
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
  const { title, text, detail, type, comp, description, top, disabled } = item;
  const { selector } = item as SettingsCheckBoxContainerType;

  const roundCond = isRounded || Array.isArray(item.comp);

  return (
    <div className={styles.container} style={{ gap: `${gap}${unit}` }}>
      {title && <Title text={title} className={`${styles.front}`} />}
      {text && <h3 className={`${styles.heading} ${styles.front}`}>{text}</h3>}
      {detail && <Description text={detail} className={styles.front} />}
      {type === "card" ? (
        <SettingsBranchCard item={comp as SettingsBranchType} />
      ) : type === "checkbox" ? (
        <CheckBox
          item={comp as CheckBoxType}
          className={`${styles.front} ${top ? styles.top : undefined} ${
            disabled ? styles.disabled : undefined
          }`}
          isRounded={roundCond}
          selector={selector}
        />
      ) : type === "checkboxlist" ? (
        (comp as CheckBoxType[]).map((i, index) => (
          <CheckBox
            key={index}
            item={i}
            className={`${styles.front} ${top ? styles.top : undefined}  ${
              disabled ? styles.disabled : undefined
            }`}
            isRounded={roundCond}
            selector={selector}
          />
        ))
      ) : type === "link" ? (
        <HyperLinkCard item={comp as HyperLinkCardType} />
      ) : undefined}
      {description && (
        <Description
          text={description}
          className={`${styles.front} ${styles.bottom} ${
            disabled ? styles.disabled : undefined
          }`}
        />
      )}
    </div>
  );
};

export default SettingsContainer;

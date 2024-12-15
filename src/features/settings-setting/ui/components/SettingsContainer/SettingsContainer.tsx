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
  initialValue?: any;
  setter?: React.Dispatch<React.SetStateAction<any>>;
  isRounded?: boolean;
  gap?: number;
  unit?: string;
  disabled?: boolean;
}

const SettingsContainer = ({
  item,
  initialValue,
  setter,
  isRounded = false,
  gap = 10,
  unit = "px",
  disabled = false,
}: SettingsContainerProps) => {
  const { title, text, detail, type, comp, description, top } = item;
  const { selector } = item as SettingsCheckBoxContainerType;

  const roundCond = isRounded || Array.isArray(item.comp);

  return (
    <div className={styles.container} style={{ gap: `${gap}${unit}` }}>
      {title && (
        <Title
          text={title}
          className={`${styles.front} ${disabled ? styles.disabled : ""}`}
        />
      )}
      {text && (
        <h3
          className={`${styles.heading} ${styles.front} ${
            disabled ? styles.disabled : ""
          }`}
        >
          {text}
        </h3>
      )}
      {detail && (
        <Description
          text={detail}
          className={`${styles.front} ${disabled ? styles.disabled : ""}`}
        />
      )}
      {type === "card" ? (
        <SettingsBranchCard
          item={comp as SettingsBranchType}
          className={`${disabled ? styles.disabled : undefined}`}
        />
      ) : type === "checkbox" ? (
        <CheckBox
          item={comp as CheckBoxType}
          className={`${styles.front} ${top ? styles.top : undefined} ${
            disabled ? styles.disabled : undefined
          }`}
          isRounded={roundCond}
          selector={selector}
          initialValue={initialValue}
          setter={setter}
          disabled={disabled}
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
            initialValue={initialValue}
            setter={setter}
            disabled={disabled}
          />
        ))
      ) : type === "link" ? (
        <HyperLinkCard
          item={comp as HyperLinkCardType}
          className={`${disabled ? styles.disabled : undefined}`}
        />
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

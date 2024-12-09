import { RootState } from "@app/store";
import { CheckBoxType, SettingsBranchType } from "../data";

interface SettingsContainerType {
  title?: string;
  text?: string;
  detail?: string;
  type: string;
  description?: string;
  top?: boolean;
  disabled?: boolean;
}

interface SettingsBranchListContainerType extends SettingsContainerType {
  comp: SettingsBranchType;
}

interface SettingsCheckBoxContainerType extends SettingsContainerType {
  comp: CheckBoxType | CheckBoxType[];
  selector: (state: RootState) => boolean | string | number;
}

export type {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
  SettingsContainerType,
};

import { CheckBoxType, SettingsBranchType } from "../data";

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

export type {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
  SettingsContainerType,
};

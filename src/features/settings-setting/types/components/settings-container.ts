import { RootState } from "@app/store";
import { CheckBoxType, SettingsBranchType } from "../data";
import { HyperLinkCardType } from "@shared/@common/types";

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

interface SettingsHyperLinkCardContainerType extends SettingsContainerType {
  comp: HyperLinkCardType;
}
export type {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
  SettingsHyperLinkCardContainerType,
  SettingsContainerType,
};

interface SettingsBranchType {
  title: string; // 브랜치 이름
  path: string; // 브랜치 경로
  expl?: string; // 설명
  icon?: string;
}

interface SettingsMidBranchType extends SettingsBranchType {
  subBranches?: SettingsBranchType[];
}

interface SettingsMainBranchType extends SettingsBranchType {
  midBranches?: SettingsBranchType[] | SettingsMidBranchType[];
}
export type { SettingsBranchType, SettingsMainBranchType };

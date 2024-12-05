interface SettingsMainBranchType {
  title: string; // 브랜치 이름
  path: string; // 브랜치 경로
}

interface SettingsBranchType extends SettingsMainBranchType {
  title: string; // 브랜치 이름
  path: string; // 브랜치 경로
  expl?: string; // 설명
  icon?: string;
}

export type { SettingsBranchType, SettingsMainBranchType };

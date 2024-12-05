import { SettingsMainBranchType } from "@features/settings-setting/types";

const settingsMainBranchList: SettingsMainBranchType[] = [
  // 계정
  {
    title: "계정",
    path: "account",
  },
  // 보안 및 계정 접근 권한
  {
    title: "보안 및 계정 접근 권한",
    path: "security_and_account_access",
  },
  // 개인 정보 및 안전
  {
    title: "개인정보 및 안전",
    path: "privacy_and_safety",
  },
  // 알림
  {
    title: "알림",
    path: "notifications",
  },
  // 접근성, 표시, 언어
  {
    title: "접근성, 표시, 언어",
    path: "accessibility_display_and_languages",
  },
  // 수익 창출
  {
    title: "수익 창출",
    path: "monetization",
  },
  // 추가 리소스
  {
    title: "추가 리소스",
    path: "about",
  },
];

export default settingsMainBranchList;

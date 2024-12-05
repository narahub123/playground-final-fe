import { settingsBranchList } from "./settings-branch-list";
import settingsMainBrachList from "./settings-main-branch-list";
import {
  accountBranchList,
  securityAndAccountAccessBranchList,
  privacyAndSafetyBranchList,
  notificationBrachList,
  AccessibilityAndDisplayAndLanguages,
} from "./settings-mid-branch-list";
import {
  appAndSessionsBranchList,
  muteAndBlockBrachList,
  notificationPreferenceBranchList,
} from "./settings-sub-branch-list";

export {
  settingsBranchList, // Settings 브랜치 목록
  settingsMainBrachList, // Settings 메인 브랜치 목록
  accountBranchList, // 계정
  securityAndAccountAccessBranchList, // 보안 및 계정 접근 권한
  privacyAndSafetyBranchList, // 개인 정보 및 안전
  notificationBrachList, // 알림
  AccessibilityAndDisplayAndLanguages, // 접근성, 표시, 언어
  appAndSessionsBranchList, // 앱과 세션
  muteAndBlockBrachList, // 뮤트 및 차단
  notificationPreferenceBranchList, // 알림 환경 설정
};

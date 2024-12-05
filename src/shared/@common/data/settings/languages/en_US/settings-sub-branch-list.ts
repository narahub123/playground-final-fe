import { SettingsBranchType } from "@features/settings-setting/types/data";

// 앱과 세션
const appAndSessionsBranchList: SettingsBranchType[] = [
  // 연결된 앱
  {
    title: "Connected Apps",
    expl: "These are the apps connected to your account. You can view the information accessed by these apps and block access.",
    path: "connected_apps",
  },
  // 세션
  {
    title: "Sessions",
    expl: "Sessions are devices that are currently using or have used your PlayGround account. These sessions are logged in with your account. You can log out from each session.",
    path: "sessions",
  },
  // 계정 엑세스 기록
  {
    title: "Account Access History",
    expl: "If suspicious activity is detected in an app, block access from connected apps. IP-based locations may differ from your actual location.",
    path: "login_history",
  },
  // 로그인된 디바이스 및 앱
  {
    title: "Logged-in Devices and Apps",
    path: "devices",
  },
];

// 뮤트 및 차단
const muteAndBlockBranchList: SettingsBranchType[] = [
  {
    title: "Blocked Accounts",
    path: "blocked/all",
  },
  {
    title: "Muted Accounts",
    path: "muted/all",
  },
  {
    title: "Muted Words",
    path: "muted_keywords",
  },
  {
    title: "Muted Notification Alerts",
    path: "notifications/advanced_filters",
  },
];

// 알림 환경설정
const notificationPreferenceBranchList: SettingsBranchType[] = [
  // 푸시 알림
  {
    title: "Push Notifications",
    path: "push_notifications",
  },
  // 이메일 알림
  {
    title: "Email Notifications",
    path: "email_notifications",
  },
];

export {
  appAndSessionsBranchList,
  muteAndBlockBranchList,
  notificationPreferenceBranchList,
};

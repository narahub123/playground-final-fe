import { SettingsBranchType } from "@features/settings-setting/types/data";

// 앱과 세션
const appAndSessionsBranchList: SettingsBranchType[] = [
  // 연결된 앱
  {
    title: "連接的應用",
    expl: "這些是連接到您的帳戶的應用程式。您可以查看這些應用程式訪問的信息並阻止訪問。",
    path: "connected_apps",
  },
  // 세션
  {
    title: "會話",
    expl: "會話是當前或曾經使用您的PlayGround帳戶的設備。這些會話已經使用您的帳戶登錄，您可以在每個會話中登出。",
    path: "sessions",
  },
  // 계정 엑세스 기록
  {
    title: "帳戶訪問記錄",
    expl: "如果在應用程式中發現可疑活動，請在連接的應用程式中阻止訪問。基於IP的位置可能與實際位置不同。",
    path: "login_history",
  },
  // 로그인된 디바이스 및 앱
  {
    title: "登錄的設備與應用",
    path: "devices",
  },
];

// 뮤트 및 차단
const muteAndBlockBranchList: SettingsBranchType[] = [
  {
    title: "已封鎖帳戶",
    path: "blocked/all",
  },
  {
    title: "已靜音帳戶",
    path: "muted/all",
  },
  {
    title: "已靜音關鍵字",
    path: "muted_keywords",
  },
  {
    title: "靜音通知",
    path: "notifications/advanced_filters",
  },
];

// 알림 환경설정
const notificationPreferenceBranchList: SettingsBranchType[] = [
  // 푸시 알림
  {
    title: "推播通知",
    path: "push_notifications",
  },
  // 이메일 알림
  {
    title: "電子郵件通知",
    path: "email_notifications",
  },
];

export {
  appAndSessionsBranchList,
  muteAndBlockBranchList,
  notificationPreferenceBranchList,
};

import { SettingsBranchType } from "@features/settings-setting/types/data";

// 앱과 세션
const appAndSessionsBranchList: SettingsBranchType[] = [
  // 연결된 앱
  {
    title: "连接的应用",
    expl: "这些是连接到您的帐户的应用程序。您可以查看这些应用程序访问的信息并阻止访问。",
    path: "connected_apps",
  },
  // 세션
  {
    title: "会话",
    expl: "会话是当前或曾经使用您的PlayGround帐户的设备。这些会话已使用您的帐户登录。您可以从每个会话注销。",
    path: "sessions",
  },
  // 계정 엑세스 기록
  {
    title: "帐户访问历史",
    expl: "如果在应用程序中检测到可疑活动，请阻止连接的应用程序访问。基于IP的位置可能与您的实际位置不同。",
    path: "login_history",
  },
  // 로그인된 디바이스 및 앱
  {
    title: "登录设备和应用",
    path: "devices",
  },
];

// 뮤트 및 차단
const muteAndBlockBranchList: SettingsBranchType[] = [
  {
    title: "已屏蔽帐户",
    path: "blocked/all",
  },
  {
    title: "已静音帐户",
    path: "muted/all",
  },
  {
    title: "已静音单词",
    path: "muted_keywords",
  },
  {
    title: "静音通知提醒",
    path: "notifications/advanced_filters",
  },
];

// 알림 환경설정
const notificationPreferenceBranchList: SettingsBranchType[] = [
  // 푸시 알림
  {
    title: "推送通知",
    path: "push_notifications",
  },
  // 이메일 알림
  {
    title: "电子邮件通知",
    path: "email_notifications",
  },
];

export {
  appAndSessionsBranchList,
  muteAndBlockBranchList,
  notificationPreferenceBranchList,
};

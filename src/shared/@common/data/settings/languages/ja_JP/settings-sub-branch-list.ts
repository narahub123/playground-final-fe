import { SettingsBranchType } from "@features/settings-setting/types/data";

// 앱과 세션
const appAndSessionsBranchList: SettingsBranchType[] = [
  // 연결된 앱
  {
    title: "接続されたアプリ",
    expl: "これらはあなたのアカウントに接続されたアプリです。これらのアプリがアクセスする情報を表示し、アクセスをブロックできます。",
    path: "connected_apps",
  },
  // 세션
  {
    title: "セッション",
    expl: "セッションは現在または過去にあなたのPlayGroundアカウントを使用したデバイスです。これらのセッションは現在あなたのアカウントでログインしています。各セッションからログアウトできます。",
    path: "sessions",
  },
  // 계정 엑세스 기록
  {
    title: "アカウントアクセス履歴",
    expl: "アプリで疑わしい活動が見つかった場合は、接続されたアプリからアクセスをブロックしてください。IPベースの位置情報は実際の位置と異なる場合があります。",
    path: "login_history",
  },
  // 로그인된 디바이스 및 앱
  {
    title: "ログイン中のデバイスとアプリ",
    path: "devices",
  },
];

// 뮤트 및 차단
const muteAndBlockBranchList: SettingsBranchType[] = [
  {
    title: "ブロックしたアカウント",
    path: "blocked/all",
  },
  {
    title: "ミュートしたアカウント",
    path: "muted/all",
  },
  {
    title: "ミュートしたキーワード",
    path: "muted_keywords",
  },
  {
    title: "ミュートされた通知",
    path: "notifications/advanced_filters",
  },
];

// 알림 환경설정
const notificationPreferenceBranchList: SettingsBranchType[] = [
  // 푸시 알림
  {
    title: "プッシュ通知",
    path: "push_notifications",
  },
  // 이메일 알림
  {
    title: "メール通知",
    path: "email_notifications",
  },
];

export {
  appAndSessionsBranchList,
  muteAndBlockBranchList,
  notificationPreferenceBranchList,
};

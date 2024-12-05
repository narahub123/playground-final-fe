import { SettingsBranchType } from "../types/data";

// 앱과 세션
const appAndSessionsBranchList: SettingsBranchType[] = [
  // 연결된 앱
  {
    title: "연결된 앱",
    expl: "이것은 계정에 연결된 앱입니다. 이러한 앱이 액세스하는 정보를 표시하고 액세스를 차단할 수 있습니다.",
    path: "connected_apps",
  },
  // 세션
  {
    title: "세션",
    expl: "세션은 내 PlayGround 계정을 사용 중이거나 사용한 디바이스입니다. 이 세션들은 현재 내 계정으로 로그인되어 있습니다. 각 세션에서 로그아웃할 수 있습니다.",
    path: "sessions",
  },
  // 계정 엑세스 기록
  {
    title: "계정 엑세스 기록",
    expl: "앱에서 의심스러운 활동이 발견된 경우 연결된 앱에서 액세스를 차단하세요. IP 기반 위치는 실제 위치와 다를 수 있습니다.",
    path: "login_history",
  },
  // 로그인된 디바이스 및 앱
  {
    title: "로그인된 디바이스 및 앱",
    path: "devices",
  },
];

// 뮤트 및 차단
const muteAndBlockBrachList: SettingsBranchType[] = [
  {
    title: "차단한 계정",
    path: "blocked/all",
  },
  {
    title: "뮤트한 계정",
    path: "muted/all",
  },
  {
    title: "뮤트한 단어",
    path: "muted_keywords",
  },
  {
    title: "뮤트 상태의 알림",
    path: "notifications/advanced_filters",
  },
];

// 알림 환경설정
const notificationPreferenceBranchList: SettingsBranchType[] = [
  // 푸시 알림
  {
    title: "푸시 알림",
    path: "push_notifications",
  },
  // 이메일 알림
  {
    title: "이메일 알림",
    path: "email_notifications",
  },
];

export {
  appAndSessionsBranchList,
  muteAndBlockBrachList,
  notificationPreferenceBranchList,
};

import { SettingsBranchType } from "@features/settings-setting/types/data";

// 계정
const accountBranchList: SettingsBranchType[] = [
  // 계정 정보
  {
    title: "帳戶資訊",
    expl: "查看像手機號碼和電子郵件地址這樣的帳戶資訊。",
    path: "account_data",
    icon: "user",
  },
  // 비밀번호 변경
  {
    title: "更改密碼",
    expl: "隨時更改密碼。",
    path: "password",
    icon: "key",
  },
  // 데이터 기록 다운로드
  {
    title: "數據記錄下載",
    expl: "獲得關於帳戶中存儲的各種信息的洞察。",
    path: "download_data",
    icon: "download",
  },
  // 계정 비활성화
  {
    title: "停用帳戶",
    expl: "了解如何停用帳戶。",
    path: "inactivate",
    icon: "crackedHeart",
  },
];

// 보안 및 계정 접근 권한
const securityAndAccountAccessBranchList: SettingsBranchType[] = [
  // 보안
  {
    title: "安全",
    path: "security",
    expl: "管理帳戶的安全性。",
    icon: "lock",
  },
  // 앱 및 세션
  {
    title: "應用程式和會話",
    path: "apps_and_sessions",
    expl: "查看帳戶和已連接的應用程式登錄的時間信息。",
    icon: "apps",
  },
  // 연결된 계정
  {
    title: "連接的帳戶",
    path: "connected_accounts",
    expl: "管理用於登錄PlayGround的Google、Naver或Kakao帳戶。",
    icon: "twoWay",
  },
  // 위임
  {
    title: "委任",
    path: "delegate",
    expl: "管理共享帳戶。",
    icon: "delegate",
  },
];

// 개인정보 및 안전
const privacyAndSafetyBranchList: SettingsBranchType[] = [
  {
    title: "受眾、媒體和標籤",
    expl: "管理在X上公開的個人信息。",
    path: "audience_and_tagging",
  },
  {
    title: "我的帖子",
    expl: "管理與帖子相關的信息。",
    path: "my_tweets",
  },
  {
    title: "顯示的內容",
    expl: "根據用戶的興趣和話題等決定在PlayGround上顯示的信息。",
    path: "content_you_see",
  },
  {
    title: "靜音和封鎖",
    expl: "管理我靜音或封鎖的帳戶、詞彙和通知。",
    path: "mute_and_block",
  },
  {
    title: "消息",
    expl: "管理可以直接給我發消息的人。",
    path: "messages",
  },
  {
    title: "帳戶查找和聯絡人",
    expl: "控制帳戶查找設置並管理導入的聯絡人。",
    path: "contacts",
  },
  {
    title: "廣告設置",
    expl: "管理PlayGround上的廣告設置。",
    path: "ads_preferences",
  },
  {
    title: "位置",
    expl: "管理PlayGround用於自定義環境的位置信息。",
    path: "location_information",
  },
];

// 알림
const notificationBranchList: SettingsBranchType[] = [
  // 필터
  {
    title: "過濾器",
    expl: "選擇您想查看的通知和不想查看的通知。",
    path: "notifications/filters",
    icon: "",
  },
  // 환경 설정
  {
    title: "設置",
    expl: "選擇按通知類型進行的設置。",
    path: "notifications/preferences",
    icon: "",
  },
];

// 접근성, 표시, 언어
const AccessibilityAndDisplayAndLanguages: SettingsBranchType[] = [
  // 접근성
  {
    title: "輔助功能",
    expl: "管理PlayGround的用戶界面，例如顏色對比和動作限制。這些設置會應用到此瀏覽器中的所有PlayGround帳戶。",
    path: "accessibility",
    icon: "eyeoff",
  },
  // 표시
  {
    title: "顯示",
    expl: "管理字體大小、顏色和背景等設置。這些設置會應用到此瀏覽器中的所有PlayGround帳戶。",
    path: "display",
    icon: "pen",
  },
  // 언어
  {
    title: "語言",
    expl: "管理用於定制用戶環境的語言設置。",
    path: "languages",
    icon: "map",
  },
  // 데이터 사용량
  {
    title: "數據使用",
    expl: "PlayGround限制此設備上使用的網絡數據量。",
    path: "data",
    icon: "barChart",
  },
  // 키보드 단축키
  {
    title: "鍵盤快捷鍵",
    path: "/i/keyboard_shortcuts",
    icon: "",
  },
];

export {
  accountBranchList,
  securityAndAccountAccessBranchList,
  privacyAndSafetyBranchList,
  notificationBranchList,
  AccessibilityAndDisplayAndLanguages,
};

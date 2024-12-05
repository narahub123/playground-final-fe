import { SettingsBranchType } from "@features/settings-setting/types/data";

// 계정
const accountBranchList: SettingsBranchType[] = [
  // 계정 정보
  {
    title: "账户信息",
    expl: "查看像手机号码和电子邮件地址这样的账户信息。",
    path: "account_data",
    icon: "user",
  },
  // 비밀번호 변경
  {
    title: "更改密码",
    expl: "随时更改密码。",
    path: "password",
    icon: "key",
  },
  // 데이터 기록 다운로드
  {
    title: "数据记录下载",
    expl: "获得关于账户中存储的各种信息的洞察。",
    path: "download_data",
    icon: "download",
  },
  // 계정 비활성화
  {
    title: "停用账户",
    expl: "了解如何停用账户。",
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
    expl: "管理账户的安全性。",
    icon: "lock",
  },
  // 앱 및 세션
  {
    title: "应用程序和会话",
    path: "apps_and_sessions",
    expl: "查看账户和已连接的应用程序登录的时间信息。",
    icon: "apps",
  },
  // 연결된 계정
  {
    title: "连接的账户",
    path: "connected_accounts",
    expl: "管理用于登录PlayGround的Google、Naver或Kakao账户。",
    icon: "twoWay",
  },
  // 위임
  {
    title: "委托",
    path: "delegate",
    expl: "管理共享账户。",
    icon: "delegate",
  },
];

// 개인정보 및 안전
const privacyAndSafetyBranchList: SettingsBranchType[] = [
  {
    title: "受众、媒体和标签",
    expl: "管理在X上公开的个人信息。",
    path: "audience_and_tagging",
  },
  {
    title: "我的帖子",
    expl: "管理与帖子相关的信息。",
    path: "my_tweets",
  },
  {
    title: "显示的内容",
    expl: "根据用户的兴趣和话题等决定在PlayGround上显示的信息。",
    path: "content_you_see",
  },
  {
    title: "静音和封锁",
    expl: "管理我静音或封锁的账户、词汇和通知。",
    path: "mute_and_block",
  },
  {
    title: "消息",
    expl: "管理可以直接给我发消息的人。",
    path: "messages",
  },
  {
    title: "账户查找和联系人",
    expl: "控制账户查找设置并管理导入的联系人。",
    path: "contacts",
  },
  {
    title: "广告设置",
    expl: "管理PlayGround上的广告设置。",
    path: "ads_preferences",
  },
  {
    title: "位置",
    expl: "管理PlayGround用于自定义环境的位置信息。",
    path: "location_information",
  },
];

// 알림
const notificationBranchList: SettingsBranchType[] = [
  // 필터
  {
    title: "过滤器",
    expl: "选择您想查看的通知和不想查看的通知。",
    path: "notifications/filters",
    icon: "",
  },
  // 환경 설정
  {
    title: "设置",
    expl: "选择按通知类型进行的设置。",
    path: "notifications/preferences",
    icon: "",
  },
];

// 접근성, 표시, 언어
const AccessibilityAndDisplayAndLanguages: SettingsBranchType[] = [
  // 접근성
  {
    title: "辅助功能",
    expl: "管理PlayGround的用户界面，例如颜色对比和动作限制。这些设置会应用到此浏览器中的所有PlayGround账户。",
    path: "accessibility",
    icon: "eyeoff",
  },
  // 표시
  {
    title: "显示",
    expl: "管理字体大小、颜色和背景等设置。这些设置会应用到此浏览器中的所有PlayGround账户。",
    path: "display",
    icon: "pen",
  },
  // 언어
  {
    title: "语言",
    expl: "管理用于定制用户环境的语言设置。",
    path: "languages",
    icon: "map",
  },
  // 데이터 사용량
  {
    title: "数据使用",
    expl: "PlayGround限制此设备上使用的网络数据量。",
    path: "data",
    icon: "barChart",
  },
  // 키보드 단축키
  {
    title: "键盘快捷键",
    path: "/i/keyboard_shortcuts",
    icon: "shortcut",
  },
];

export {
  accountBranchList,
  securityAndAccountAccessBranchList,
  privacyAndSafetyBranchList,
  notificationBranchList,
  AccessibilityAndDisplayAndLanguages,
};

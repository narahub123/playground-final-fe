import { SettingsBranchType } from "@features/settings-setting/types/data";

// 계정
const accountBranchList: SettingsBranchType[] = [
  // 계정 정보
  {
    title: "계정 정보",
    expl: "휴대폰 번호와 이메일 주소와 같은 계정 정보를 조회하세요.",
    path: "account_data",
    icon: "user",
  },
  // 비밀번호 변경
  {
    title: "비밀번호 변경",
    expl: "언제든지 비밀번호를 변경하세요.",
    path: "password",
    icon: "key",
  },
  // 데이터 기록 다운로드
  {
    title: "데이터 기록 다운로드",
    expl: "계정에 저장된 정보의 유형에 대한 인사이트를 얻으세요.",
    path: "download_data",
    icon: "download",
  },
  // 계정 비활성화
  {
    title: "계정 비활성화",
    expl: "계정을 비활성화하는 법을 알아보세요.",
    path: "inactivate",
    icon: "crackedHeart",
  },
];

// 보안 및 계정 접근 권한
const securityAndAccountAccessBranchList: SettingsBranchType[] = [
  // 보안
  {
    title: "보안",
    path: "security",
    expl: "계정의 보안을 관리합니다.",
    icon: "lock",
  },
  // 앱 및 세션
  {
    title: "앱 및 세션",
    path: "apps_and_sessions",
    expl: "계정과 계정에 연결된 앱에 로그인한 시점에 관한 정보를 봅니다.",
    icon: "apps",
  },
  // 연결된 계정
  {
    title: "연결된 계정",
    path: "connected_accounts",
    expl: "PlayGround에 로그인하기 위해 연결된 Google 또는 Naver 또는 Kakao 계정을 관리합니다.",
    icon: "twoWay",
  },
  // 위임
  {
    title: "위임",
    path: "delegate",
    expl: "공유 계정을 관리합니다.",
    icon: "delegate",
  },
];

// 개인정보 및 안전
const privacyAndSafetyBranchList: SettingsBranchType[] = [
  {
    title: "오디언스, 미디어 및 태그하기",
    expl: "X에서 다른 사람들에게 공개하는 정보를 관리합니다.",
    path: "audience_and_tagging",
  },
  {
    title: "내 게시물",
    expl: "게시물과 관련된 정보를 관리합니다.",
    path: "my_tweets",
  },
  {
    title: "표시되는 콘텐츠",
    expl: "토픽과 관심사 등 사용자의 선호도를 바탕으로 PlayGround에 표시되는 정보를 결정합니다.",
    path: "content_you_see",
  },
  {
    title: "뮤트 및 차단",
    expl: "내가 뮤트했거나 차단한 계정, 단어 및 알림을 관리합니다.",
    path: "mute_and_block",
  },
  {
    title: "메시지",
    expl: "나에게 직접 메시지를 보낼 수 있는 대상을 관리합니다.",
    path: "messages",
  },
  {
    title: "계정찾기 및 연락처",
    expl: "계정찾기 설정을 제어하고 가져온 연락처를 관리합니다.",
    path: "contacts",
  },
  {
    title: "광고 환경 설정",
    expl: "PlayGround에서 광고 설정을 관리합니다.",
    path: "ads_preferences",
  },
  {
    title: "위치 정보",
    expl: "PlayGround에서 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다.",
    path: "location_information",
  },
];

// 알림
const notificationBranchList: SettingsBranchType[] = [
  // 필터
  {
    title: "필터",
    expl: "확인하고자 하는 알림과 확인하고 싶지 않은 알림을 선택하세요.",
    path: "notifications/filters",
    icon: "",
  },
  // 환경 설정
  {
    title: "환경설정",
    expl: "알림 유형별로 환경설정을 선택하세요",
    path: "notifications/preferences",
    icon: "",
  },
];

// 접근성, 표시, 언어
const AccessibilityAndDisplayAndLanguages: SettingsBranchType[] = [
  // 접근성
  {
    title: "접근성",
    expl: "색 대비와 동작 제한 등 PlayGround의 사용자 환경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PlayGround 계정에 적용됩니다.",
    path: "accessibility",
    icon: "eyeoff",
  },
  // 표시
  {
    title: "표시",
    expl: "글꼴 크기, 색상 및 배경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PlayGround 계정에 적용됩니다.",
    path: "display",
    icon: "pen",
  },
  // 언어
  {
    title: "언어",
    expl: "사용자 환경을 맞춤 설정할 때 사용되는 언어를 관리합니다.",
    path: "languages",
    icon: "map",
  },
  // 데이터 사용량
  {
    title: "데이터 사용량 ",
    expl: "PlayGround는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다.",
    path: "data",
    icon: "barChart",
  },
  // 키보드 단축키
  {
    title: "키보드 단축키",
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

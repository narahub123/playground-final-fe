// 설정 타입
type SettingsType = {
  bgTheme: string;
  language: string;
  colorTheme: ColorThemeType;
  fontSize: FontSizeType;
  isVisible: boolean;
  allowMessages: AllowMessageType;
  hideMessages: boolean;
  showRead: boolean;
  findByEmail: boolean;
  findByPhone: boolean;
  allowBehavioralAds: boolean;
  allowLocationAds: boolean;
  qualityFilter: boolean;
  colorContrast: boolean;
  reduceMotion: boolean;
  addImgExpl: boolean; // 이미지 설명 추가 알림
  dataSaver: boolean;
  autoplay: AutoplayType;
  isPrivate: boolean;
  protectVideo: boolean;
  tagSensitiveMedia: boolean; // 포스트 할 때 민감한 미디어 표시하기
  displaySensitiveMedia: boolean; // 피드에 민감한 미디어 표시하기
  addLocationInfo: boolean;
  notifications: NotificationsType;
  protectRenewPassword: boolean; // 비밀번호 재설정 보호
  twoFactorAuthentication: TwoFactorAuthentication; // 2단계 인증
  hideLabel: boolean; // 인증 라벨 숨기기
  connectedApps: string[]; // 연결된 앱
  sessions: string[];
  loginHistory: string[];
  devices: string[];
  connectedAccounts: string[]; // 연결된 계정
  canBeInvited: boolean;
  delegate: {
    groups: string[];
    members: string[];
  };
  tagging: {
    allow: boolean;
    whom?: TaggingWhomType;
  };
  topics: string[];
  mutedKeywords: string[];
  mute: MuteType;
  contacts: string[];
  interests: string[];
  audiences: string[];
  locations: string[];
};

type MuteType = {
  homeFeed: boolean;
  notification: boolean;
  target: MuteTargetType;
  duration: MuteDurationType;
};

type MuteDurationType = "forever" | "24h" | "7d" | "30d";

type MuteTargetType = "all" | "notFollowing";

type TaggingWhomType = "all" | "followers";

type TwoFactorAuthentication = "sms" | "app" | "key" | "";

type NotificationsType = {
  mutes: MutesType;
};

type MutesType = {
  notFollowing: boolean;
  notFollower: boolean;
  newAccount: boolean;
  defaultProfile: boolean;
  emailAuthenticated: boolean;
  phoneAuthenticated: boolean;
};

type AutoplayType = "off" | "on";
// 배경 설정 키
type ThemeKey = "light" | "dark";

// 배경 설정 색상 타입
type ThemeColorType = {
  colorPrimary: string;
  colorBackground: string;
  outlineBasic: string;
  borderModal: string;
  borderList: string;
  hoverIcon: string;
  outlineImage: string;
};

// 색상 설정 색상 타입
type ColorThemeType =
  | "cornflowerblue"
  | "red"
  | "green"
  | "yellow"
  | "purple"
  | "black";

type FontSizeType = "xs" | "s" | "b" | "l" | "xl";

type AllowMessageType = "all" | "authenticated" | "none";

export type {
  SettingsType,
  ColorThemeType,
  ThemeKey,
  ThemeColorType,
  FontSizeType,
  AllowMessageType,
  AutoplayType,
  NotificationsType,
  MutesType,
  TwoFactorAuthentication,
  TaggingWhomType,
  MuteType,
  MuteTargetType,
  MuteDurationType,
};

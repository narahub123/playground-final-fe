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
};

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
};

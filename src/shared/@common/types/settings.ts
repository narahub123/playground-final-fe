// 설정 타입
type SettingsType = {
  // 계정
  isVisible: boolean; // 비공개 게시물

  // 보안과 계정 접근 권한
  // 보안
  twoFactorAuthentication: TwoFactorAuthentication; // 2단계 인증
  hideLabel: boolean; // 인증 라벨 숨기기
  protectRenewPassword: boolean; // 비밀번호 재설정 보호
  // 앱 및 세션
  connectedApps: string[]; // 연결된 앱
  sessions: string[];
  loginHistory: string[];
  devices: string[];
  // 연결된 계정
  connectedAccounts: string[]; // 연결된 계정
  // 위임
  canBeInvited: boolean;
  delegate: {
    groups: string[];
    members: string[];
  };

  // 개인 정보 및 안전
  // 오디언스, 미디어 및 태그
  isPrivate: boolean; // 비공개 게시물
  protectVideo: boolean; // 동영상 보호하기
  // 사진 태그하기
  tagging: {
    allow: boolean;
    whom?: TaggingWhomType;
  };
  // 내 게시물
  tagSensitiveMedia: boolean; // 포스트 할 때 민감한 미디어 표시하기
  addLocationInfo: boolean; // 게시물에 위치 정보 넣기
  // 표시되는 콘텐츠
  displaySensitiveMedia: boolean; // 피드에 민감한 미디어 표시하기
  topics: string[]; // 토픽
  interests: string[]; // 관심사
  // 뮤트 및 차단
  mutedKeywords: string[];
  mute: MuteType;
  // 메시지
  allowMessages: AllowMessageType; // 메시지 허용
  filterMessages: boolean; // 저질스러운 메시지 필터링
  showRead: boolean; // 읽음 표시
  // 계정 찾기 및 연락처
  findByEmail: boolean; // 이메일로 나를 찾을 수 있게
  findByPhone: boolean; // 휴대폰으로 나를 찾을 수 있게
  contacts: string[]; // 모바일 디바이스에서 가져온 연락처 목록
  // 광고 환경 설정
  allowBehavioralAds: boolean; // 맞춤 광고
  audiences: string[]; // 광고주
  // 위치 정보
  allowLocationAds: boolean; // 장소 기반 설정
  locations: string[];

  // 알림
  notifications: NotificationsType;

  // 접근성, 표시, 언어
  // 접근성
  colorContrast: boolean;
  reduceMotion: boolean;
  addImgExpl: boolean; // 이미지 설명 추가 알림
  // 표시
  fontSize: FontSizeType; // 글꼴 크기
  colorTheme: ColorThemeType; // 색상 모드
  bgTheme: string; // 배경 모드
  // 언어
  // 데이터 사용량
  dataSaver: boolean;
  autoplay: AutoplayType;
};

// 알림
type NotificationsType = {
  qualityFilter: boolean; // 퀄리티 필터
  mutesNotifications: MuteNotificationsType; // 뮤트 알림
  pushNotification: boolean; // 푸시 알림 승인 여부
  pushNotifications: PushNotificationsType; // 푸시 알림
  emailNotification: boolean; // 이메일 알림 승인 여부
  emailNotifications: EmailNotificationsType; // 이메일 알림
};
// 뮤트 알림
type MuteNotificationsType = {
  notFollowing: boolean;
  notFollower: boolean;
  newAccount: boolean;
  defaultProfile: boolean;
  emailAuthenticated: boolean;
  phoneAuthenticated: boolean;
};
// 푸시 알림 승인 여부
type PushNotificationsCustomType = "custom" | "all" | "off";
// 푸시 알림
type PushNotificationsType = {
  posts: boolean;
  replies: PushNotificationsCustomType;
  reposts: PushNotificationsCustomType;
  likes: PushNotificationsCustomType;
  photoTags: boolean;
  newFollower: boolean;
  messages: boolean;
  replyMessage: ReplyMessageType;
  joinPplInContacts: boolean;
  topics: boolean;
  newsAndSports: boolean;
  recommend: boolean;
  moments: boolean;
  lives: boolean;
  otherLives: boolean;
  alertAndAgent: boolean;
  professional: boolean;
};
// 이메일 알림
type EmailNotificationsType = {
  newNotification: boolean;
  messages: boolean;
  postsSentByEmail: boolean;
  popularPosts: PopularPostsType;
  myStatics: boolean;
  PGUpdates: boolean;
  PGTips: boolean;
  PGLatest: boolean;
  PGPartners: boolean;
  PGSurvey: boolean;
  PGRecommend: boolean;
  PGRecentFollowings: boolean;
  PGBusiness: boolean;
};

type ReplyMessageType = "mine" | "all" | "off";

// 뮤트 타입
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

type PopularPostsType = "daily" | "weekly" | "frequently" | "off";

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
  | "orange";

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
  MuteNotificationsType,
  TwoFactorAuthentication,
  TaggingWhomType,
  MuteType,
  MuteTargetType,
  MuteDurationType,
  PopularPostsType,
  PushNotificationsCustomType,
  ReplyMessageType,
};

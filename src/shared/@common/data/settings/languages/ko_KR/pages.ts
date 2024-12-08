import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { SettingsType, UserType } from "@shared/@common/types";
import { countryNamesKor } from "@shared/@common/data/countries";
import {
  calculateAge,
  getBirth,
  getGender,
  getLangName,
} from "@shared/@common/utils";

const pages = {
  settingsLandingPage: {
    pageTitle: "설정",
    placeholder: "설정 검색하기",
    branchList: [
      // 계정
      {
        title: "계정",
        path: "account",
      },
      // 보안 및 계정 접근 권한
      {
        title: "보안 및 계정 접근 권한",
        path: "security_and_account_access",
      },
      // 개인 정보 및 안전
      {
        title: "개인정보 및 안전",
        path: "privacy_and_safety",
      },
      // 알림
      {
        title: "알림",
        path: "notifications",
      },
      // 접근성, 표시, 언어
      {
        title: "접근성, 표시, 언어",
        path: "accessibility_display_and_languages",
      },
      // 수익 창출
      {
        title: "수익 창출",
        path: "monetization",
      },
      // 추가 리소스
      {
        title: "추가 리소스",
        path: "about",
      },
    ],
  },
  AccountPage: {
    pageTitle: "계정",
    description:
      "계정 정보를 확인하고, 데이터 기록을 다운로드하거나, 계정 비활성화 옵션에 대해 자세히 알아보세요.",
    branchList: [
      // 계정 정보
      {
        title: "계정 정보",
        expl: "휴대폰 번호와 이메일 주소와 같은 계정 정보를 조회하세요.",
        path: "/settings/your_data/account",
        icon: "user",
      },
      // 비밀번호 변경
      {
        title: "비밀번호 변경",
        expl: "언제든지 비밀번호를 변경하세요.",
        path: "/settings/password",
        icon: "key",
      },
      // 데이터 기록 다운로드
      {
        title: "데이터 기록 다운로드",
        expl: "계정에 저장된 정보의 유형에 대한 인사이트를 얻으세요.",
        path: "/settings/download_data",
        icon: "download",
      },
      // 계정 비활성화
      {
        title: "계정 비활성화",
        expl: "계정을 비활성화하는 법을 알아보세요.",
        path: "/settings/inactivate",
        icon: "crackedHeart",
      },
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "보안과 계정 접근 권한",
    description:
      "계정의 보안을 관리하고, 계정에 연결된 앱을 포함해 계정 사용을 추적합니다.",
    branchList: [
      // 보안
      {
        title: "보안",
        expl: "계정의 보안을 관리합니다.",
        path: "/settings/security",
        icon: "lock",
      },
      // 앱 및 세션
      {
        title: "앱 및 세션",
        expl: "계정과 계정에 연결된 앱에 로그인한 시점에 관한 정보를 봅니다.",
        path: "/settings/apps_and_sessions",
        icon: "apps",
      },
      // 연결된 계정
      {
        title: "연결된 계정",
        expl: "PlayGround에 로그인하기 위해 연결된 Google 또는 Naver 또는 Kakao 계정을 관리합니다.",
        path: "/settings/connected_accounts",
        icon: "twoWay",
      },
      // 위임
      {
        title: "위임",
        expl: "공유 계정을 관리합니다.",
        path: "/settings/delegate",
        icon: "delegate",
      },
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "개인 정보 및 안전",
    description: "PlayGround에서 표시되고 공유되는 정보를 관리합니다.",
    branchList: [
      {
        title: "오디언스, 미디어 및 태그하기",
        expl: "X에서 다른 사람들에게 공개하는 정보를 관리합니다.",
        path: "/settings/audience_and_tagging",
        icon: "users",
      },
      {
        title: "내 게시물",
        expl: "게시물과 관련된 정보를 관리합니다.",
        path: "/settings/my_tweets",
        icon: "penLine",
      },
      {
        title: "표시되는 콘텐츠",
        expl: "토픽과 관심사 등 사용자의 선호도를 바탕으로 PlayGround에 표시되는 정보를 결정합니다.",
        path: "/settings/content_you_see",
        icon: "content",
      },
      {
        title: "뮤트 및 차단",
        expl: "내가 뮤트했거나 차단한 계정, 단어 및 알림을 관리합니다.",
        path: "/settings/mute_and_block",
        icon: "mute",
      },
      {
        title: "메시지",
        expl: "나에게 직접 메시지를 보낼 수 있는 대상을 관리합니다.",
        path: "/settings/messages",
        icon: "message",
      },
      {
        title: "계정찾기 및 연락처",
        expl: "계정찾기 설정을 제어하고 가져온 연락처를 관리합니다.",
        path: "/settings/contacts",
        icon: "contact",
      },
      {
        title: "광고 환경 설정",
        expl: "PlayGround에서 광고 설정을 관리합니다.",
        path: "/settings/ads_preferences",
        icon: "ads",
      },
      {
        title: "위치 정보",
        expl: "PlayGround에서 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다.",
        path: "/settings/location_information",
        icon: "pin",
      },
    ],
  },
  NotificationsPage: {
    pageTitle: "알림",
    description: "활동, 관심사 및 추천에 관해 받는 알림의 종류를 선택합니다.",
    branchList: [
      // 필터
      {
        title: "필터",
        expl: "확인하고자 하는 알림과 확인하고 싶지 않은 알림을 선택하세요.",
        path: "/settings/notifications/filters",
        icon: "filter",
      },
      // 환경 설정
      {
        title: "환경설정",
        expl: "알림 유형별로 환경설정을 선택하세요",
        path: "/settings/notifications/preferences",
        icon: "preferences",
      },
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "접근성, 표시, 언어",
    description: "PlayGround의 콘텐츠 표시 방식을 관리합니다.",
    branchList: [
      // 접근성
      {
        title: "접근성",
        expl: "색 대비와 동작 제한 등 PlayGround의 사용자 환경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PlayGround 계정에 적용됩니다.",
        path: "/settings/accessibility",
        icon: "eyeoff",
      },
      // 표시
      {
        title: "표시",
        expl: "글꼴 크기, 색상 및 배경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PlayGround 계정에 적용됩니다.",
        path: "/settings/display",
        icon: "pen",
      },
      // 언어
      {
        title: "언어",
        expl: "사용자 환경을 맞춤 설정할 때 사용되는 언어를 관리합니다.",
        path: "/settings/languages",
        icon: "map",
      },
      // 데이터 사용량
      {
        title: "데이터 사용량 ",
        expl: "PlayGround는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다.",
        path: "/settings/data",
        icon: "barChart",
      },
      // 키보드 단축키
      {
        title: "키보드 단축키",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },

  AppsAndSessionsPage: {
    pageTitle: "앱 및 세션",
    description:
      "계정과 계정에 연결한 앱에 로그인한 시점에 관한 정보를 봅니다.",
    branchList: [
      // 연결된 앱
      {
        title: "연결된 앱",
        path: "/settings/connected_apps",
      },
      // 세션
      {
        title: "세션",
        path: "/settings/sessions",
      },
      // 계정 엑세스 기록
      {
        title: "계정 엑세스 기록",
        path: "/settings/login_history",
      },
      // 로그인된 디바이스 및 앱
      {
        title: "로그인된 디바이스 및 앱",
        path: "/settings/devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "뮤트 및 차단",
    description: "내가 뮤트했거나 차단한 계정, 단어 및 알림을 관리합니다.",
    branchList: [
      {
        title: "차단한 계정",
        path: "/settings/blocked/all",
      },
      {
        title: "뮤트한 계정",
        path: "/settings/muted/all",
      },
      {
        title: "뮤트한 단어",
        path: "/settings/muted_keywords",
      },
      {
        title: "뮤트 상태의 알림",
        path: "/settings/notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "환경설정",
    description: "알림 유형별로 환경설정을 선택하세요. ",
    branchList: [
      // 푸시 알림
      {
        title: "푸시 알림",
        path: "/settings/push_notifications",
      },
      // 이메일 알림
      {
        title: "이메일 알림",
        path: "/settings/email_notifications",
      },
    ],
  },
  SecurityPage: {
    pageTitle: "보안",
    description: "계정의 보안을 관리합니다.",
    list: [
      {
        title: "2단계 인증",
        type: "card",
        comp: {
          title: "2단계 인증",
          path: "/settings/account/login_verification",
        },
        description:
          "PlayGround 비밀번호 외에 두 번째 인증 방법을 요구하도록 하여 무단 액세스로부터 계정을 보호하세요. 문자 메시지, 인증 앱 또는 보안 키 중에서 선택할 수 있습니다.",
      },
      {
        title: "ID 인증",
        type: "card",
        comp: {
          title: "ID 인증",
          path: "/settings/account/id_verification",
        },
        description:
          "계정의 진위 여부를 확인하기 위해 승인된 형식의 신분증을 업로드해 주세요. 보내주신 정보는 신원 확인을 위해서만 사용되며 안전하게 보안 처리됩니다. ",
      },
      {
        title: "비밀번호 재설정",
        type: "checkbox",
        comp: {
          text: "비밀번호 재설정 보호",
          reducer: setBackgroundTheme,
          initialValue: false,
        },
        description:
          "추가적인 보호 조치로서, PlayGround 비밀번호를 재설정하려면 이메일 주소 또는 휴대폰 번호를 확인해야 합니다",
      },
    ],
  },
  AccountInfoPage: {
    pageTitle: "계정 정보",
    branchList: (user: UserType & SettingsType) => [
      // 사용자 아이디
      {
        title: "사용자 아이디",
        path: "/settings/screen_name",
        expl: `@${user.userId}`,
      },
      // 휴대폰
      {
        title: "휴대폰",
        path: "/settings/phone",
      },
      // 이메일
      {
        title: "이메일",
        path: "/settings/email",
        expl: user.email,
      },
      // 인증 여부
      {
        title: "인증여부",
        path: "",
        expl: user.isAuthenticated ? "인증됨" : "인증 안됨",
      },
      // 비공개 게시물
      {
        title: "비공개 게시물",
        path: "/settings/audience_and_tagging",
        expl: user.isVisible ? "네" : "아니요",
      },
      // 계정 생성
      {
        title: "계정 생성",
        path: "",
        expl: user.regDate.toLocaleString(),
      },
      // 국가
      {
        title: "국가",
        path: "/settings/country",
        expl: countryNamesKor[
          user.language
            .split("-")[1]
            .toLowerCase() as keyof typeof countryNamesKor
        ],
      },
      // 언어
      {
        title: "언어",
        path: "/settings/language",
        expl: getLangName(user.language)?.text,
      },
      // 성별
      {
        title: "성별",
        path: "/settings/gender",
        expl: getGender(user.gender),
      },
      // 생년월일
      {
        title: "생년월일",
        path: "",
        expl: getBirth(user.birth),
      },
      // 연령
      {
        title: "연령",
        path: "age",
        expl: calculateAge(user.birth),
      },
      // 자동화
      {
        title: "자동화",
        path: "automation",
        expl: "자동화 계정을 관리합니다.",
      },
    ],
  },
};

export default pages;

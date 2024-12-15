import {
  setAddImgExpl,
  setAddLocationInfo,
  setAllowBehavioralAds,
  setAllowLocationAds,
  setAllowMessages,
  setAutoplay,
  setColorContrast,
  setDataSaver,
  setDisplaySensitiveMedia,
  setFindByEmail,
  setFindByPhone,
  setHideMessages,
  setIsPrivate,
  setProtectVideo,
  setQualityFilter,
  setReduceMotion,
  setShowRead,
  setTagSensitiveMedia,
  setMuteNotFollowing,
  setMuteNotFollower,
  setMuteNewAccount,
  setMuteDefaultProfile,
  setMuteEmailAuthenticated,
  setMutePhoneAuthenticated,
  setProtectRenewPassword,
  setTwoFactorAuthentication,
  setHideLabel,
  setAllowTaggingWhom,
} from "@shared/@common/model/slices/settingsSlice";
import { SettingsType, UserType } from "@shared/@common/types";
import { countryNamesKor } from "@shared/@common/data/countries";
import {
  calculateAge,
  convertBirthToLocalString,
  getLangName,
  translateGender,
} from "@shared/@common/utils";
import { HyperLink } from "@shared/@common/ui/components";
import {
  getAddImgExpl,
  getAddLocationInfo,
  getAllowBehavioralAds,
  getAllowLocationAds,
  getAllowMessages,
  getAutoplay,
  getColorContrast,
  getDataSaver,
  getDisplaySensitiveMedia,
  getFindByEmail,
  getFindByPhone,
  getHideMessages,
  getIsPrivate,
  getProtectVideo,
  getQualityFilter,
  getReduceMotion,
  getShowRead,
  getTagSensitiveMedia,
  getMuteNotFollowing,
  getMuteNotFollower,
  getMuteNewAccount,
  getMuteDefaultProfile,
  getMuteEmailAuthenticated,
  getMutePhoneAuthenticated,
  getProtectRenewPassword,
  getTwoFactorAuthentication,
  getHideLabel,
  getAllowTaggingWhom,
} from "@shared/@common/model/selectors";
import regExp from "@shared/@common/data/regExp";

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
        path: "/settings/deactivate",
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
        expl: "PG에 로그인하기 위해 연결된 Google 또는 Naver 또는 Kakao 계정을 관리합니다.",
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
    description: "PG에서 표시되고 공유되는 정보를 관리합니다.",
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
        path: "/settings/your_posts",
        icon: "penLine",
      },
      {
        title: "표시되는 콘텐츠",
        expl: "토픽과 관심사 등 사용자의 선호도를 바탕으로 PG에 표시되는 정보를 결정합니다.",
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
        expl: "PG에서 광고 설정을 관리합니다.",
        path: "/settings/ads_preferences",
        icon: "ads",
      },
      {
        title: "위치 정보",
        expl: "PG에서 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다.",
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
    description: "PG의 콘텐츠 표시 방식을 관리합니다.",
    branchList: [
      // 접근성
      {
        title: "접근성",
        expl: "색 대비와 동작 제한 등 PG의 사용자 환경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PG 계정에 적용됩니다.",
        path: "/settings/accessibility",
        icon: "eyeoff",
      },
      // 표시
      {
        title: "표시",
        expl: "글꼴 크기, 색상 및 배경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PG 계정에 적용됩니다.",
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
        expl: "PG는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다.",
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
          "PG 비밀번호 외에 두 번째 인증 방법을 요구하도록 하여 무단 액세스로부터 계정을 보호하세요. 문자 메시지, 인증 앱 또는 보안 키 중에서 선택할 수 있습니다.",
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
        selector: getProtectRenewPassword,
        comp: {
          text: "비밀번호 재설정 보호",
          reducer: setProtectRenewPassword,
        },
        description:
          "추가적인 보호 조치로서, PG 비밀번호를 재설정하려면 이메일 주소 또는 휴대폰 번호를 확인해야 합니다",
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
        path: "/settings/languages",
        expl: getLangName(user.language)?.text,
      },
      // 성별
      {
        title: "성별",
        path: "/settings/gender",
        expl: translateGender(user.gender),
      },
      // 생년월일
      {
        title: "생년월일",
        path: "",
        expl: convertBirthToLocalString(user.birth),
      },
      // 연령
      {
        title: "연령",
        path: "/settings/your_data/age",
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
  DeactivatePage: {
    pageTitle: "계정 비활성화",
    section1: {
      title: "계정이 비활성화됩니다.",
      description:
        "PG 계정 비활성화 과정을 시작합니다. 내 표시 이름, @사용자 아이디, 공개 프로필이 PG.com, iOS용 PG, Android용 PG에 더 이상 표시되지 않습니다.",
    },
    section2: {
      title: "그 밖에 내가 알아야 할 내용",
      list: [
        "실수로 또는 잘못하여 PG 계정을 비활성화한 후에도 30일 이내에 복구할 수 있습니다.",
        "일부 계정 정보는 Google 또는 Bing과 같은 검색 엔진에서 아직 접근 가능할 수도 있습니다.",
        <>
          @사용자 아이디를 변경하기 위해 계정을 비활성화할 필요는 없습니다.{" "}
          <HyperLink text="설정" path="/settings/password" out={false} />
          에서 아이디를 수정하세요.
        </>,
        <>
          현재 @사용자 아이디 또는 이메일 주소를 다른 PG 계정에서 사용하려면 이
          계정을 비활성화하기 전에 해당 항목을{" "}
          <HyperLink
            text="변경"
            path="/settings/your_data/account"
            out={false}
          />
          하시기 바랍니다.,
        </>,
        "내 PG 데이터를 다운로드하려면 계정을 비활성화하기 전에 요청 및 다운로드 프로세스를 모두 완료해야 합니다. 비활성화된 계정으로는 데이터 다운로드 링크를 보낼 수 없습니다.",
      ],
    },
    deactivate: {
      text: "비활성화",
    },
  },
  AudienceAndTaggingPage: {
    pageTitle: "오디언스, 미디어 및 태그하기",
    description: "PG에서 다른 사람들에게 공개하는 정보를 관리합니다.",
    list: [
      {
        title: "",
        type: "checkbox",
        selector: getIsPrivate,
        comp: {
          text: "내 게시물을 비공개로 설정",
          reducer: setIsPrivate,
        },
        description:
          "선택하면 나를 팔로우하는 사람들만 내 게시물 및 기타 계정 정보를 볼 수 있게 됩니다.",
      },
      {
        title: "",
        type: "checkbox",
        selector: getProtectVideo,
        comp: {
          text: "동영상 보호하기",
          reducer: setProtectVideo,
        },
        description:
          "이 설정을 선택하면 기본적으로 게시물의 동영상을 다운로드할 수 없게 됩니다. 이 설정은 앞으로 작성하는 게시물에 적용되며 소급 적용되지 않습니다. ",
      },
      {
        title: "",
        type: "card",
        comp: {
          title: "사진 태그하기",
          path: "/settings/tagging",
          expl: "누구나 나를 태그할 수 있도록 허용",
        },
        description: "",
      },
    ],
  },
  YourPostsPage: {
    pageTitle: "내 게시물",
    description: "게시물과 관련된 정보를 관리합니다.",
    list: [
      {
        type: "checkbox",
        selector: getTagSensitiveMedia,
        comp: {
          text: "게시하는 미디어를 민감한 내용이 포함될 수 있는 미디어로 표시하기",
          reducer: setTagSensitiveMedia,
        },
        description:
          "활성화하면 게시하는 사진과 동영상이 민감한 콘텐츠가 표시되기를 원치 않는 사람들에게 민감한 콘텐츠로 표시됩니다.",
      },
      {
        type: "card",
        comp: {
          title: "게시물에 위치 정보 넣기",
          path: "/settings/location",
        },
      },
    ],
  },
  ContentYouSeePage: {
    pageTitle: "표시되는 콘텐츠",
    description:
      "토픽과 관심사 등 사용자의 선호도를 바탕으로 PG에 표시되는 정보를 결정합니다",
    checkboxItem: {
      type: "checkbox",
      selector: getDisplaySensitiveMedia,
      comp: {
        text: "민감한 내용을 포함할 수 있는 미디어 표시",
        reducer: setDisplaySensitiveMedia,
      },
    },
    branchList: (user: UserType) => [
      {
        title: "토픽",
        path: `/${user.userId}/topics`,
      },
      {
        title: "관심사",
        path: `/settings/your_data/your_interests`,
      },
      {
        title: "탐색 설정",
        path: `/settings/explore`,
      },
      {
        title: "검색 설정",
        path: `/settings/search`,
      },
    ],
  },
  MessageSettingPage: {
    pageTitle: "쪽지",
    list: [
      {
        text: "다음 사용자의 쪽지 요청 허용",
        detail: "내가 팔로우하는 사용자가 보낸 쪽지는 항상 받을 수 있습니다. ",
        type: "checkboxlist",
        selector: getAllowMessages,
        comp: [
          {
            text: "받지 않음",
            reducer: setAllowMessages,
            value: "none",
          },
          {
            text: "인증 받은 사용자",
            reducer: setAllowMessages,
            value: "authenticated",
          },
          {
            text: "받지 않음",
            reducer: setAllowMessages,
            value: "all",
          },
        ],
      },
      {
        title: "",
        type: "checkbox",
        selector: getHideMessages,
        comp: {
          text: "저질스러운 쪽지 필터링하기",
          reducer: setHideMessages,
        },
        description:
          "스팸 또는 저질스러운 내용이 포함된 것으로 파악되는 쪽지 요청을 숨깁니다. 이러한 요청은 쪽지 요청함의 하단에 있는 별도의 받은 쪽지함으로 전송됩니다. 원하는 경우 여전히 확인할 수 있습니다.",
        top: true,
        disabled: true,
      },
      {
        title: "",
        type: "checkbox",
        selector: getShowRead,
        comp: {
          text: "읽음 표시 보기",
          reducer: setShowRead,
        },
        description:
          "쪽지를 주고 받는 사람들이 내가 메시지를 확인했을 때를 알 수 있도록 허용합니다. 읽음 표시는 쪽지 요청에 나타나지 않습니다.",
        top: true,
      },
    ],
  },
  ContactsPage: {
    pageTitle: "계정찾기 및 연락처",
    description: "계정찾기 설정을 제어하고 가져온 연락처를 관리합니다.",
    list: [
      {
        title: "검색 가능성",
        detail:
          "내 이메일 주소 또는 휴대폰 번호를 알고 있는 사람들이 PG에서 나를 찾고 연락할 수 있게 할지 여부를 결정합니다.",
        type: "checkbox",
        selector: getFindByEmail,
        comp: {
          text: "내 이메일 주소를 알고 있는 사람들이 PG에서 나를 찾을 수 있도록 허용",
          reducer: setFindByEmail,
        },
        description:
          "내 이메일 주소를 알고 있는 사람들이 PG에서 나를 찾고 연락할 수 있도록 합니다.",
      },
      {
        type: "checkbox",
        selector: getFindByPhone,
        comp: {
          text: "내 휴대폰 번호를 알고 있는 사람들이 PG에서 나를 찾을 수 있도록 허용",
          reducer: setFindByPhone,
        },
        description:
          "내 휴대폰 번호를 알고 있는 사람이 PG에서 나를 찾고 연락할 수 있도록 합니다.",
      },
      {
        title: "연락처",
        detail: "내모바일 디바이스에서 가져온 연락처를 관리합니다. ",
        type: "card",
        comp: {
          title: "연락처 관리",
          path: "/settings/contacts_dashboard",
        },
        top: true,
      },
    ],
  },
  AdsPreferencesPage: {
    pageTitle: "광고 환경설정",
    description: "PG에서 광고 설정을 관리합니다.",
    checkbox: {
      type: "checkbox",
      selector: getAllowBehavioralAds,
      comp: {
        text: "맞춤광고",
        reducer: setAllowBehavioralAds,
      },
      description:
        "PG에서 항상 내 PG 활동에 기반한 광고를 보게 됩니다. 이 설정이 활성화되어 있으면 PG에서 내 PG 활동과 파트너가 제공한 기타 온라인 활동 및 정보를 결합하여 PG 내외에서 PG 광고주의 광고를 맞춤 설정할 수 있습니다.",
    },
    branchList: [
      {
        title: "관심사",
        path: "/settings/your_data/interests",
      },
      {
        title: "내 광고주 목록",
        path: "/settings/your_data/audiences",
      },
    ],
  },
  LocationInfoPage: {
    pageTitle: "위치 정보",
    description:
      "PlayGroudn에서 사용자 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다.",
    checkbox: {
      type: "checkbox",
      selector: getAllowLocationAds,
      comp: {
        text: "내가 머물렀던 장소를 기반으로 맞춤 설정",
        reducer: setAllowLocationAds,
      },
      description:
        "PG는 항상 내게 맞춤 콘텐츠를 제공하기 위해 내가 가입한 위치나 현재 위치와 같은 정보를 사용합니다. 이 설정을 활성화하면 내가 방문한 장소를 통해 맞춤 콘텐츠를 제공할 수 있습니다.",
    },
    branchList: [
      {
        title: "내가 방문한 장소",
        path: "/settings/your_data/locations",
      },
      {
        title: "게시물에 위치 정보 넣기",
        path: "/settings/location",
      },
      {
        title: "탐색 설정",
        path: "/settings/location",
      },
    ],
  },
  NotificationFilterPage: {
    pageTitle: "필터",
    description: "확인하고자 하는 알림과 확인하고 싶지 않은 알림을 선택하세요.",
    list: [
      {
        type: "checkbox",
        selector: getQualityFilter,
        comp: {
          text: "퀄리티 필터",
          reducer: setQualityFilter,
        },
        description:
          "선택하면 중복 및 자동 게시물과 같은 콘텐츠가 필터링됩니다. 팔로우 중이거나 최근 대화한 계정의 알림에 적용되지 않습니다.",
      },
      {
        type: "card",
        comp: {
          title: "뮤트 상태의 알림",
          path: "/settings/notifications/advanced_filters",
        },
      },
    ],
  },
  AccessibilityPage: {
    pageTitle: "접근성",
    description:
      "색 대비와 동작 제한 등 PG의 사용자 환경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PG 계정에 적용됩니다.",
    list: [
      {
        title: "보기 지원",
        type: "checkbox",
        selector: getColorContrast,
        comp: {
          text: "색 대비 높이기",
          reducer: setColorContrast,
        },
        description: "텍스트와 배경색의 대비를 높여 가독성을 향상시킵니다.",
      },
      {
        title: "동작",
        type: "checkbox",
        selector: getReduceMotion,
        comp: {
          text: "동작 줄이기",
          reducer: setReduceMotion,
        },
        description: "생방송 참여수를 포함한 앱 내 애니메이션을 줄입니다.",
      },
      {
        type: "card",
        comp: {
          title: "자동 재생",
          expl: "셀룰러 데이터 또는 Wi-Fi 사용 시",
          path: "/settings/autoplay",
        },
      },
      {
        title: "미디어",
        type: "checkbox",
        selector: getAddImgExpl,
        comp: {
          text: "이미지 설명 알림을 받습니다.",
          reducer: setAddImgExpl,
        },
        description:
          "게시물을 전송하기 전에 이미지 설명을 추가하라는 알림을 받습니다.",
      },
    ],
  },
  LanguagesPage: {
    pageTitle: "언어",
    description: "사용자 환경을 맞춤 설정할 때 사용되는 언어를 관리합니다.",
    list: [
      {
        title: "표시 언어",
        detail:
          "PG 헤드라인, 버튼 및 기타 텍스트에 사용하는 기본 언어를 선택합니다.",
        type: "card",
        comp: {
          title: "표시 언어",
          expl: "한국어",
          path: "/settings/language",
        },
      },
      {
        title: "추가 언어 선택",
        detail: "PG에 표시하고 싶은 콘텐트의 추가 언어를 선택합니다.",
        type: "card",
        comp: {
          title: "추가 언어",
          path: "/i/flow/language_selector",
        },
      },
      {
        title: "알 수 있는 언어",
        detail:
          "팔로우하는 계정과 반응을 보낸 게시물 같이 사용자 활동을 토대로 PG가 추정한 언어를 관리합니다.",
        type: "card",
        comp: {
          title: "알 수 있는 언어",
          path: "/settings/your_twitter_data/language",
        },
      },
    ],
  },
  DataPage: {
    pageTitle: "데이터 사용량",
    description:
      "PG는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다.",
    list: [
      {
        type: "checkbox",
        selector: getDataSaver,
        comp: {
          text: "데이터 세이버",
          reducer: setDataSaver,
        },
        description:
          "이 항목을 선택하면 PG에서 네트워크 데이터를 덜 사용하게 됩니다.",
      },
      {
        type: "card",
        comp: {
          title: "자동 재생",
          expl: "셀룰러 데이터 또는 Wi-Fi 사용 시",
          path: "/settings/autoplay",
        },
      },
    ],
  },
  AutoplayPage: {
    pageTitle: "자동 재생",
    item: {
      text: "자동 재생",
      detail:
        "이 디바이스에서 동영상 및 GIF를 자동으로 재생할지 여부를 선택하세요.",
      type: "checkboxlist",
      selector: getAutoplay,
      comp: [
        {
          text: "셀룰러 데이터 또는 Wi-Fi 사용 시",
          reducer: setAutoplay,
          value: "on",
        },
        {
          text: "사용하지 않음",
          reducer: setAutoplay,
          value: "off",
        },
      ],
    },
  },
  LocationPage: {
    pageTitle: "게시물에 위치 정보 넣기",
    description: "활성화하면 게시물에 위치 정보를 첨부할 수 있습니다.",
    item: {
      type: "checkbox",
      selector: getAddLocationInfo,
      comp: {
        text: "게시물에 위치 정보 넣기",
        reducer: setAddLocationInfo,
      },
    },
    hyperlink: "게시물에 추가된 모든 위치 정보를 삭제합니다.",
  },
  NotificationAdvancedFilters: {
    pageTitle: "뮤트 상태의 알림",
    list: [
      {
        title: "다음 계정의 알림 뮤트하기:",
        type: "checkbox",
        selector: getMuteNotFollowing,
        comp: {
          text: "내가 팔로하지 않는 계정",
          reducer: setMuteNotFollowing,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNotFollower,
        comp: {
          text: "나를 팔로하지 않는 계정",
          reducer: setMuteNotFollower,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNewAccount,
        comp: {
          text: "새 계정",
          reducer: setMuteNewAccount,
        },
      },
      {
        type: "checkbox",
        selector: getMuteDefaultProfile,
        comp: {
          text: "기본 프로필 이미지를 사용하는 계정",
          reducer: setMuteDefaultProfile,
        },
      },
      {
        type: "checkbox",
        selector: getMuteEmailAuthenticated,
        comp: {
          text: "이메일을 인증하지 않은 계정",
          reducer: setMuteEmailAuthenticated,
        },
      },
      {
        type: "checkbox",
        selector: getMutePhoneAuthenticated,
        comp: {
          text: "휴대폰 번호를 인증하지 않는 계정",
          reducer: setMutePhoneAuthenticated,
        },
        description:
          "이 필터는 내가 팔로우하는 사람에게서 받는 알림에는 영향을 주지 않습니다.",
      },
    ],
  },
  LoginVerficationPage: {
    pageTitle: "2단계 인증",
    list: [
      {
        title: "2단계 인증",
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "문자 메시지",
          reducer: setTwoFactorAuthentication,
          value: "sms",
        },
        description:
          "PG에 로그인할 때 입력할 인증 코드가 포함된 문자 메시지를 휴대폰으로 받습니다.",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "인증 앱",
          reducer: setTwoFactorAuthentication,
          value: "app",
        },
        description:
          "모바일 인증 앱을 사용하여 PG에 로그인할 때마다 입력할 인증 코드를 받으세요.",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "보안 키",
          reducer: setTwoFactorAuthentication,
          value: "key",
        },
        description:
          "PG에 로그인할 때 컴퓨터에 입력하거나 모바일 디바이스와 동기화되는 보안 키를 사용하세요. 지원되는 모바일 디바이스나 웹 브라우저를 사용해야 합니다.",
        top: true,
      },
    ],
  },
  IdVerficationPage: {
    pageTitle: "ID 인증",
    descriptioin:
      "신분증을 인증하면 계정을 사칭으로부터 보호하고 프로필에 ID 인증 라벨을 표시할 수 있습니다.",
    list: [
      {
        type: "checkbox",
        selector: getHideLabel,
        comp: {
          text: "ID 인증 라벨 숨기기",
          reducer: setHideLabel,
        },
        description:
          "사람들이 내 프로필 페이지에서 파란색 체크마크를 탭했을 때 ID 인증 라벨이 표시되지 않도록 숨깁니다.",
        disabled: true,
      },
      {
        type: "link",
        comp: {
          text: "고객 센터",
          path: "https://help.x.com/ko/rules-and-policies/verification-policy",
        },
      },
    ],
  },
  GenderPage: {
    pageTitle: "성별",
    description:
      "아직 성별을 지정하지 않은 경우에는 계정의 프로필과 활동을 바탕으로 성별이 추정됩니다. 이 정보는 공개적으로 표시되지 않습니다.",
    list: [
      {
        type: "checkbox",
        comp: {
          text: "여성",
          value: "f",
        },
      },
      {
        type: "checkbox",
        comp: {
          text: "남성",
          value: "m",
        },
      },
    ],
    item: {
      type: "checkbox",
      comp: {
        text: "성별을 추가하세요.",
        value: false,
      },
    },
    input: {
      fieldTitle: "성별",
    },
    button: {
      text: "저장",
    },
  },
  ScreenNamePage: {
    pageTitle: "사용자 이름 변경",
    input: {
      fieldTitle: "사용자 아이디",
      validation: regExp.userId.default,
    },
    title: "추천",
    button: {
      text: "저장",
    },
    validations: [
      {
        regExp: regExp.userId.countError,
        msg: "사용자 아이디는 4자 이상 15자 이하여야 합니다.",
      },
      {
        regExp: regExp.userId.typeError,
        msg: "사용자 아이디는 영문 대소문자와 숫자만 사용 가능합니다.",
      },
      {
        regExp: regExp.userId.numberError,
        msg: "사용자 아이디는 적어도 하나 이상의 영문 대소문자가 필요합니다.",
      },
    ],
  },
  PhonePage: {
    pageTitle: "휴대폰 변경",
    addPhone: "휴대폰 번호 추가",
  },
  EmailPage: {
    pageTitle: "이메일 변경",
    input: {
      fieldTitle: "현재 이메일",
    },
  },
  LanguagePage: {
    pageTitle: "표시 언어 변경",
    description:
      "이 계정에서 PG 헤드라인, 버튼 및 기타 텍스트에 사용할 기본 언어를 선택하세요. 타임라인에 표시되는 콘텐츠의 언어는 변경되지 않습니다.",
  },
  AgePage: {
    pageTitle: "연령",
    description: "트위터에서 추정한 내 연령대입니다.",
    info: "정보가 잘못되었나요? 외부에 정보를 공개하지 않으면서 프로필에 생일을 추가할 수 있습니다.",
  },
  PasswordPage: {
    pageTitle: "비밀번호 변경",
    fieldTitle1: "현재 비밀번호",
    hyperlink: "비밀번호를 잊으셨나요?",
    fieldTitle2: "새 비밀번호",
    fieldTitle3: "비밀번호 확인",
    validation: regExp.password.default,
    validations: [
      {
        regExp: regExp.password.countError,
        msg: "비밀번호는 8자 이상 20자 이상이어야 합니다.",
      },
      {
        regExp: regExp.password.typeError,
        msg: "비밀번호는 영문 대소문자, 특수문자, 숫자가 각각 하나 이상 존재해야 합니다.",
      },
    ],
    button: {
      text: "저장",
    },
  },
  DownloadDataPage: {
    pageTitle: "내 데이터 기록 파일을 다운로드하세요",
    description: "계정에 저장된 정보의 유형에 대한 인사이트를 얻으세요.",
    expl1:
      "내 계정 정보, 계정 기록, 앱 및 디바이스, 계정 활동, 관심사 및 광고 데이터 기록이 담긴 ZIP 파일을 요청하실 수 있습니다. 데이터 기록 파일을 다운로드할 준비가 완료되면 앱 내 알림이 표시됩니다.",
    expl2:
      "내 기록 파일이 준비되었습니다. 데스크톱 브라우저에서 다운로드하고 볼 수 있습니다. 이 데이터는 며칠 후에 만료되니 그 전에 다운로드하는 것을 잊지 마세요.",
    button: {
      text: "데이터 다운로드",
    },
  },
  ConnectedAppsPage: {
    pageTitle: "연결된 앱",
    description:
      "이것은 계정에 연결된 앱입니다. 이러한 앱이 액세스하는 정보를 표시하고 액세스를 차단할 수 있습니다.",
  },
  SessionsPage: {
    pageTitle: "세션",
    description:
      "세션은 내 PG 계정을 사용 중이거나 사용한 디바이스입니다. 이 세션들은 현재 내 계정으로 로그인되어 있습니다. 각 세션에서 로그아웃할 수 있습니다.",
    heading1: "현재 활성 세션",
    expl1:
      "이 디바이스에는 이 PG 계정으로 로그인되어 있습니다. 현재 이 디바이스를 사용 중입니다.",
    heading2: "기타 세션에서 로그아웃하기",
    expl2:
      "이 디바이스에는 이 계정으로 로그인되어 있으며 현재는 이 디바이스를 사용하고 있지 않습니다. ",
    expl3:
      "로그아웃하면 4개의 다른 활성 PG 세션이 종료됩니다. 현재의 활성 세션에는 영향을 미치지 않습니다. ",
    hyperlink: "기타 모든 세션에서 로그아웃",
  },
  LoginHistoryPage: {
    pageTitle: "계정 액세스 기록",
    description: (
      <>
        앱에서 의심스러운 활동이 발견된 경우{" "}
        <HyperLink text="연결된 앱" path="/settings/connected_app" />
        에서 액세스를 차단하세요. IP 기반 위치는 실제 위치와 다를 수 있습니다.
      </>
    ),
    heading1: "비밀번호를 확인하세요.",
    expl1: "비밀번호를 입력하여 계속하세요.",
    fieldTitle: "비밀번호",
    hyperlink: "비밀번호를 잊으셨나요?",
    button: {
      text: "확인",
    },
  },
  DevicesPage: {
    pageTitle: "로그인된 디바이스 및 앱",
    heading1: "휴대폰",
    expl1:
      "PG에서 내 사용자 환경을 맞춤 설정하기 위해 사용하는 브라우저, 디바이스, 정보입니다. 여기에는 내가 X에 로그인할 때 사용한 적 없는 디바이스와 브라우저가 포함되며, 내 PG 계정에 연결된 것과 같은 이메일 주소와 전화번호도 포함됩니다.",
  },
  ConnectedAccountsPage: {
    pageTitle: "연결된 계정",
    description:
      "PG 계정에 로그인하기 위해 연결한 소셜 계정입니다. 여기에서 액세스를 비활성화할 수 있습니다.",
  },
  DelegatePage: {
    pageTitle: "위임",
    description: "역할을 위이함 사람들과 계정을 공유합니다.",
    text: "다른 사용자가 자신의 계정으로 나를 초대할 수 있습니다.",
    expl: "이 설정을 켜면 다른 사람들이 자신의 계정을 공유하기 위해 나를 초대할 수 있습니다.",
    heading: "내 위임 계정",
    list: [
      {
        type: "card",
        comp: {
          title: "나에게 위임된 계정",
          path: "groups",
        },
      },
      {
        type: "card",
        comp: {
          title: "역할을 위임한 멤버",
          path: "members",
        },
      },
    ],
  },
  DelegateGroupsPage: {
    pageTitle: "나에게 위임된 계정",
    description:
      "이 커뮤니티의 멤버로서 쪽지를 보내고, 게시하고, 리스트를 만들고 볼 수 있습니다. 또한 관리자는 해당 계정에 참여자를 초대하거나 삭제할 수 있으며 게시 애널리틱스를 조회할 수도 있습니다.",
    empty: "나에게 위임된 계정이 없습니다",
  },
  DelegateMembersPage: {
    pageTitle: "역할을 위임한 멤버",
    description:
      "다른 사용자를 초대하여 내 계정을 대신해 계정 역할을 관리하도록 합니다. 멤버는 쪽지를 보내고, 게시하고, 리스트를 만들고 볼 수 있습니다.",
    hyperlink: "멤버 초대하기",
    empty: "아직 추가한 멤버가 없습니다.",
  },
  TaggingPage: {
    pageTitle: "사진 태그하기",
    text: "사진 태그하기",
    expl: "사람들이 나를 그들의 사진에 태그하도록 허용하고 태그될 때마다 알림을 받습니다.",
    item: {
      type: "checkboxlist",
      selector: getAllowTaggingWhom,
      comp: [
        {
          text: "누구나 나를 태그할 수 있도록 허용",
          reducer: setAllowTaggingWhom,
          value: "all",
        },
        {
          text: "내가 팔로우하는 사람만 나를 태그할 수 있도록 허용",
          reducer: setAllowTaggingWhom,
          value: "followers",
        },
      ],
    },
  },
  TopicsPage: {
    pageTitle: "토픽",
    tabList: (userId: string) => {
      return [
        {
          text: "팔로우함",
          path: `/${userId}/topics`,
          value: "",
        },
        {
          text: "관심 없음",
          path: `/${userId}/topics/not_interested`,
          value: "not",
        },
      ];
    },
  },
  BlockedAllPage: {
    pageTitle: "차단한 계정",
    tabList: [
      {
        text: "전체",
        path: "",
        value: "",
      },
      {
        text: "가져옴",
        path: "/settings/blocked/imported",
        value: "imported",
      },
    ],
    description:
      "사용자를 차단하면 해당 사용자는 나를 팔로우하거나 내게 쪽지를 보낼 수 없고, 해당 사용자의 알림이 표시되지 않습니다.",
  },
  MutedAllPage: {
    pageTitle: "뮤트한 계정",
    description:
      "뮤트한 모든 사용자가 나타납니다. 이 리스트에서 추가하거나 제거할 수 있습니다.",
  },
  MutedKeywordsPage: {
    pageTitle: "뮤트한 단어",
    empty: {
      heading: "뮤트할 단어 추가",
      expl: "단어를 뮤트하면 해당 단어를 포함한 게시물이 홈 타임라인에서 보이지 않으며, 관련 알림도 받지 않게 됩니다.",
    },
  },
  AddMutedKeywordsPage: {
    pageTitle: "뮤트할 단어 추가하기",
    expl: "한 번에 단어, 문구, @사용자 아이디, 해시태그 중 하나만 뮤트할 수 있습니다.",
    heading1: "다음에서 뮤트",
    item1: {
      type: "checkbox",
      comp: {
        text: "홈타임라인",
      },
    },
    item2: {
      type: "toggle",
      comp: {
        text: "알림",
      },
    },
    item3: {
      type: "checkboxlist",
      comp: [
        {
          text: "모든 사용자",
          value: "all",
        },
        {
          text: "내가 팔로우하지 않는 사람들",
          value: "notFollowing",
        },
      ],
    },
    heading2: "기간",
    item4: {
      type: "checkboxlist",
      comp: [
        {
          text: "해당 단어를 언뮤트할 때까지",
          value: "forever",
        },
        {
          text: "24시",
          value: "24h",
        },
        {
          text: "7일",
          value: "7d",
        },
        {
          text: "30일",
          value: "30d",
        },
      ],
    },
    button: {
      text: "저장",
    },
  },
  ContactsDashboardPage: {
    pageTitle: "연락처 관리",
    hyperlink1: "모든 연락처 삭제",
    expl: "모바일 디바이스에서 가져온 연락처입니다. 이 정보는 팔로우할 계정 추천 등 PG 환경을 맞춤 설정하는 데 사용됩니다. 이전에 업로드했던 연락처를 삭제하고 모든 디바이스에서 PG와의 동기화를 끌 수 있습니다. 이 작업은 시간이 조금 걸릴 수 있습니다.",
    heading: "비밀번호를 확인하세요.",
    inputFieldTitle: "비밀번호",
    hyperlink2: "비밀번호을 잊으셨나요?",
  },
  InterestsPage: {
    pageTitle: "관심사",
    description:
      "내 프로필, 활동 및 내가 팔로우하는 토픽을 기반으로 제공된 관심사입니다. 이 정보는 PG 전반에서 광고를 포함한 사용자 환경을 맞춤 설정하는 데 사용됩니다. 적절한 관심사가 아닐 경우 조정할 수 있습니다(변경 사항이 적용되기까지 잠시 시간이 걸릴 수 있음).",
  },
  AudiencesPage: {
    pageTitle: "내 광고주 목록",
  },
  LocationsPage: {
    pageTitle: "내가 방문한 장소",
    verification: {
      description: "비밀번호를 입력하여 계속하세요.",
      inputFieldTitle: "비밀번호",
      hyperlink: "비밀번호를 잊으셨나요?",
      button: {
        text: "확인",
      },
    },
    verified: {
      description:
        "PG에서 관련성이 더 큰 콘텐츠를 표시할 때 사용하는 위치입니다. '방문한 장소를 토대로 맞춤 설정'을 끄면 여기에 열거된 장소가 표시되지 않습니다.",
      empty: {
        heading: "이 설정은 꺼져 있습니다.",
        expl: (
          <>
            <HyperLink text="위치 설정" path="/settings/location_information" />
            에서 이 기능을 켜세요.
          </>
        ),
      },
    },
  },
};

export default pages;

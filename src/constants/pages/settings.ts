import { userData } from "@data/example";

const user = userData;

const settings = {
  landing: {
    pageName: "settings",
    title: "설정",
    search: { placeholder: "설정 검색하기" },
    settingsList: [
      { url: "account", name: "계정" },
      { url: "i/premium_sign_up?referring_page=settings", name: "Preminum" },
      { url: "security_and_account_access", name: "보안 및 게정 접근 권한" },
      { url: "privacy_and_safety", name: "개인 정보 및 보안" },
      { url: "notifications", name: "알림" },
      { url: "accessibility_display_and_languages", name: "접근성,표시,언어" },
      { url: "about", name: "추가 리소스" },
    ],
    moveForwardBtn: "forward",
  },
  // 계정
  account: {
    title: "계정",
    detail:
      "계정 정보를 확인하고, 데이터 기록을 다운로드하거나, 계정 비활성화 옵션에 대해 자세히 알아보세요.",
    settingsBranchList: [
      {
        url: "your_data/account",
        title: "계정 정보",
        detail: "휴대폰 번호와 이메일 주소와 같은 계정 정보를 조회하세요.",
        option: "account",
      },
      {
        url: "password",
        title: "비밀번호 변경",
        detail: "언제든지 비밀번호를 변경하세요.",
        option: "password",
      },
      {
        url: "download_data",
        title: "내 데이터 기록 파일을 다운로드하세요",
        detail: "계정에 저장된 정보와 유형에 대한 인사이트를 얻으세요.",
        option: "download",
      },
      {
        url: "deactivate",
        title: "계정 비활성화",
        detail: "계정을 비활성화하는 법을 알아보세요.",
        option: "deactivate",
      },
    ],
    // 계정 정보
    your_data: {
      pageName: "settings",
      title: "계정 정보",
      settingsList: [
        {
          path: `screen_name`,
          title: "사용자 아이디",
          detail: `${user.name}`,
        },
        {
          path: `phone`,
          title: "휴대폰",
          detail: `${user.phone}`,
        },
        {
          path: `email`,
          title: "이메일",
          detail: `${user.email}`,
        },
        {
          path: "",
          title: "인증됨",
          detail: `${user.isAuthorized ? "예" : "아니요"}`,
        },
        {
          path: "audience_and_tagging",
          title: "비공개 게시물",
          detail: `${user.isAuthorized ? "예" : "아니요"}`,
        },
        {
          path: "",
          title: "계정 생성",
          detail: `${user.regDate} 
          ${user.ip}(${user.location})`,
        },
        {
          path: "country",
          title: "국가",
          detail: `${user.location}`,
        },
        {
          path: "languages",
          title: "언어",
          detail: `${user.languages}`,
        },
        {
          path: "gender",
          title: "성별",
          detail: `${user.gender === "f" ? "여성" : "남성"}`,
        },
        {
          path: "",
          title: "생년월일",
          detail: `${user.birth.year}년${user.birth.month}월${user.birth.date}일`,
        },
        {
          path: "your_data/age",
          title: "연령",
          detail: `${user.birth.year}`,
        },
        {
          path: "automation",
          title: "자동화",
          detail: `자동화 계정을 관리합니다.`,
        },
      ],
    },
    // 비밀 번호 변경
    password: {
      title: "비밀번호 변경",
      curPassword: "현재 비밀번호",
      forgetPassword: "비밀번호를 잊으셨나요?",
      newPassword: "새 비밀번호",
      confirmPassword: "비밀번호 확인",
      explanation:
        "비밀번호를 변경하면 현재 사용 중인 세션을 제외한 모든 활성 X세션에서 로그아웃됩니다. 내 계정에 대한 액세스 권한이 있는 4 애플리케이션은(는) 영향을 받지 않습니다.",
      changeButton: "저장",
    },
    // 데이터 다운로드
    download_data: {
      title: "내 데이터 기록 파일을 다운로드하세요",
      detail: " 계정에 저장된 정보의 유형에 대한 인사이트를 얻으세요.",
      explanation:
        "내 계정 정보, 계정 기록, 앱 및 디바이스, 계정 활동, 관심사 및 광고 데이터 기록이 담긴 ZIP 파일을 요청하실 수 있습니다. 데이터 기록 파일을 다운로드할 준비가 완료되면 앱 내 알림이 표시됩니다",
      readyToDownload:
        "내 기록 파일이 준비되었습니다. 데스크톱 브라우저에서 다운로드하고 볼 수 있습니다. 이 데이터는 며칠 후에 만료되니 그 전에 다운로드하는 것을 잊지 마세요.",
      downloadButton: "데이터 다운로드",
    },
    // 계정 비활성화
    deactivate: {
      title: "계정 비활성화",
      heading1: "계정이 비활성화됩니다",
      description:
        "X 계정 비활성화 과정을 시작합니다. 내 표시 이름, @사용자 아이디, 공개 프로필이 X.com, iOS용 X, Android용 X에 더 이상 표시되지 않습니다.",
      heading2: "그 밖에 내가 알아야 할 내용",
      descriptionArr: [
        "실수로 또는 잘못하여 X 계정을 비활성화한 후에도 30일 이내에 복구할 수 있습니다.",
        "일부 계정 정보는 Google 또는 Bing과 같은 검색 엔진에서 아직 접근 가능할 수도 있습니다.",
        "@사용자 아이디를 변경하기 위해 계정을 비활성화할 필요는 없습니다. 설정에서 아이디를 수정하세요.",
        "현재 @사용자 아이디 또는 이메일 주소를 다른 X 계정에서 사용하려면 이 계정을 비활성화하기 전에 해당 항목을 변경하시기 바랍니다.",
        "내 X 데이터를 다운로드하려면 계정을 비활성화하기 전에 요청 및 다운로드 프로세스를 모두 완료해야 합니다. 비활성화된 계정으로는 데이터 다운로드 링크를 보낼 수 없습니다.",
      ],
      deactivateButton: "비활성화",
    },
  },

  // 보안 및 계정 접근 권한
  security: {
    title: "보안 및 계정 접근 권한",
    detail:
      "계정의 보안을 관리하고, 계정에 연결된 앱을 포함해 계정 사용을 추적합니다.",
    settingsBranchList: [
      {
        url: "security",
        title: "보안",
        detail: "계정의 보안을 관리합니다.",
        option: "security",
      },
      {
        url: "apps_and_sessions",
        title: "앱 및 세션",
        detail: "계정과 계정에 연결된 앱에 로그인한 시점에 대한 정보를 봅니다.",
        option: "app",
      },
      {
        url: "connected_accounts",
        title: "연결된 계정",
        detail:
          "PlayGround에 로그인하기 위해 연결된 Google 또는 Naver 계정 또는 카카오톡 계정을 관리합니다.",
        option: "connect",
      },
      {
        url: "delegate",
        title: "위임",
        detail: "공유 계정을 관리합니다.",
        option: "delegate",
      },
    ],
    // 보안
    security: {
      title: "보안",
      detail: "계정의 보안을 관리합니다.",
      heading1: "2단계 인증",
      path1: "account/login_verification",
      pathTitle1: "2단계 인증",
      desciption1:
        "X 비밀번호 외에 두 번째 인증 방법을 요구하도록 하여 무단 액세스로부터 계정을 보호하세요. 문자 메시지, 인증 앱 또는 보안 키 중에서 선택할 수 있습니다.",
      heading2: "ID 인증",
      path2: "account/id_verification",
      pathTitle2: "ID 인증",
      desciption2:
        "계정의 진위 여부를 확인하기 위해 승인된 형식의 신분증을 업로드해 주세요. 보내주신 정보는 신원 확인을 위해서만 사용되며 안전하게 보안 처리됩니다.",
      heading3: "추가 비밀번호 보호",
      desciption3:
        "추가적인 보호 조치로서, X 비밀번호를 재설정하려면 이메일 주소 또는 휴대폰 번호를 확인해야 합니다.",
      protectionForChangingPassword: false, // api로 받는 값
    },
    // 앱 및 세션
    appAndSession: {
      title: "앱 및 세션",
      detail: "계정과 게정에 연결된 앱에 로그인한 시점에 관한 정보를 봅니다.",
      settingsList: [
        {
          path: `connected_apps`,
          title: "연결된 앱",
        },
        {
          path: `sessions`,
          title: "세션",
        },
        {
          path: `login_history`, // 여기는 주소가 다름 :your_twitter_data/login_history
          title: "계정 엑세스 기록",
        },
        {
          path: "devices", // 여기도 주소가 다름 your_twitter_data/devices
          title: "로그인된 디바이스 및 앱",
        },
      ],
    },
    // 연결된 계정
    connectedAccounts: {
      title: "연결된 게정",
      detail:
        "PlayGround 계정에 로그인하기 위해 연결한 소셜 계정입니다. 여기에서 액세스를 비활성화할 수 있습니다.",
    },
    // 위임
    delegate: {
      title: "위임",
      detail: "역할을 위임한 사람들과 계정을 공유합니다",
      text: "다른 사용자가 자신의 계정으로 나를 초대할 수 있습니다",
      description:
        "이 설정을 켜면 다른 사람들이 자신의 계정을 공유하기 위해 나를 초대할 수 있습니다",
      heading: "내가 위임한 계정",
      settingsList: [
        {
          path: `groups`,
          title: "내가 위임된 계정",
        },
        {
          path: `members`,
          title: "역할을 위임한 멤버",
        },
      ],
    },
  },
  // 개인 정보 및 보안
  privacy: {
    title: "개인정보 및 보안",
    detail: "PlayGround에서 표시되고 공유되는 정보를 관리합니다.",
    settingsBranchList: [
      {
        url: "audience_and_tagging",
        title: "오디언스, 미디어 및 태그하기",
        detail: "PlayGround에서 다른 사람들에게 공개하는 정보를 관리합니다.",
        option: "delegate",
      },
      {
        url: "your_posts",
        title: "내 게시물",
        detail: "게시물과 관련된 정보를 관리합니다.",
        option: "write",
      },
      {
        url: "content_you_see",
        title: "표시되는 컨텐츠",
        detail:
          "토픽과 관심사 등 사용자의 선호도를 바탕으로 PlayGround에 표시되는 정보를 결정합니다.",
        option: "content",
      },
      {
        url: "mute_and_block",
        title: "뮤트 및 차단",
        detail: "내가 뮤트했거나 차단한 계정, 단어 및 알림을 관리합니다.",
        option: "mute",
      },
      {
        url: "direct_messages",
        title: "메시지",
        detail: "나에게 직접 메시지를 보낼 수 있는 대상을 관리합니다.",
        option: "message",
      },
      {
        url: "contacts",
        title: "계정찾기 및 연락처",
        detail: "계정찾기 설정을 제어하고 가져온 연락처를 관리합니다.",
        option: "contact",
      },
      {
        url: "location_information",
        title: "위치 정보",
        detail:
          "PlayGround에서 사용자 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다.",
        option: "location",
      },
      {
        url: "ads_preferences",
        title: "광고 환경설정",
        detail: "PlayGround에서 광고 설정을 관리합니다.",
        option: "ads",
      },
    ],
    //오디언스, 미디어 및 태그하기
    audience_and_tagging: {
      title: "오디언스, 미디어 및 태그하기",
      detail: "PlayGround에서 다른 사람들에게 공개하는 정보를 관리합니다.",

      description1:
        "선택하면 나를 팔로우하는 사람들만 내 게시물 및 기타 계정 정보를 볼 수 있게 됩니다.",
      description2:
        "이 설정을 선택하면 기본적으로 게시물의 동영상을 다운로드할 수 없게 됩니다. 이 설정은 앞으로 작성하는 게시물에 적용되며 소급 적용되지 않습니다.",
      path: "tagging",
      pathTitle: "사진 태그하기",
      pathDetail: "누구나 나를 태글할 수 있도록 허용",
    },
    // 내 게시물
    your_posts: {
      title: "내 게시물",
      detail: "게시물과 관련된 정보를 관리합니다.",
      text1: "게시하는 미디어를 민감한 내용이 포함될 수 있는 미디어로 표시하기",
      unchecked: "squareEmpty",
      checked: "squareChecked",
      description1:
        "활성화하면 게시하는 사진과 동영상이 민감한 콘텐츠가 표시되기를 원치 않는 사람들에게 민감한 콘텐츠로 표시됩니다.",
      path1: "location",
      pathTitle1: "게시물에 위치 정보 넣기",
    },
    // 표시되는 컨텐츠
    sortContents: {
      title: "표시되는 컨텐츠",
      detail:
        "토픽과 관심사 등 사용자의 선호도를 바탕으로 X에 표시되는 정보를 결정합니다",
      text1: "민간한 내용을 포함할 수 있는 미디어 표시",
      setting1: false, // api를 통해서 받아와야 하는 값
      checked: "squareChecked",
      unchecked: "squareEmpty",
      settingsList: [
        {
          path: `topics`,
          title: "토픽",
          detail: ``,
          pageName: `${user.id}`,
        },
        {
          path: `interests`,
          title: "관심사",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `explore`,
          title: "탐색 설정",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `search`,
          title: "검색 설정",
          detail: ``,
          pageName: "settings",
        },
      ],
    },
    // 뮤트 및 차단
    mute_and_block: {
      title: "뮤트 및 차단",
      detail: "내가 뮤트했거나 차단한 계정, 단어 및 알림을 관리합니다.",
      settingsList: [
        {
          path: `blocked/all`,
          title: "차단한 계정",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `muted/all`,
          title: "뮤트한 계정",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `muted_keywords`,
          title: "뮤트한 단어",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `notifications/advanced_filters`,
          title: "뮤트 상태의 알림",
          detail: ``,
          pageName: "settings",
        },
      ],
    },

    // 계정찾기 및 연락처
    contacts: {
      title: "계정찾기 및 연락처",
      detail: "계정찾기 설정을 제어하고 가져온 연락처를 관리합니다.",
      heading1: "검색 가능성",
      description1:
        "내 이메일 주소 또는 휴대폰 번호를 알고 있는 사람들이 X에서 나를 찾고 연락할 수 있게 할지 여부를 결정합니다.",
      settingsList1: [
        {
          text: "내 이메일 주소를 알고 있는 사람들이 X에서 나를 찾을 수 있도록 허용",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail:
            "내 이메일 주소를 알고 있는 사람들이 X에서 나를 찾고 연락할 수 있도록 합니다.",
        },
        {
          text: "내 휴대폰 번호를 알고 있는 사람들이 X에서 나를 찾을 수 있도록 허용",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail:
            "내 휴대폰 번호를 알고 있는 사람이 X에서 나를 찾고 연락할 수 있도록 합니다.",
        },
      ],
      heading2: "연락처",
      description2: "모바일 디바이스에서 가져온 연락처를 관리합니다. ",
      settingsList2: [
        {
          path: `contacts_dashboard`,
          title: "연락처 관리",
          detail: ``,
          pageName: "settings",
        },
      ],
    },
    // 위치 정보
    location_information: {
      title: "위치 정보",
      detail:
        "PlayGround에서 사용자 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다.",
      settingsList1: [
        {
          text: "내가 머물렀던 장소를 기반으로 맞춤 설정",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail:
            "PlayGround에서는 항상 내게 맞춤 콘텐츠를 제공하기 위해 내가 가입한 위치나 현재 위치와 같은 정보를 사용합니다. 이 설정을 활성화하면 내가 방문한 장소를 통해 맞춤 콘텐츠를 제공할 수 있습니다.",
        },
      ],
      settingsList2: [
        {
          path: `your_data/locations`,
          title: "내가 방문한 장소",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `location`,
          title: "게시물에 위치 정보 넣기",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `explore`,
          title: "탐색 설정",
          detail: ``,
          pageName: "settings",
        },
      ],
    },
    // 광고 환경설정
    ads_preferences: {
      title: "광고 환경설정",
      detail: "PlayGroundX에서 광고 설정을 관리합니다.",
      settingsList1: [
        {
          text: "맞춤 광고",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail:
            "PlayGround에서 항상 내 PlayGround에서 활동에 기반한 광고를 보게 됩니다. 이 설정이 활성화되어 있으면 X에서 내 X 활동과 파트너가 제공한 기타 온라인 활동 및 정보를 결합하여 PlayGround에서 내외에서 PlayGround에서 광고주의 광고를 맞춤 설정할 수 있습니다",
        },
      ],
      settingsList2: [
        {
          path: `your_data/twitter_interests`,
          title: "관심사",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `your_data/audiences`,
          title: "내 광고주 목록",
          detail: ``,
          pageName: "settings",
        },
      ],
    },
  },
  // 알림
  notifications: {
    title: "알림",
    detail: "활동, 관심사 및 추천에 관해 받는 알림의 종류를 선택합니다.",
    settingsBranchList: [
      {
        url: "filters",
        title: "필터",
        detail: "확인하고자 하는 알림과 확인하고 싶지 않은 알림을 선택하세요",
        option: "filter",
      },
      {
        url: "preferences",
        title: "환경설정",
        detail: "알림 유형별로 환경ㅅ얼정을 선택하세요.",
        option: "preference",
      },
    ],
    notificationFilter: {
      title: "필터",
      detail: "확인하고자 하는 알림과 확인하고 싶지 않은 알림을 선택하세요.",
      settingsList1: [
        {
          text: "퀄리티 필터",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail:
            "선택하면 중복 및 자동 게시물과 같은 콘텐츠가 필터링됩니다. 팔로우 중이거나 최근 대화한 계정의 알림에 적용되지 않습니다.",
        },
      ],
      settingsList2: [
        {
          path: `advanced_filters`,
          title: "뮤트 상태의 알림",
          detail: ``,
          pageName: "notifications",
        },
      ],
    },
    notificationPreferences: {
      title: "환경설정",
      detail: "알림 유형별로 환경설정을 선택하세요.",
      settingsList1: [],
      settingsList2: [
        {
          path: `push_notifications`,
          title: "푸시 알림",
          detail: ``,
          pageName: "settings",
        },
        {
          path: `email_notifications`,
          title: "이메일 알림",
          detail: ``,
          pageName: "settings",
        },
      ],
    },
  },
  // 접근성, 표시, 언어
  accessibility: {
    title: "접근성, 표시, 언어",
    detail: "PlayGround의 콘텐츠 표시 방식을 관리합니다.",
    settingsBranchList: [
      {
        url: "accessibility",
        title: "접근성",
        detail: "색 대비와 동작 제한 등 PlayGround에서의 환경을 관리합니다.",
        option: "accessibility",
      },
      {
        url: "display",
        title: "화면",
        detail:
          "글꼴 크기, 색상 및 배경을 관리합니다. 이러한 설정은 이 브라우저의 모든 X 계정에 적용됩니다.",
        option: "display",
      },
      {
        url: "languages",
        title: "언어",
        detail: "사용자 환경을 맞춤 설정할 때 사용되는 언어를 관리합니다.",
        option: "world",
      },
      {
        url: "data_usage",
        title: "테이터 사용량",
        detail:
          "X는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다.",
        option: "chart",
      },
      {
        url: "i/keyboard_shortcuts",
        title: "키보드 단축키",
        detail: "",
        option: "shortcut",
      },
    ],
    // 접근성
    accessibility: {
      title: "접근성",
      detail:
        "색 대비와 동작 제한 등 X의 사용자 환경을 관리합니다. 이러한 설정은 이 브라우저의 모든 X 계정에 적용됩니다.",
      heading1: "보기지원",
      settingsList1: [
        {
          text: "색 대비 높이기",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail: "텍스트와 배경색의 대비를 높여 가독성을 향상시킵니다.",
        },
      ],
      heading2: "동작",
      settingsList2: [
        {
          text: "동작 줄이기",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail: "생방송 참여수를 포함한 앱 내 애니메이션을 줄입니다.",
        },
      ],
      settingsList3: [
        {
          path: `autoplay`,
          title: "자동 재생",
          detail: `셀루러 데이터 또는 Wi-Fi 사용 시`,
          pageName: "settings",
        },
      ],
      heading3: "미디어",
      settingsList4: [
        {
          text: "이미지 설명 알림을 받습니다.",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail:
            "게시물을 전송하기 전에 이미지 설명을 추가하라는 알림을 받습니다.",
        },
      ],
    },
    // 화면
    display: {},
    // 언어
    languages: {
      title: "언어",
      detail: "사용자 환경을 맞춤 설정할 때 사용되는 언어를 관리합니다.",
      heading1: "표시 언어",
      description1:
        "PlayGround 헤드라인, 버튼 및 기타 텍스트에 사용하려는 기본 언어를 선택합니다.",
      settingsList1: [
        {
          path: `language`,
          title: "표시 언어",
          detail: `한국어`, // api에서 받아와야 하는 값
          pageName: "settings",
        },
      ],
      heading2: "추가 언어 선택",
      description2:
        "PlayGround에 표시하고 싶은 콘텐츠의 추가 언어를 선택합니다.",
      settingsList2: [
        {
          path: `flow/language_selector`,
          title: "추가언어",
          detail: ``,
          pageName: "i",
        },
      ],
      heading3: "알 수 있는 언어",
      description3:
        "팔로우하는 계정과 반응을 보낸 게시물 같이 사용자 활동을 토대로 X가 추정한 언어를 관리합니다.",
      settingsList3: [
        {
          path: `your_data/language`,
          title: "알 수 있는 언어",
          detail: ``,
          pageName: "settings",
        },
      ],
    },
    // 데이터 사용량
    data_usage: {
      title: "데이터 사용량",
      detail:
        "PlayGround는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다.",
      settingsList1: [
        {
          text: "데이터 세이버",
          setting: false, // api에서 받아와야 하는 값
          checked: "squareChecked",
          unchecked: "squareEmpty",
          detail:
            "이 항목을 선택하면 X에서 네트워크 데이터를 덜 사용하게 됩니다.",
        },
      ],
      settingsList2: [
        {
          path: `autoplay`,
          title: "자동 재생",
          detail: `셀루러 데이터 또는 Wi-Fi 사용 시`,
          pageName: "settings",
        },
      ],
    },
  },
  // 추가 리소스
  about: {
    title: "추가 리소스",
    detail:
      "다른 페이지도 확인하여 X 제품과 서비스에 관한 유용한 정보를 자세히 알아보세요.",
    settingsBranchList: [
      {
        section: "출시노트",
        list: [
          {
            url: "",
            title: "출시 노트",
          },
        ],
      },
      {
        section: "법률",
        list: [
          {
            url: "",
            title: "개인정보 처리방침",
          },
          {
            url: "",
            title: "광고 정보",
          },
          {
            url: "",
            title: "이용약관",
          },
          {
            url: "",
            title: "쿠키 정책",
          },
        ],
      },
      {
        section: "기타",
        list: [
          {
            url: "",
            title: "개발자",
          },
          {
            url: "",
            title: "고객센터",
          },
          {
            url: "",
            title: "광고",
          },
          {
            url: "",
            title: "디렉터리",
          },
          {
            url: "",
            title: "마케팅",
          },
          {
            url: "",
            title: "브랜드 리소스",
          },
          {
            url: "",
            title: "블로그",
          },
          {
            url: "",
            title: "비즈니스용",
          },
          {
            url: "",
            title: "소개",
          },
          {
            url: "",
            title: "접근성",
          },
          {
            url: "",
            title: "채용",
          },
        ],
      },
    ],
    linkIcon: "link",
  },
  SettingsBranchCard: {
    forwardBtn: "forward",
    iconFontSize: "20px",
    basicUrl: "settings",
  },
};

export default settings;

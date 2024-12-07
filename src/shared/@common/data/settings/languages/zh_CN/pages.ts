const pages = {
  settingsLandingPage: {
    pageTitle: "设置",
    placeholder: "搜索设置",
    branchList: [
      {
        title: "账户",
        path: "account",
      },
      {
        title: "安全和账户访问权限",
        path: "security_and_account_access",
      },
      {
        title: "隐私和安全",
        path: "privacy_and_safety",
      },
      {
        title: "通知",
        path: "notifications",
      },
      {
        title: "辅助功能、显示和语言",
        path: "accessibility_display_and_languages",
      },
      {
        title: "盈利",
        path: "monetization",
      },
      {
        title: "其他资源",
        path: "about",
      },
    ],
  },
  AccountPage: {
    pageTitle: "账户",
    description: "查看账户信息、下载数据记录或了解更多关于账户停用选项的信息。",
    branchList: [
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
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "安全与账户访问权限",
    description: "管理账户安全并跟踪账户使用情况，包括连接的应用程序。",
    branchList: [
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
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "隐私与安全",
    description: "管理在PlayGround上显示和共享的信息。",
    branchList: [
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
    ],
  },
  NotificationsPage: {
    pageTitle: "通知",
    description: "选择您希望收到的有关活动、兴趣和推荐的通知类型。",
    branchList: [
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
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "辅助功能、显示和语言",
    description: "管理PlayGround内容的显示方式。",
    branchList: [
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
    ],
  },
  AppsAndSessionsPage: {
    pageTitle: "应用和会话",
    description: "查看与您的账户相关的应用和登录会话信息。",
    branchList: [
      // 연결된 앱
      {
        title: "连接的应用",
        expl: "这些是连接到您的帐户的应用程序。您可以查看这些应用程序访问的信息并阻止访问。",
        path: "connected_apps",
      },
      // 세션
      {
        title: "会话",
        expl: "会话是当前或曾经使用您的PlayGround帐户的设备。这些会话已使用您的帐户登录。您可以从每个会话注销。",
        path: "sessions",
      },
      // 계정 엑세스 기록
      {
        title: "帐户访问历史",
        expl: "如果在应用程序中检测到可疑活动，请阻止连接的应用程序访问。基于IP的位置可能与您的实际位置不同。",
        path: "login_history",
      },
      // 로그인된 디바이스 및 앱
      {
        title: "登录设备和应用",
        path: "devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "静音和屏蔽",
    description: "管理您已静音或屏蔽的账户、词语和通知。",
    branchList: [
      {
        title: "已屏蔽帐户",
        path: "blocked/all",
      },
      {
        title: "已静音帐户",
        path: "muted/all",
      },
      {
        title: "已静音单词",
        path: "muted_keywords",
      },
      {
        title: "静音通知提醒",
        path: "notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "偏好设置",
    description: "为每种通知类型选择偏好设置。",
    branchList: [
      // 푸시 알림
      {
        title: "推送通知",
        path: "push_notifications",
      },
      // 이메일 알림
      {
        title: "电子邮件通知",
        path: "email_notifications",
      },
    ],
  },
};

export default pages;

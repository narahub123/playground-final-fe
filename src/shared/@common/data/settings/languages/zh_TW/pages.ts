const pages = {
  settingsLandingPage: {
    pageTitle: "設定",
    placeholder: "搜尋設定",
    branchList: [
      {
        title: "帳戶",
        path: "account",
      },
      {
        title: "安全與帳戶訪問權限",
        path: "security_and_account_access",
      },
      {
        title: "隱私與安全",
        path: "privacy_and_safety",
      },
      {
        title: "通知",
        path: "notifications",
      },
      {
        title: "輔助功能、顯示和語言",
        path: "accessibility_display_and_languages",
      },
      {
        title: "盈利",
        path: "monetization",
      },
      {
        title: "其他資源",
        path: "about",
      },
    ],
  },
  AccountPage: {
    pageTitle: "帳戶",
    description: "查看帳戶資訊、下載數據記錄或了解更多有關帳戶停用選項的資訊。",
    branchList: [
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
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "安全與帳戶訪問權限",
    description: "管理帳戶安全並追蹤帳戶使用情況，包括連接的應用程式。",
    branchList: [
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
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "隱私與安全",
    description: "管理在PlayGround上顯示和共享的資訊。",
    branchList: [
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
    ],
  },
  NotificationsPage: {
    pageTitle: "通知",
    description: "選擇您希望接收的有關活動、興趣和推薦的通知類型。",
    branchList: [
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
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "輔助功能、顯示和語言",
    description: "管理PlayGround內容的顯示方式。",
    branchList: [
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
        icon: "shortcut",
      },
    ],
  },
  AppsAndSessionsPage: {
    pageTitle: "應用程式和會話",
    description: "查看與您的帳戶相關的應用程式與登入會話資訊。",
    branchList: [
      // 연결된 앱
      {
        title: "連接的應用",
        expl: "這些是連接到您的帳戶的應用程式。您可以查看這些應用程式訪問的信息並阻止訪問。",
        path: "connected_apps",
      },
      // 세션
      {
        title: "會話",
        expl: "會話是當前或曾經使用您的PlayGround帳戶的設備。這些會話已經使用您的帳戶登錄，您可以在每個會話中登出。",
        path: "sessions",
      },
      // 계정 엑세스 기록
      {
        title: "帳戶訪問記錄",
        expl: "如果在應用程式中發現可疑活動，請在連接的應用程式中阻止訪問。基於IP的位置可能與實際位置不同。",
        path: "login_history",
      },
      // 로그인된 디바이스 및 앱
      {
        title: "登錄的設備與應用",
        path: "devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "靜音和封鎖",
    description: "管理您已靜音或封鎖的帳戶、字詞及通知。",
    branchList: [
      {
        title: "已封鎖帳戶",
        path: "blocked/all",
      },
      {
        title: "已靜音帳戶",
        path: "muted/all",
      },
      {
        title: "已靜音關鍵字",
        path: "muted_keywords",
      },
      {
        title: "靜音通知",
        path: "notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "偏好設定",
    description: "為每種類型的通知選擇偏好設定。",
    branchList: [
      // 푸시 알림
      {
        title: "推播通知",
        path: "push_notifications",
      },
      // 이메일 알림
      {
        title: "電子郵件通知",
        path: "email_notifications",
      },
    ],
  },
};

export default pages;

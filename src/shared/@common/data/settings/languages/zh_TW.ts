import { countryNamesZhCN } from "../../countries";

const settingsBranchList = [
  // 帳號
  {
    title: "帳號",
    expl: "查看帳號資訊、下載數據記錄或瞭解帳號停用選項。",
    path: "account",
    midBranches: [
      // 帳號資訊
      {
        title: "帳號資訊",
        expl: "查詢手機號碼和電子郵件地址等帳號資訊。",
        path: "account_data",
        icon: "user",
      },
      // 更改密碼
      {
        title: "更改密碼",
        expl: "隨時更改您的密碼。",
        path: "password",
        icon: "key",
      },
      // 下載數據記錄
      {
        title: "下載數據記錄",
        expl: "獲取有關帳號中存儲資訊的見解。",
        path: "download_data",
        icon: "download",
      },
      // 停用帳號
      {
        title: "停用帳號",
        expl: "瞭解如何停用帳號。",
        path: "inactivate",
        icon: "crackedHeart",
      },
    ],
  },
  // 安全與帳號訪問權限
  {
    title: "安全與帳號訪問權限",
    expl: "管理帳號安全並追踪與帳號連結的應用程式使用情況。",
    path: "security_and_account_access",
    midBranches: [
      // 安全
      {
        title: "安全",
        path: "security",
        expl: "管理帳號安全。",
        icon: "lock",
      },
      // 應用程式與會話
      {
        title: "應用程式與會話",
        path: "apps_and_sessions",
        expl: "查看帳號以及與帳號連結的應用程式的登入時間資訊。",
        icon: "apps",
        subBranches: [
          // 連結的應用程式
          {
            title: "連結的應用程式",
            expl: "這是與帳號連結的應用程式，顯示其訪問的資訊並可阻止訪問。",
            path: "connected_apps",
          },
          // 會話
          {
            title: "會話",
            expl: "會話是當前或曾經使用我的 PlayGround 帳號的裝置。可從每個會話登出。",
            path: "sessions",
          },
          // 帳號訪問記錄
          {
            title: "帳號訪問記錄",
            expl: "如果發現可疑活動，可在連結的應用程式中阻止訪問。基於 IP 的位置可能與實際位置不同。",
            path: "login_history",
          },
          // 登入的裝置與應用程式
          {
            title: "登入的裝置與應用程式",
            path: "devices",
          },
        ],
      },
      // 連結的帳號
      {
        title: "連結的帳號",
        path: "connected_accounts",
        expl: "管理用於登入 PlayGround 的 Google、Naver 或 Kakao 帳號。",
        icon: "twoWay",
      },
      // 委託
      {
        title: "委託",
        path: "delegate",
        expl: "管理共享帳號。",
        icon: "delegate",
      },
    ],
  },
  // 隱私與安全
  {
    title: "隱私與安全",
    expl: "管理在 PlayGround 上顯示和共享的資訊。",
    path: "privacy_and_safety",
    midBranches: [
      {
        title: "受眾、媒體與標籤",
        expl: "管理您在 PlayGround 上向他人公開的資訊。",
        path: "audience_and_tagging",
      },
      {
        title: "我的帖子",
        expl: "管理與帖子相關的資訊。",
        path: "my_tweets",
      },
      {
        title: "顯示的內容",
        expl: "根據您的偏好決定在 PlayGround 上顯示的資訊。",
        path: "content_you_see",
      },
      {
        title: "靜音與封鎖",
        expl: "管理我靜音或封鎖的帳號、詞語與通知。",
        path: "mute_and_block",
        subBranches: [
          {
            title: "封鎖的帳號",
            path: "blocked/all",
          },
          {
            title: "靜音的帳號",
            path: "muted/all",
          },
          {
            title: "靜音的詞語",
            path: "muted_keywords",
          },
          {
            title: "靜音狀態的通知",
            path: "notifications/advanced_filters",
          },
        ],
      },
      {
        title: "訊息",
        expl: "管理可以向我發送私人訊息的對象。",
        path: "messages",
      },
      {
        title: "帳號搜尋與聯絡人",
        expl: "控制帳號搜尋設置並管理導入的聯絡人。",
        path: "contacts",
      },
      {
        title: "廣告偏好設定",
        expl: "管理在 PlayGround 上的廣告設置。",
        path: "ads_preferences",
      },
      {
        title: "位置信息",
        expl: "管理 PlayGround 用於個性化環境的位置信息。",
        path: "location_information",
      },
    ],
  },
  // 通知
  {
    title: "通知",
    expl: "選擇有關活動、興趣和推薦的通知類型。",
    path: "notifications",
    midBranches: [
      // 篩選器
      {
        title: "篩選器",
        expl: "選擇您想查看的通知和不想查看的通知。",
        path: "notifications/filters",
        icon: "",
      },
      // 偏好設定
      {
        title: "偏好設定",
        expl: "根據通知類型選擇偏好設定。",
        path: "notifications/preferences",
        icon: "",
        subBranches: [
          // 推送通知
          {
            title: "推送通知",
            path: "push_notifications",
          },
          // 電子郵件通知
          {
            title: "電子郵件通知",
            path: "email_notifications",
          },
        ],
      },
    ],
  },
  // 無障礙、顯示與語言
  {
    title: "無障礙、顯示與語言",
    expl: "管理 PlayGround 的內容顯示方式。",
    path: "accessibility_display_and_languages",
    midBranches: [
      // 無障礙
      {
        title: "無障礙",
        expl: "管理色彩對比和限制動作等使用者體驗設置。這些設置適用於此瀏覽器的所有 PlayGround 帳號。",
        path: "accessibility",
        icon: "eyeoff",
      },
      // 顯示
      {
        title: "顯示",
        expl: "管理字體大小、顏色和背景。這些設置適用於此瀏覽器的所有 PlayGround 帳號。",
        path: "display",
        icon: "pen",
      },
      // 語言
      {
        title: "語言",
        expl: "管理用於個性化使用者體驗的語言。",
        path: "languages",
        icon: "map",
      },
      // 數據使用量
      {
        title: "數據使用量",
        expl: "限制 PlayGround 在此裝置上使用的部分網絡數據。",
        path: "data",
        icon: "barChart",
      },
      // 鍵盤快捷鍵
      {
        title: "鍵盤快捷鍵",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },
  // 盈利
  {
    title: "盈利",
    path: "monetization",
  },
  // 附加資源
  {
    title: "附加資源",
    expl: "查看其他頁面，瞭解有關 PlayGround 產品和服務的有用資訊。",
    path: "about",
  },
];

const zh_TW = {
  languageSelect: {
    wrongCountryCode: "無效的國家代碼",
    countryNames: countryNamesZhCN,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: {
      login: "的個人資料照片",
      logout: "個人資料照片",
    },
    ariaLabel: "點擊更換個人資料照片。",
  },
  // 아미지
  image: {
    imgAlt: "圖片",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "預設色",
      red: "紅色",
      green: "綠色",
      yellow: "黃色",
      purple: "紫色",
      black: "黑色",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "非常小",
      s: "小",
      b: "預設",
      l: "大",
      xl: "非常大",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "返回上一頁",
  },
  // Settings 브랜치 리스트
  settingsBranchList,
};

export default zh_TW;

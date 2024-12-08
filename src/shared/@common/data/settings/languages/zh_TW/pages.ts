import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { userExample as user } from "@shared/@common/data/example";

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
        title: "安全與帳戶存取權限",
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
        title: "輔助功能、顯示與語言",
        path: "accessibility_display_and_languages",
      },
      {
        title: "營利",
        path: "monetization",
      },
      {
        title: "更多資源",
        path: "about",
      },
    ],
  },
  AccountPage: {
    pageTitle: "帳戶",
    description: "檢視帳戶資訊、下載數據記錄或了解停用帳戶選項。",
    branchList: [
      {
        title: "帳戶資訊",
        expl: "檢視帳戶資訊，如手機號碼和電子郵件地址。",
        path: "/settings/your_data/account",
        icon: "user",
      },
      {
        title: "變更密碼",
        expl: "隨時變更您的密碼。",
        path: "/settings/password",
        icon: "key",
      },
      {
        title: "下載數據記錄",
        expl: "了解儲存在帳戶中的數據類型。",
        path: "/settings/download_data",
        icon: "download",
      },
      {
        title: "停用帳戶",
        expl: "了解如何停用帳戶。",
        path: "/settings/inactivate",
        icon: "crackedHeart",
      },
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "安全與帳戶存取權限",
    description: "管理帳戶安全，追蹤包括已連結應用在內的帳戶使用情況。",
    branchList: [
      {
        title: "安全",
        expl: "管理帳戶的安全設定。",
        path: "/settings/security",
        icon: "lock",
      },
      {
        title: "應用與會話",
        expl: "檢視登錄帳戶和連結應用的相關資訊。",
        path: "/settings/apps_and_sessions",
        icon: "apps",
      },
      {
        title: "已連結帳戶",
        expl: "管理用於登錄PlayGround的Google、Naver或Kakao帳戶。",
        path: "/settings/connected_accounts",
        icon: "twoWay",
      },
      {
        title: "委託",
        expl: "管理共享帳戶。",
        path: "/settings/delegate",
        icon: "delegate",
      },
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "隱私與安全",
    description: "管理在PlayGround中顯示與分享的資訊。",
    branchList: [
      {
        title: "受眾、媒體與標籤",
        expl: "管理您在X中公開的資訊。",
        path: "/settings/audience_and_tagging",
        icon: "users",
      },
      {
        title: "我的帖子",
        expl: "管理與帖子相關的資訊。",
        path: "/settings/my_tweets",
        icon: "penLine",
      },
      {
        title: "顯示的內容",
        expl: "根據您的主題和興趣偏好，決定PlayGround中顯示的內容。",
        path: "/settings/content_you_see",
        icon: "content",
      },
      {
        title: "靜音與封鎖",
        expl: "管理您靜音或封鎖的帳戶、關鍵字和通知。",
        path: "/settings/mute_and_block",
        icon: "mute",
      },
      {
        title: "訊息",
        expl: "管理可以向您傳送直接訊息的對象。",
        path: "/settings/messages",
        icon: "message",
      },
      {
        title: "帳戶搜尋與聯絡人",
        expl: "控制帳戶搜尋設定並管理匯入的聯絡人。",
        path: "/settings/contacts",
        icon: "contact",
      },
      {
        title: "廣告偏好",
        expl: "管理在PlayGround上的廣告設定。",
        path: "/settings/ads_preferences",
        icon: "ads",
      },
      {
        title: "位置資訊",
        expl: "管理PlayGround用於個性化環境的位置資訊。",
        path: "/settings/location_information",
        icon: "pin",
      },
    ],
  },
  NotificationsPage: {
    pageTitle: "通知",
    description: "選擇您想接收的活動、興趣及推薦通知類型。",
    branchList: [
      {
        title: "篩選器",
        expl: "選擇想檢視的通知類型以及不想檢視的類型。",
        path: "/settings/notifications/filters",
        icon: "filter",
      },
      {
        title: "設定",
        expl: "為每種通知類型選擇偏好設定。",
        path: "/settings/notifications/preferences",
        icon: "preferences",
      },
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "輔助功能、顯示與語言",
    description: "管理PlayGround的內容顯示方式。",
    branchList: [
      {
        title: "輔助功能",
        expl: "管理顏色對比、動畫限制等使用者體驗設定。此設定適用於此瀏覽器上的所有PlayGround帳戶。",
        path: "/settings/accessibility",
        icon: "eyeoff",
      },
      {
        title: "顯示",
        expl: "管理字體大小、顏色和背景。此設定適用於此瀏覽器上的所有PlayGround帳戶。",
        path: "/settings/display",
        icon: "pen",
      },
      {
        title: "語言",
        expl: "管理用於個性化使用者體驗的語言。",
        path: "/settings/languages",
        icon: "map",
      },
      {
        title: "數據使用",
        expl: "限制PlayGround在此裝置上使用的一些網路數據。",
        path: "/settings/data",
        icon: "barChart",
      },
      {
        title: "鍵盤快速鍵",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },
  AppsAndSessionsPage: {
    pageTitle: "應用與會話",
    description: "檢視登錄帳戶和已連結應用的相關資訊。",
    branchList: [
      {
        title: "已連結應用",
        path: "/settings/connected_apps",
      },
      {
        title: "會話",
        path: "/settings/sessions",
      },
      {
        title: "帳戶存取記錄",
        path: "/settings/login_history",
      },
      {
        title: "已登錄裝置與應用",
        path: "/settings/devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "靜音與封鎖",
    description: "管理您靜音或封鎖的帳戶、關鍵字和通知。",
    branchList: [
      {
        title: "封鎖的帳戶",
        path: "/settings/blocked/all",
      },
      {
        title: "靜音的帳戶",
        path: "/settings/muted/all",
      },
      {
        title: "靜音的關鍵字",
        path: "/settings/muted_keywords",
      },
      {
        title: "靜音通知",
        path: "/settings/notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "設定",
    description: "為每種通知類型選擇偏好設定。",
    branchList: [
      {
        title: "推送通知",
        path: "/settings/push_notifications",
      },
      {
        title: "電子郵件通知",
        path: "/settings/email_notifications",
      },
    ],
  },
  SecurityPage: {
    pageTitle: "安全",
    description: "管理帳戶的安全性。",
    list: [
      {
        title: "兩步驗證",
        type: "card",
        comp: {
          title: "兩步驗證",
          path: "/settings/account/login_verification",
        },
        description:
          "通過要求除PlayGround密碼外的第二種驗證方法，保護您的帳戶免受未經授權的訪問。您可以選擇短信、認證應用或安全金鑰。",
      },
      {
        title: "身份驗證",
        type: "card",
        comp: {
          title: "身份驗證",
          path: "/settings/account/id_verification",
        },
        description:
          "上傳批准格式的身份證明以驗證帳戶的真實性。您提供的資訊僅用於身份驗證，並將被安全處理。",
      },
      {
        title: "密碼重設",
        type: "checkbox",
        comp: {
          text: "保護密碼重設",
          reducer: setBackgroundTheme,
          initialValue: false,
        },
        description:
          "作為額外的保護措施，您需要驗證您的電子郵件地址或電話號碼才能重設PlayGround密碼。",
      },
    ],
  },
  AccountInfoPage: {
    pageTitle: "帳戶資訊",
    branchList: [
      // 사용자 아이디
      {
        title: "用戶ID",
        path: "/settings/screen_name",
        expl: `@${user.userId}`,
      },
      // 휴대폰
      {
        title: "手機",
        path: "/settings/phone",
      },
      // 이메일
      {
        title: "電子郵件",
        path: "/settings/email",
        expl: user.email,
      },
      // 인증 여부
      {
        title: "認證狀態",
        path: "",
        expl: user.isAuthenticated,
      },
      // 비공개 게시물
      {
        title: "私人貼文",
        path: "/settings/audience_and_tagging",
        expl: user.isVisible,
      },
      // 계정 생성
      {
        title: "帳戶創建",
        path: "",
        expl: user.regDate.toLocaleString(),
      },
      // 국가
      {
        title: "國家",
        path: "/settings/country",
        expl: user.language.split("-")[1],
      },
      // 언어
      {
        title: "語言",
        path: "/settings/language",
        expl: user.language,
      },
      // 성별
      {
        title: "性別",
        path: "/settings/gender",
        expl: user.gender,
      },
      // 생년월일
      {
        title: "出生日期",
        path: "",
        expl: user.birth,
      },
      // 연령
      {
        title: "年齡",
        path: "age",
        expl: user.birth,
      },
      // 자동화
      {
        title: "自動化",
        path: "automation",
        expl: "管理自動化帳戶。",
      },
    ],
  },
};

export default pages;

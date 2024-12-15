import { countryNamesZhTW } from "@shared/@common/data/countries";
import regExp from "@shared/@common/data/regExp";
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
  getTwoFactorAuthentication,
  getHideLabel,
  getAllowTaggingWhom,
  getEmailNotificationsPGBusiness,
  getEmailNotificationsPGRecentFollowings,
  getEmailNotificationsPGRecommend,
  getEmailNotificationsPGSurvey,
  getEmailNotificationsPGPartners,
  getEmailNotificationsPGLatest,
  getEmailNotificationsPGTips,
  getEmailNotificationsPGUpdates,
  getEmailNotificationsPopularPosts,
  getEmailNotificationsPostsSentByEmail,
  getEmailNotificationsMessages,
  getEmailNotificationsNewNotification,
  getPushNotificationsProfessional,
  getPushNotificationsAlertAndAgent,
  getPushNotificationsOtherLives,
  getPushNotificationsLives,
  getPushNotificationsMoments,
  getPushNotificationsRecommend,
  getPushNotificationsNewsAndSports,
  getPushNotificationsTopics,
  getPushNotificationsJoinPplInContacts,
  getPushNotificationsReplyMessage,
  getPushNotificationsMessages,
  getPushNotificationsPhotoTags,
  getPushNotificationsLikes,
  getPushNotificationsReposts,
  getPushNotificationsReplies,
  getPushNotificationsPosts,
} from "@shared/@common/model/selectors";
import {
  setAddImgExpl,
  setAddLocationInfo,
  setAllowBehavioralAds,
  setAllowLocationAds,
  setAllowMessages,
  setAutoplay,
  setBackgroundTheme,
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
  setTwoFactorAuthentication,
  setHideLabel,
  setAllowTaggingWhom,
  setEmailNotificationsPGBusiness,
  setEmailNotificationsPGRecentFollowings,
  setEmailNotificationsPGRecommend,
  setEmailNotificationsPGSurvey,
  setEmailNotificationsPGPartners,
  setEmailNotificationsPGLatest,
  setEmailNotificationsPGTips,
  setEmailNotificationsPGUpdates,
  setEmailNotificationsPopularPosts,
  setEmailNotificationsPostsSentByEmail,
  setEmailNotificationsMessages,
  setEmailNotificationsNewNotification,
  setPushNotificationsProfessional,
  setPushNotificationsAlertAndAgent,
  setPushNotificationsOtherLives,
  setPushNotificationsLives,
  setPushNotificationsMoments,
  setPushNotificationsRecommend,
  setPushNotificationsNewsAndSports,
  setPushNotificationsTopics,
  setPushNotificationsJoinPplInContacts,
  setPushNotificationsReplyMessage,
  setPushNotificationsMessages,
  setPushNotificationsPhotoTags,
  setPushNotificationsLikes,
  setPushNotificationsReposts,
  setPushNotificationsReplies,
  setPushNotificationsPosts,
} from "@shared/@common/model/slices/settingsSlice";
import { UserType } from "@shared/@common/types";
import { SettingsType } from "@shared/@common/types";
import { HyperLink } from "@shared/@common/ui/components";
import {
  calculateAge,
  convertBirthToLocalString,
  getLangName,
  translateGender,
} from "@shared/@common/utils";

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
        path: "/settings/deactivate",
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
        path: "/settings/your_posts",
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
    branchList: (user: UserType & SettingsType) => [
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
        expl: user.isAuthenticated ? "已認證" : "未認證",
      },
      // 비공개 게시물
      {
        title: "私人貼文",
        path: "/settings/audience_and_tagging",
        expl: user.isVisible ? "是" : "否",
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
        expl: countryNamesZhTW[
          user.language
            .split("-")[1]
            .toLowerCase() as keyof typeof countryNamesZhTW
        ],
      },
      // 언어
      {
        title: "語言",
        path: "/settings/languages",
        expl: getLangName(user.language)?.text,
      },
      // 성별
      {
        title: "性別",
        path: "/settings/gender",
        expl: translateGender(user.gender),
      },
      // 생년월일
      {
        title: "出生日期",
        path: "",
        expl: convertBirthToLocalString(user.birth),
      },
      // 연령
      {
        title: "年齡",
        path: "/settings/your_data/age",
        expl: calculateAge(user.birth),
      },
      // 자동화
      {
        title: "自動化",
        path: "automation",
        expl: "管理自動化帳戶。",
      },
    ],
  },
  DeactivatePage: {
    pageTitle: "停用帳號",
    section1: {
      title: "您的帳號將被停用。",
      description:
        "開始停用PlayGround帳號的流程。您的顯示名稱、@用戶名和公開個人資料將不再顯示在PlayGround.com、適用於iOS的PlayGround或適用於Android的PlayGround上。",
    },
    section2: {
      title: "還有哪些需要了解的內容",
      list: [
        "如果因誤操作或不小心停用了PlayGround帳號，您可以在30天內恢復。",
        "部分帳號資訊可能仍可通過Google或Bing等搜索引擎訪問。",
        <>
          您無需停用帳號即可更改@用戶名。{" "}
          <HyperLink text="設定" path="/settings/password" out={false} />
          中更新用戶名。
        </>,
        <>
          如果希望將當前的@用戶名或電子郵件地址用於其他PlayGround帳號，請在停用此帳號之前{" "}
          <HyperLink
            text="更改"
            path="/settings/your_data/account"
            out={false}
          />
          這些資訊。
        </>,
        "若要下載您的PlayGround數據，請務必在停用帳號之前完成請求和下載過程。無法向已停用的帳號發送數據下載鏈接。",
      ],
    },
    deactivate: {
      text: "停用",
    },
  },
  AudienceAndTaggingPage: {
    pageTitle: "受眾、媒體和標記",
    description: "管理您在PlayGround上與他人共享的資訊。",
    list: [
      {
        title: "",
        type: "checkbox",
        selector: getIsPrivate,
        comp: {
          text: "將我的帖子設置為私人",
          reducer: setIsPrivate,
        },
        description: "選中後，只有關注我的人才能查看我的帖子和其他帳號資訊。",
      },
      {
        title: "",
        type: "checkbox",
        selector: getProtectVideo,
        comp: {
          text: "保護視頻",
          reducer: setProtectVideo,
        },
        description:
          "啟用後，帖子中的視頻默認無法下載。此設置適用於未來的帖子，不適用於過去的內容。",
      },
      {
        title: "",
        type: "card",
        comp: {
          title: "照片標記",
          path: "/settings/tagging",
          expl: "允許任何人標記我",
        },
        description: "",
      },
    ],
  },
  YourPostsPage: {
    pageTitle: "我的帖子",
    description: "管理與帖子相關的資訊。",
    list: [
      {
        type: "checkbox",
        selector: getTagSensitiveMedia,
        comp: {
          text: "將您發布的媒體標記為可能包含敏感內容",
          reducer: setTagSensitiveMedia,
        },
        description:
          "啟用後，您發布的照片和視頻將被標記為敏感內容，供不想看到敏感內容的人查看。",
      },
      {
        type: "card",
        comp: {
          title: "在帖子中添加位置信息",
          path: "/settings/location",
        },
      },
    ],
  },
  ContentYouSeePage: {
    pageTitle: "顯示的內容",
    description:
      "根據用戶的偏好，如主題和興趣，決定在 PlayGround 上顯示的資訊。",
    checkboxItem: {
      type: "checkbox",
      selector: getDisplaySensitiveMedia,
      comp: {
        text: "顯示可能包含敏感內容的媒體",
        reducer: setDisplaySensitiveMedia,
      },
    },
    branchList: (user: UserType) => [
      {
        title: "主題",
        path: `/${user.userId}/topics`,
      },
      {
        title: "興趣",
        path: `/settings/your_data/your_interests`,
      },
      {
        title: "探索設定",
        path: `/settings/explore`,
      },
      {
        title: "搜索設定",
        path: `/settings/search`,
      },
    ],
  },
  MessageSettingPage: {
    pageTitle: "消息",
    list: [
      {
        text: "允許以下用戶的消息請求",
        detail: "您始終可以接收您關注的用戶發送的消息。",
        type: "checkboxlist",
        selector: getAllowMessages,
        comp: [
          {
            text: "不接收",
            reducer: setAllowMessages,
            value: "none",
          },
          {
            text: "已認證用戶",
            reducer: setAllowMessages,
            value: "authenticated",
          },
          {
            text: "所有人",
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
          text: "過濾低質量消息",
          reducer: setHideMessages,
        },
        description:
          "隱藏被識別為垃圾郵件或包含低質量內容的消息請求。這些請求將被發送到消息請求列表底部的單獨收件箱中。如果需要，您仍然可以查看。",
        top: true,
        disabled: true,
      },
      {
        title: "",
        type: "checkbox",
        selector: getShowRead,
        comp: {
          text: "顯示已讀回執",
          reducer: setShowRead,
        },
        description:
          "允許發送消息的人知道您何時已閱讀消息。已讀回執不會顯示在消息請求中。",
        top: true,
      },
    ],
  },
  ContactsPage: {
    pageTitle: "查找帳戶和聯絡人",
    description: "控制帳戶查找設置並管理導入的聯絡人。",
    list: [
      {
        title: "可搜索性",
        detail:
          "決定是否允許知道您的電子郵件地址或手機號碼的人在PG上找到並聯繫您。",
        type: "checkbox",
        selector: getFindByEmail,
        comp: {
          text: "允許知道我的電子郵件地址的人在PG上找到我",
          reducer: setFindByEmail,
        },
        description: "允許知道您的電子郵件地址的人在PG上找到並聯繫您。",
      },
      {
        type: "checkbox",
        selector: getFindByPhone,
        comp: {
          text: "允許知道我的手機號碼的人在PG上找到我",
          reducer: setFindByPhone,
        },
        description: "允許知道您的手機號碼的人在PG上找到並聯繫您。",
      },
      {
        title: "聯絡人",
        detail: "管理從移動設備導入的聯絡人。",
        type: "card",
        comp: {
          title: "管理聯絡人",
          path: "/settings/contacts_dashboard",
        },
        top: true,
      },
    ],
  },
  AdsPreferencesPage: {
    pageTitle: "廣告偏好",
    description: "管理PlayGround上的廣告設定。",
    checkbox: {
      type: "checkbox",
      selector: getAllowBehavioralAds,
      comp: {
        text: "個性化廣告",
        reducer: setAllowBehavioralAds,
      },
      description:
        "您將始終看到基於您在PlayGround上的活動的廣告。啟用此設置後，PlayGround可以通過將您的PlayGround活動與合作夥伴提供的其他在線活動和信息結合，在PlayGround內外個性化PlayGround廣告主的廣告。",
    },
    branchList: [
      {
        title: "興趣",
        path: "/settings/your_data/interests",
      },
      {
        title: "廣告主列表",
        path: "/settings/your_data/audiences",
      },
    ],
  },
  LocationInfoPage: {
    pageTitle: "位置信息",
    description: "管理用於在PlayGround上個性化體驗的位置信息。",
    checkbox: {
      type: "checkbox",
      selector: getAllowLocationAds,
      comp: {
        text: "基於我去過的地方進行個性化",
        reducer: setAllowLocationAds,
      },
      description:
        "PlayGround始終使用例如我註冊的地點或當前位置等信息來提供個性化內容。啟用此設置後，可以通過我去過的地方來提供個性化內容。",
    },
    branchList: [
      {
        title: "我去過的地方",
        path: "/settings/your_data/locations",
      },
      {
        title: "將位置信息添加到帖子",
        path: "/settings/location",
      },
      {
        title: "探索設置",
        path: "/settings/location",
      },
    ],
  },
  NotificationFilterPage: {
    pageTitle: "篩選",
    description: "選擇您想查看和不想查看的通知。",
    list: [
      {
        type: "checkbox",
        selector: getQualityFilter,
        comp: {
          text: "質量篩選",
          reducer: setQualityFilter,
        },
        description:
          "選擇後，將過濾重複內容和自動發佈的內容。這不適用於您關注或最近互動的帳戶的通知。",
      },
      {
        type: "card",
        comp: {
          title: "靜音通知",
          path: "/settings/notifications/advanced_filters",
        },
      },
    ],
  },
  AccessibilityPage: {
    pageTitle: "輔助功能",
    description:
      "管理您的PlayGround用戶體驗，例如色彩對比和動畫限制。這些設置適用於此瀏覽器上的所有PlayGround帳戶。",
    list: [
      {
        title: "視覺輔助",
        type: "checkbox",
        selector: getColorContrast,
        comp: {
          text: "提高色彩對比度",
          reducer: setColorContrast,
        },
        description: "通過提高文字與背景色的對比度來提升可讀性。",
      },
      {
        title: "動作",
        type: "checkbox",
        selector: getReduceMotion,
        comp: {
          text: "減少動畫效果",
          reducer: setReduceMotion,
        },
        description: "減少應用程序內的動畫效果，包括直播參與人數顯示。",
      },
      {
        type: "card",
        comp: {
          title: "自動播放",
          expl: "使用蜂窩數據或Wi-Fi時",
          path: "/settings/autoplay",
        },
      },
      {
        title: "媒體",
        type: "checkbox",
        selector: getAddImgExpl,
        comp: {
          text: "接收圖片描述通知",
          reducer: setAddImgExpl,
        },
        description: "在發送帖子之前，會收到添加圖片描述的通知。",
      },
    ],
  },
  LanguagesPage: {
    pageTitle: "語言",
    description: "管理用於自定義用戶體驗的語言。",
    list: [
      {
        title: "顯示語言",
        detail: "選擇PG標題、按鈕和其他文本所使用的主要語言。",
        type: "card",
        comp: {
          title: "顯示語言",
          expl: "韓語",
          path: "/settings/language",
        },
      },
      {
        title: "選擇其他語言",
        detail: "選擇您希望在PG上顯示的內容的其他語言。",
        type: "card",
        comp: {
          title: "其他語言",
          path: "/i/flow/language_selector",
        },
      },
      {
        title: "已知語言",
        detail:
          "管理PG根據您的活動（如您關注的賬號和您互動過的帖子）推斷出的語言。",
        type: "card",
        comp: {
          title: "已知語言",
          path: "/settings/your_twitter_data/language",
        },
      },
    ],
  },
  DataPage: {
    pageTitle: "數據使用量",
    description: "PG會限制在此設備上使用的部分網絡數據。",
    list: [
      {
        type: "checkbox",
        selector: getDataSaver,
        comp: {
          text: "數據節省器",
          reducer: setDataSaver,
        },
        description: "選擇此選項將減少PG使用的網絡數據。",
      },
      {
        type: "card",
        comp: {
          title: "自動播放",
          expl: "使用蜂窩數據或Wi-Fi時",
          path: "/settings/autoplay",
        },
      },
    ],
  },
  AutoplayPage: {
    pageTitle: "自動播放",
    item: {
      text: "自動播放",
      detail: "選擇是否在此設備上自動播放視頻和GIF。",
      type: "checkboxlist",
      selector: getAutoplay,
      comp: [
        {
          text: "使用蜂窩數據或Wi-Fi時",
          reducer: setAutoplay,
          value: "on",
        },
        {
          text: "不使用",
          reducer: setAutoplay,
          value: "off",
        },
      ],
    },
  },
  LocationPage: {
    pageTitle: "將位置信息添加到帖子",
    description: "啟用後，可以將位置信息附加到您的帖子中。",
    item: {
      type: "checkbox",
      selector: getAddLocationInfo,
      comp: {
        text: "將位置信息添加到帖子",
        reducer: setAddLocationInfo,
      },
    },
    hyperlink: "刪除帖子中添加的所有位置信息。",
  },
  NotificationAdvancedFilters: {
    pageTitle: "靜音通知",
    list: [
      {
        title: "靜音以下帳戶的通知:",
        type: "checkbox",
        selector: getMuteNotFollowing,
        comp: {
          text: "我未關注的帳戶",
          reducer: setMuteNotFollowing,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNotFollower,
        comp: {
          text: "未關注我的帳戶",
          reducer: setMuteNotFollower,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNewAccount,
        comp: {
          text: "新帳戶",
          reducer: setMuteNewAccount,
        },
      },
      {
        type: "checkbox",
        selector: getMuteDefaultProfile,
        comp: {
          text: "使用默認頭像的帳戶",
          reducer: setMuteDefaultProfile,
        },
      },
      {
        type: "checkbox",
        selector: getMuteEmailAuthenticated,
        comp: {
          text: "未驗證郵箱的帳戶",
          reducer: setMuteEmailAuthenticated,
        },
      },
      {
        type: "checkbox",
        selector: getMutePhoneAuthenticated,
        comp: {
          text: "未驗證手機號碼的帳戶",
          reducer: setMutePhoneAuthenticated,
        },
        description: "此過濾器不影響我關注的人的通知。",
      },
    ],
  },
  LoginVerficationPage: {
    pageTitle: "二步驟驗證",
    list: [
      {
        title: "二步驟驗證",
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "簡訊",
          reducer: setTwoFactorAuthentication,
          value: "sms",
        },
        description: "登錄PG時，您將收到包含驗證代碼的簡訊。",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "認證應用程式",
          reducer: setTwoFactorAuthentication,
          value: "app",
        },
        description: "使用移動認證應用程式，每次登錄PG時接收驗證代碼。",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "安全密鑰",
          reducer: setTwoFactorAuthentication,
          value: "key",
        },
        description:
          "登錄PG時，使用輸入到計算機中或與移動設備同步的安全密鑰。需要使用支援的移動設備或網頁瀏覽器。",
        top: true,
      },
    ],
  },
  IdVerficationPage: {
    pageTitle: "ID驗證",
    description:
      "驗證您的身份證以保護帳戶免受冒充，並在個人資料中顯示ID驗證標籤。",
    list: [
      {
        type: "checkbox",
        selector: getHideLabel,
        comp: {
          text: "隱藏ID驗證標籤",
          reducer: setHideLabel,
        },
        description:
          "當其他人在我的個人資料頁面點擊藍色勾號時，隱藏ID驗證標籤。",
        disabled: true,
      },
      {
        type: "link",
        comp: {
          text: "帮助中心",
          path: "https://help.x.com/ko/rules-and-policies/verification-policy",
        },
      },
    ],
  },
  GenderPage: {
    pageTitle: "性別",
    description:
      "如果未指定性別，可能會根據您的帳戶資料和活動推測性別。此資訊不會公開顯示。",
    list: [
      {
        type: "checkbox",
        comp: {
          text: "女性",
          value: "f",
        },
      },
      {
        type: "checkbox",
        comp: {
          text: "男性",
          value: "m",
        },
      },
    ],
    item: {
      type: "checkbox",
      comp: {
        text: "新增性別",
        value: false,
      },
    },
    input: {
      fieldTitle: "性別",
    },
    button: {
      text: "儲存",
    },
  },
  ScreenNamePage: {
    pageTitle: "更改使用者名稱",
    input: {
      fieldTitle: "使用者ID",
      validation: regExp.userId.default,
    },
    title: "推薦",
    button: {
      text: "儲存",
    },
    validations: [
      {
        regExp: regExp.userId.countError,
        msg: "使用者ID必須介於4至15個字元之間。",
      },
      {
        regExp: regExp.userId.typeError,
        msg: "使用者ID只能包含大小寫字母和數字。",
      },
      {
        regExp: regExp.userId.numberError,
        msg: "使用者ID必須至少包含一個大小寫字母。",
      },
    ],
  },
  PhonePage: {
    pageTitle: "更改手機號碼",
    addPhone: "添加手機號碼",
  },
  EmailPage: {
    pageTitle: "更改電子郵件",
    input: {
      fieldTitle: "當前電子郵件",
    },
  },
  LanguagePage: {
    pageTitle: "更改顯示語言",
    description:
      "選擇此帳戶中PG標題、按鈕和其他文字的預設語言。這不會更改時間軸中顯示的內容語言。",
  },
  AgePage: {
    pageTitle: "年齡",
    description: "推特推測的您的年齡範圍。",
    info: "資訊是否有誤？您可以在不公開資訊的情況下將生日新增至個人檔案。",
  },
  PasswordPage: {
    pageTitle: "更改密碼",
    fieldTitle1: "當前密碼",
    hyperlink: "忘記密碼？",
    fieldTitle2: "新密碼",
    fieldTitle3: "確認密碼",
    validation: regExp.password.default,
    validations: [
      {
        regExp: regExp.password.countError,
        msg: "密碼長度需為8至20字元。",
      },
      {
        regExp: regExp.password.typeError,
        msg: "密碼必須至少包含一個大寫字母、一個特殊字元和一個數字。",
      },
    ],
    button: {
      text: "保存",
    },
  },
  DownloadDataPage: {
    pageTitle: "下載您的數據檔案",
    description: "了解存儲在您賬戶中的信息類型。",
    expl1:
      "您可以申請包含賬戶信息、賬戶歷史、應用程序和設備、賬戶活動、興趣和廣告數據記錄的ZIP文件。當您的數據檔案可以下載時，您將收到應用內通知。",
    expl2:
      "您的數據檔案已準備就緒，可以通過桌面瀏覽器下載和查看。此數據將在幾天後過期，請在此之前下載。",
    button: {
      text: "下載數據",
    },
  },
  ConnectedAppsPage: {
    pageTitle: "已連接的應用",
    description:
      "這是連接到您賬戶的應用。您可以查看它們訪問的信息並撤銷訪問權限。",
  },
  SessionsPage: {
    pageTitle: "會話",
    description:
      "會話是指當前使用或曾使用您PG賬戶的設備。這些會話已登錄您的賬戶。您可以退出每個會話。",
    heading1: "當前活動會話",
    expl1: "此設備已登錄此PG賬戶，並且當前正在使用中。",
    heading2: "退出其他會話",
    expl2: "此賬戶已登錄此設備，但當前未在使用。",
    expl3: "退出登錄將結束其他4個活動PG會話。這不會影響您當前的活動會話。",
    hyperlink: "退出所有其他會話",
  },
  LoginHistoryPage: {
    pageTitle: "帳戶訪問記錄",
    description: (
      <>
        如果應用程式中檢測到可疑活動，請從{" "}
        <HyperLink text="已連接應用" path="/settings/connected_app" />
        阻止訪問。基於IP的位置信息可能與實際位置不同。
      </>
    ),
    heading1: "驗證您的密碼。",
    expl1: "請輸入密碼以繼續。",
    fieldTitle: "密碼",
    hyperlink: "忘記密碼？",
    button: {
      text: "確認",
    },
  },
  DevicesPage: {
    pageTitle: "已登錄的裝置和應用",
    heading1: "手機",
    expl1:
      "包括PG用於定制用戶體驗的瀏覽器、裝置和信息，還包括您從未用於登錄X的裝置和瀏覽器，以及與您的PG帳戶關聯的電子郵件地址和電話號碼。",
  },
  ConnectedAccountsPage: {
    pageTitle: "關聯賬戶",
    description: "這些是與您的PG賬戶登錄關聯的社交賬戶。您可以在此禁用訪問。",
  },
  DelegatePage: {
    pageTitle: "委託",
    description: "與您委託角色的人共享帳戶。",
    text: "其他使用者可以邀請我加入他們的帳戶。",
    expl: "啟用此設置以允許其他人邀請您共享他們的帳戶。",
    heading: "我的委託帳戶",
    list: [
      {
        type: "card",
        comp: {
          title: "委託給我的帳戶",
          path: "groups",
        },
      },
      {
        type: "card",
        comp: {
          title: "我委託角色的成員",
          path: "members",
        },
      },
    ],
  },
  DelegateGroupsPage: {
    pageTitle: "委託給我的帳戶",
    description:
      "作為該社群的成員，您可以發送訊息、發布內容、創建和查看列表。此外，管理員可以邀請或移除帳戶參與者，並查看發布分析。",
    empty: "沒有委託給我的帳戶。",
  },
  DelegateMembersPage: {
    pageTitle: "被委託的成員",
    description:
      "邀請其他用戶代表您管理帳戶角色。成員可以發送訊息、發布內容、創建和查看列表。",
    hyperlink: "邀請成員",
    empty: "尚未添加成員。",
  },
  TaggingPage: {
    pageTitle: "照片標籤",
    text: "照片標籤",
    expl: "允許他人在照片中標記我，並在被標記時接收通知。",
    item: {
      type: "checkboxlist",
      selector: getAllowTaggingWhom,
      comp: [
        {
          text: "允許任何人標記我",
          reducer: setAllowTaggingWhom,
          value: "all",
        },
        {
          text: "僅允許我關注的人標記我",
          reducer: setAllowTaggingWhom,
          value: "followers",
        },
      ],
    },
  },
  TopicsPage: {
    pageTitle: "主題",
    tabList: (userId: string) => {
      return [
        {
          text: "已追蹤",
          path: `/${userId}/topics`,
          value: "",
        },
        {
          text: "不感興趣",
          path: `/${userId}/topics/not_interested`,
          value: "not",
        },
      ];
    },
  },
  BlockedAllPage: {
    pageTitle: "已封鎖的帳號",
    tabList: [
      {
        text: "全部",
        path: "",
        value: "",
      },
      {
        text: "已匯入",
        path: "/settings/blocked/imported",
        value: "imported",
      },
    ],
    description:
      "封鎖用戶後，他們將無法關注您、向您發送消息或出現在您的通知中。",
  },
  MutedAllPage: {
    pageTitle: "已靜音的帳號",
    description: "所有已靜音的用戶都將顯示在此處。您可以從列表中添加或刪除。",
  },
  MutedKeywordsPage: {
    pageTitle: "已靜音的關鍵字",
    empty: {
      heading: "新增靜音關鍵字",
      expl: "靜音關鍵字後，包含該關鍵字的帖子將不會出現在您的主頁時間軸上，您也不會收到相關通知。",
    },
  },
  AddMutedKeywordsPage: {
    pageTitle: "新增靜音關鍵字",
    expl: "您可以一次靜音一個項目：單詞、短語、@用戶名或標籤。",
    heading1: "靜音範圍",
    item1: {
      type: "checkbox",
      comp: {
        text: "主頁時間軸",
      },
    },
    item2: {
      type: "toggle",
      comp: {
        text: "通知",
      },
    },
    item3: {
      type: "checkboxlist",
      comp: [
        {
          text: "所有用戶",
          value: "all",
        },
        {
          text: "我未關注的人",
          value: "notFollowing",
        },
      ],
    },
    heading2: "時長",
    item4: {
      type: "checkboxlist",
      comp: [
        {
          text: "直到取消靜音此單字",
          value: "forever",
        },
        {
          text: "24小時",
          value: "24h",
        },
        {
          text: "7天",
          value: "7d",
        },
        {
          text: "30天",
          value: "30d",
        },
      ],
    },
    button: {
      text: "儲存",
    },
  },
  ContactsDashboardPage: {
    pageTitle: "管理聯絡人",
    hyperlink1: "刪除所有聯絡人",
    expl: "這些是從您的行動裝置匯入的聯絡人。這些資訊用於個性化您的PG體驗，例如推薦要關注的帳戶。您可以刪除先前上傳的聯絡人，並停用所有裝置與PG的同步。此過程可能需要一些時間。",
    heading: "驗證您的密碼",
    inputFieldTitle: "密碼",
    hyperlink2: "忘記密碼了嗎？",
  },
  InterestsPage: {
    pageTitle: "興趣",
    description:
      "這些興趣是根據您的個人資料、活動以及您關注的主題提供的。此資訊用於個性化PG整體體驗，包括廣告。如果興趣不適合，您可以進行調整（更改可能需要一些時間才能生效）。",
  },
  AudiencesPage: {
    pageTitle: "我的廣告商列表",
  },
  LocationsPage: {
    pageTitle: "我曾經訪問過的地方",
    verification: {
      description: "請輸入密碼以繼續。",
      inputFieldTitle: "密碼",
      hyperlink: "忘記密碼了嗎？",
      button: {
        text: "確認",
      },
    },
    verified: {
      description:
        "PG 使用這些位置來顯示更相關的內容。如果關閉「根據訪問地點個性化」，此處將不會顯示列出的地點。",
      empty: {
        heading: "此設置已關閉。",
        expl: (
          <>
            在{" "}
            <HyperLink text="位置設定" path="/settings/location_information" />
            中啟用此功能。
          </>
        ),
      },
    },
  },
  EmailNotificationsPage: {
    pageTitle: "電子郵件通知",
    toggle: {
      text: "電子郵件通知",
      expl: "通過電子郵件隨時瞭解您不在時PG發生的事情。您可以隨時關閉此設置。",
    },
    postList: [
      {
        title: "關於我或我的帖子",
        type: "checkbox",
        selector: getEmailNotificationsNewNotification,
        comp: {
          text: "新通知",
          reducer: setEmailNotificationsNewNotification,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsMessages,
        comp: {
          text: "消息",
          reducer: setEmailNotificationsMessages,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPostsSentByEmail,
        comp: {
          text: "通過電子郵件發送給我的帖子",
          reducer: setEmailNotificationsPostsSentByEmail,
        },
      },
      {
        type: "checkboxlist",
        text: "熱門帖子和故事",
        selector: getEmailNotificationsPopularPosts,
        comp: [
          {
            text: "每日發送",
            reducer: setEmailNotificationsPopularPosts,
            value: "daily",
          },
          {
            text: "每週發送",
            reducer: setEmailNotificationsPopularPosts,
            value: "weekly",
          },
          {
            text: "頻繁發送",
            reducer: setEmailNotificationsPopularPosts,
            value: "frequently",
          },
          {
            text: "關閉",
            reducer: setEmailNotificationsPopularPosts,
            value: "off",
          },
        ],
      },
    ],
    heading2: "來自PG的通知",
    pgList: [
      {
        title: "來自PG的通知",
        type: "checkbox",
        selector: getEmailNotificationsPGUpdates,
        comp: {
          text: "PG服務和功能更新",
          reducer: setEmailNotificationsPGUpdates,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPGTips,
        comp: {
          text: "充分利用PG的提示",
          reducer: setEmailNotificationsPGTips,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPGLatest,
        comp: {
          text: "自上次登錄以來發生的事情",
          reducer: setEmailNotificationsPGLatest,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPGPartners,
        comp: {
          text: "關於PG的合作夥伴產品和第三方服務的新聞",
          reducer: setEmailNotificationsPGPartners,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPGSurvey,
        comp: {
          text: "充分利用PG的提示",
          reducer: setEmailNotificationsPGSurvey,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPGRecommend,
        comp: {
          text: "推薦賬戶建議",
          reducer: setEmailNotificationsPGRecommend,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPGRecentFollowings,
        comp: {
          text: "基於最近關注的推薦",
          reducer: setEmailNotificationsPGRecentFollowings,
        },
      },
      {
        type: "checkbox",
        selector: getEmailNotificationsPGBusiness,
        comp: {
          text: "與PG商業產品相關的提示",
          reducer: setEmailNotificationsPGBusiness,
        },
      },
    ],
  },
  PushNotificationsPage: {
    pageTitle: "推播通知",
    toggle: {
      text: "推播通知",
      expl: "離開時接收PG中發生事情的推播通知。您可以隨時關閉通知。",
    },
    empty: {
      title: "開啟推播通知",
      expl: "通過推播通知，實時接收發生的事情。即使未登入PG，您也能收到通知。通知隨時可以關閉。",
    },
    button: {
      text: "開啟",
    },
    list: [
      {
        title: "關於我或我的帖子",
        type: "checkbox",
        selector: getPushNotificationsPosts,
        comp: {
          text: "帖子",
          reducer: setPushNotificationsPosts,
        },
        description:
          "當您開啟關於我關注的人的帖子通知時，您將收到他們的帖子或直播視頻的通知。",
      },
      {
        text: "提及和回覆",
        type: "checkboxlist",
        selector: getPushNotificationsReplies,
        comp: [
          {
            text: "自訂設定",
            reducer: setPushNotificationsReplies,
            value: "custom",
          },
          {
            text: "所有人",
            reducer: setPushNotificationsReplies,
            value: "all",
          },
          {
            text: "關閉",
            reducer: setPushNotificationsReplies,
            value: "off",
          },
        ],
      },
      {
        text: "轉發",
        type: "checkboxlist",
        selector: getPushNotificationsReposts,
        comp: [
          {
            text: "自訂設定",
            reducer: setPushNotificationsReposts,
            value: "custom",
          },
          {
            text: "所有人",
            reducer: setPushNotificationsReposts,
            value: "all",
          },
          {
            text: "關閉",
            reducer: setPushNotificationsReposts,
            value: "off",
          },
        ],
      },
      {
        text: "讚",
        type: "checkboxlist",
        selector: getPushNotificationsLikes,
        comp: [
          {
            text: "自訂設定",
            reducer: setPushNotificationsLikes,
            value: "custom",
          },
          {
            text: "所有人",
            reducer: setPushNotificationsLikes,
            value: "all",
          },
          {
            text: "關閉",
            reducer: setPushNotificationsLikes,
            value: "off",
          },
        ],
      },
      {
        type: "checkbox",
        selector: getPushNotificationsPhotoTags,
        comp: {
          text: "照片標籤",
          reducer: setPushNotificationsPhotoTags,
        },
      },
      {
        type: "checkbox",
        selector: getPushNotificationsMessages,
        comp: {
          text: "訊息",
          reducer: setPushNotificationsMessages,
        },
      },
      {
        text: "訊息反應",
        type: "checkboxlist",
        selector: getPushNotificationsReplyMessage,
        comp: [
          {
            text: "我的訊息",
            reducer: setPushNotificationsReplyMessage,
            value: "mine",
          },
          {
            text: "所有使用者的訊息",
            reducer: setPushNotificationsReplyMessage,
            value: "all",
          },
          {
            text: "關閉",
            reducer: setPushNotificationsReplyMessage,
            value: "off",
          },
        ],
      },
      {
        type: "checkbox",
        selector: getPushNotificationsJoinPplInContacts,
        comp: {
          text: "我聯絡人的使用者加入PG",
          reducer: setPushNotificationsJoinPplInContacts,
        },
      },
      {
        type: "checkbox",
        title: "PG中的通知",
        selector: getPushNotificationsTopics,
        comp: {
          text: "話題",
          reducer: setPushNotificationsTopics,
        },
      },
      {
        type: "checkbox",
        selector: getPushNotificationsNewsAndSports,
        comp: {
          text: "新聞/體育",
          reducer: setPushNotificationsNewsAndSports,
        },
      },
      {
        type: "checkbox",
        selector: getPushNotificationsRecommend,
        comp: {
          text: "推薦",
          reducer: setPushNotificationsRecommend,
        },
      },
      {
        type: "checkbox",
        selector: getPushNotificationsMoments,
        comp: {
          text: "時刻",
          reducer: setPushNotificationsMoments,
        },
      },
      {
        type: "checkbox",
        selector: getPushNotificationsLives,
        comp: {
          text: "直播",
          reducer: setPushNotificationsLives,
        },
      },
      {
        type: "checkbox",
        selector: getPushNotificationsOtherLives,
        comp: {
          text: "其他即時直播",
          reducer: setPushNotificationsOtherLives,
        },
      },
      {
        type: "checkbox",
        selector: getPushNotificationsAlertAndAgent,
        comp: {
          text: "危機及緊急通知",
          reducer: setPushNotificationsAlertAndAgent,
        },
      },
      {
        type: "checkbox",
        title: "專業用PG",
        selector: getPushNotificationsProfessional,
        comp: {
          text: "專業通知",
          reducer: setPushNotificationsProfessional,
        },
      },
    ],
  },
};

export default pages;

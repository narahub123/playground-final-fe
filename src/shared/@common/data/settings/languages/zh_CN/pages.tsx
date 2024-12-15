import { countryNamesZhCN } from "@shared/@common/data/countries";
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
        title: "隐私与安全",
        path: "privacy_and_safety",
      },
      {
        title: "通知",
        path: "notifications",
      },
      {
        title: "辅助功能、显示与语言",
        path: "accessibility_display_and_languages",
      },
      {
        title: "盈利",
        path: "monetization",
      },
      {
        title: "更多资源",
        path: "about",
      },
    ],
  },
  AccountPage: {
    pageTitle: "账户",
    description: "查看账户信息，下载数据记录，了解账户停用选项。",
    branchList: [
      {
        title: "账户信息",
        expl: "查看账户信息，如手机号和邮箱地址。",
        path: "/settings/your_data/account",
        icon: "user",
      },
      {
        title: "更改密码",
        expl: "随时更改您的密码。",
        path: "/settings/password",
        icon: "key",
      },
      {
        title: "下载数据记录",
        expl: "了解存储在账户中的数据类型。",
        path: "/settings/download_data",
        icon: "download",
      },
      {
        title: "停用账户",
        expl: "了解如何停用账户。",
        path: "/settings/deactivate",
        icon: "crackedHeart",
      },
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "安全和账户访问权限",
    description: "管理账户安全，追踪包括已连接应用在内的账户使用情况。",
    branchList: [
      {
        title: "安全",
        expl: "管理账户的安全设置。",
        path: "/settings/security",
        icon: "lock",
      },
      {
        title: "应用与会话",
        expl: "查看登录账户和已连接应用的相关信息。",
        path: "/settings/apps_and_sessions",
        icon: "apps",
      },
      {
        title: "已连接账户",
        expl: "管理用于登录PlayGround的Google、Naver或Kakao账户。",
        path: "/settings/connected_accounts",
        icon: "twoWay",
      },
      {
        title: "委托",
        expl: "管理共享账户。",
        path: "/settings/delegate",
        icon: "delegate",
      },
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "隐私与安全",
    description: "管理在PlayGround中显示和分享的信息。",
    branchList: [
      {
        title: "受众、媒体与标签",
        expl: "管理您在X中公开的信息。",
        path: "/settings/audience_and_tagging",
        icon: "users",
      },
      {
        title: "我的帖子",
        expl: "管理与帖子相关的信息。",
        path: "/settings/your_posts",
        icon: "penLine",
      },
      {
        title: "显示的内容",
        expl: "根据您的主题和兴趣偏好，决定PlayGround中显示的内容。",
        path: "/settings/content_you_see",
        icon: "content",
      },
      {
        title: "静音和屏蔽",
        expl: "管理您静音或屏蔽的账户、关键词和通知。",
        path: "/settings/mute_and_block",
        icon: "mute",
      },
      {
        title: "消息",
        expl: "管理可以向您发送直接消息的对象。",
        path: "/settings/messages",
        icon: "message",
      },
      {
        title: "账户查找与联系人",
        expl: "控制账户查找设置并管理导入的联系人。",
        path: "/settings/contacts",
        icon: "contact",
      },
      {
        title: "广告偏好",
        expl: "管理在PlayGround上的广告设置。",
        path: "/settings/ads_preferences",
        icon: "ads",
      },
      {
        title: "位置信息",
        expl: "管理PlayGround用于个性化环境的位置信息。",
        path: "/settings/location_information",
        icon: "pin",
      },
    ],
  },
  NotificationsPage: {
    pageTitle: "通知",
    description: "选择您想接收的活动、兴趣及推荐通知类型。",
    branchList: [
      {
        title: "过滤器",
        expl: "选择想查看的通知类型以及不想查看的类型。",
        path: "/settings/notifications/filters",
        icon: "filter",
      },
      {
        title: "设置",
        expl: "为每种通知类型选择偏好设置。",
        path: "/settings/notifications/preferences",
        icon: "preferences",
      },
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "辅助功能、显示与语言",
    description: "管理PlayGround的内容显示方式。",
    branchList: [
      {
        title: "辅助功能",
        expl: "管理颜色对比、动画限制等用户体验设置。此设置适用于此浏览器上的所有PlayGround账户。",
        path: "/settings/accessibility",
        icon: "eyeoff",
      },
      {
        title: "显示",
        expl: "管理字体大小、颜色和背景。此设置适用于此浏览器上的所有PlayGround账户。",
        path: "/settings/display",
        icon: "pen",
      },
      {
        title: "语言",
        expl: "管理用于个性化用户体验的语言。",
        path: "/settings/languages",
        icon: "map",
      },
      {
        title: "数据使用",
        expl: "限制PlayGround在此设备上使用的一些网络数据。",
        path: "/settings/data",
        icon: "barChart",
      },
      {
        title: "键盘快捷键",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },
  AppsAndSessionsPage: {
    pageTitle: "应用与会话",
    description: "查看登录账户和已连接应用的相关信息。",
    branchList: [
      {
        title: "已连接应用",
        path: "/settings/connected_apps",
      },
      {
        title: "会话",
        path: "/settings/sessions",
      },
      {
        title: "账户访问记录",
        path: "/settings/login_history",
      },
      {
        title: "已登录设备和应用",
        path: "/settings/devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "静音和屏蔽",
    description: "管理您静音或屏蔽的账户、关键词和通知。",
    branchList: [
      {
        title: "屏蔽的账户",
        path: "/settings/blocked/all",
      },
      {
        title: "静音的账户",
        path: "/settings/muted/all",
      },
      {
        title: "静音的关键词",
        path: "/settings/muted_keywords",
      },
      {
        title: "静音通知",
        path: "/settings/notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "设置",
    description: "为每种通知类型选择偏好设置。",
    branchList: [
      {
        title: "推送通知",
        path: "/settings/push_notifications",
      },
      {
        title: "邮件通知",
        path: "/settings/email_notifications",
      },
    ],
  },
  SecurityPage: {
    pageTitle: "安全",
    description: "管理账户的安全性。",
    list: [
      {
        title: "两步验证",
        type: "card",
        comp: {
          title: "两步验证",
          path: "/settings/account/login_verification",
        },
        description:
          "通过要求除了PlayGround密码之外的第二种验证方法，保护您的账户免受未经授权的访问。您可以选择短信、认证应用或安全密钥。",
      },
      {
        title: "身份验证",
        type: "card",
        comp: {
          title: "身份验证",
          path: "/settings/account/id_verification",
        },
        description:
          "上传批准格式的身份证明以验证账户的真实性。您提供的信息仅用于身份验证，并将被安全处理。",
      },
      {
        title: "密码重置",
        type: "checkbox",
        comp: {
          text: "保护密码重置",
          reducer: setBackgroundTheme,
          initialValue: false,
        },
        description:
          "作为额外的保护措施，您需要验证您的电子邮件地址或电话号码才能重置PlayGround密码。",
      },
    ],
  },
  AccountInfoPage: {
    pageTitle: "账户信息",
    branchList: (user: UserType & SettingsType) => [
      // 사용자 아이디
      {
        title: "用户ID",
        path: "/settings/screen_name",
        expl: `@${user.userId}`,
      },
      // 휴대폰
      {
        title: "手机",
        path: "/settings/phone",
      },
      // 이메일
      {
        title: "电子邮件",
        path: "/settings/email",
        expl: user.email,
      },
      // 인증 여부
      {
        title: "认证状态",
        path: "",
        expl: user.isAuthenticated ? "已认证" : "未认证",
      },
      // 비공개 게시물
      {
        title: "私人帖子",
        path: "/settings/audience_and_tagging",
        expl: user.isVisible ? "是" : "否",
      },
      // 계정 생성
      {
        title: "账户创建",
        path: "",
        expl: user.regDate.toLocaleString(),
      },
      // 국가
      {
        title: "国家",
        path: "/settings/country",
        expl: countryNamesZhCN[
          user.language
            .split("-")[1]
            .toLowerCase() as keyof typeof countryNamesZhCN
        ],
      },
      // 언어
      {
        title: "语言",
        path: "/settings/languages",
        expl: getLangName(user.language)?.text,
      },
      // 성별
      {
        title: "性别",
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
        title: "年龄",
        path: "/settings/your_data/age",
        expl: calculateAge(user.birth),
      },
      // 자동화
      {
        title: "自动化",
        path: "automation",
        expl: "管理自动化账户。",
      },
    ],
  },
  DeactivatePage: {
    pageTitle: "停用账号",
    section1: {
      title: "您的账号将被停用。",
      description:
        "开始停用PlayGround账号的流程。您的显示名称、@用户名和公开个人资料将不再显示在PlayGround.com、适用于iOS的PlayGround或适用于Android的PlayGround上。",
    },
    section2: {
      title: "还有哪些需要了解的内容",
      list: [
        "如果因误操作或不小心停用了PlayGround账号，您可以在30天内恢复。",
        "部分账号信息可能仍可通过Google或Bing等搜索引擎访问。",
        <>
          您无需停用账号即可更改@用户名。{" "}
          <HyperLink text="设置" path="/settings/password" out={false} />
          中更新用户名。
        </>,
        <>
          如果希望将当前的@用户名或电子邮箱地址用于其他PlayGround账号，请在停用此账号之前{" "}
          <HyperLink
            text="更改"
            path="/settings/your_data/account"
            out={false}
          />
          这些信息。
        </>,
        "若要下载您的PlayGround数据，请务必在停用账号之前完成请求和下载过程。无法向已停用的账号发送数据下载链接。",
      ],
    },
    deactivate: {
      text: "停用",
    },
  },
  AudienceAndTaggingPage: {
    pageTitle: "受众、媒体和标记",
    description: "管理您在PlayGround上与他人共享的信息。",
    list: [
      {
        title: "",
        type: "checkbox",
        selector: getIsPrivate,
        comp: {
          text: "将我的帖子设置为私密",
          reducer: setIsPrivate,
        },
        description: "选中后，只有关注我的人才能查看我的帖子和其他账户信息。",
      },
      {
        title: "",
        type: "checkbox",
        selector: getProtectVideo,
        comp: {
          text: "保护视频",
          reducer: setProtectVideo,
        },
        description:
          "启用后，帖子中的视频默认无法下载。此设置适用于未来的帖子，不适用于过去的内容。",
      },
      {
        title: "",
        type: "card",
        comp: {
          title: "照片标记",
          path: "/settings/tagging",
          expl: "允许任何人标记我",
        },
        description: "",
      },
    ],
  },
  YourPostsPage: {
    pageTitle: "我的帖子",
    description: "管理与帖子相关的信息。",
    list: [
      {
        type: "checkbox",
        selector: getTagSensitiveMedia,
        comp: {
          text: "将您发布的媒体标记为可能包含敏感内容",
          reducer: setTagSensitiveMedia,
        },
        description:
          "启用后，您发布的照片和视频将被标记为敏感内容，供不想看到敏感内容的人查看。",
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
    pageTitle: "显示的内容",
    description:
      "根据用户的偏好，如主题和兴趣，决定在 PlayGround 上显示的信息。",
    checkboxItem: {
      type: "checkbox",
      selector: getDisplaySensitiveMedia,
      comp: {
        text: "显示可能包含敏感内容的媒体",
        reducer: setDisplaySensitiveMedia,
      },
    },
    branchList: (user: UserType) => [
      {
        title: "主题",
        path: `/${user.userId}/topics`,
      },
      {
        title: "兴趣",
        path: `/settings/your_data/your_interests`,
      },
      {
        title: "探索设置",
        path: `/settings/explore`,
      },
      {
        title: "搜索设置",
        path: `/settings/search`,
      },
    ],
  },
  MessageSettingPage: {
    pageTitle: "消息",
    list: [
      {
        text: "允许以下用户的消息请求",
        detail: "您始终可以接收您关注的用户发送的消息。",
        type: "checkboxlist",
        selector: getAllowMessages,
        comp: [
          {
            text: "不接收",
            reducer: setAllowMessages,
            value: "none",
          },
          {
            text: "已认证用户",
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
          text: "过滤低质量消息",
          reducer: setHideMessages,
        },
        description:
          "隐藏被识别为垃圾邮件或包含低质量内容的消息请求。这些请求将被发送到消息请求列表底部的单独收件箱中。如果需要，您仍然可以查看。",
        top: true,
        disabled: true,
      },
      {
        title: "",
        type: "checkbox",
        selector: getShowRead,
        comp: {
          text: "显示已读回执",
          reducer: setShowRead,
        },
        description:
          "允许发送消息的人知道您何时已阅读消息。已读回执不会显示在消息请求中。",
        top: true,
      },
    ],
  },
  ContactsPage: {
    pageTitle: "查找账户和联系人",
    description: "控制账户查找设置并管理导入的联系人。",
    list: [
      {
        title: "可搜索性",
        detail:
          "决定是否允许知道您的邮箱地址或手机号码的人在PG上找到并联系您。",
        type: "checkbox",
        selector: getFindByEmail,
        comp: {
          text: "允许知道我邮箱地址的人在PG上找到我",
          reducer: setFindByEmail,
        },
        description: "允许知道您邮箱地址的人在PG上找到并联系您。",
      },
      {
        type: "checkbox",
        selector: getFindByPhone,
        comp: {
          text: "允许知道我手机号码的人在PG上找到我",
          reducer: setFindByPhone,
        },
        description: "允许知道您手机号码的人在PG上找到并联系您。",
      },
      {
        title: "联系人",
        detail: "管理从移动设备导入的联系人。",
        type: "card",
        comp: {
          title: "管理联系人",
          path: "/settings/contacts_dashboard",
        },
        top: true,
      },
    ],
  },
  AdsPreferencesPage: {
    pageTitle: "广告偏好",
    description: "管理PlayGround上的广告设置。",
    checkbox: {
      type: "checkbox",
      selector: getAllowBehavioralAds,
      comp: {
        text: "个性化广告",
        reducer: setAllowBehavioralAds,
      },
      description:
        "您将始终看到基于您在PlayGround上的活动的广告。启用此设置后，PlayGround可以通过将您的PlayGround活动与合作伙伴提供的其他在线活动和信息相结合，在PlayGround内外个性化PlayGround广告主的广告。",
    },
    branchList: [
      {
        title: "兴趣",
        path: "/settings/your_twitter_data/twitter_interests",
      },
      {
        title: "广告主列表",
        path: "/settings/your_twitter_data/audiences",
      },
    ],
  },
  LocationInfoPage: {
    pageTitle: "位置信息",
    description: "管理用于在PlayGround上个性化体验的位置信息。",
    checkbox: {
      type: "checkbox",
      selector: getAllowLocationAds,
      comp: {
        text: "基于我去过的地方进行个性化",
        reducer: setAllowLocationAds,
      },
      description:
        "PlayGround始终使用例如我注册的地点或当前位置等信息来提供个性化内容。启用此设置后，可以通过我去过的地方来提供个性化内容。",
    },
    branchList: [
      {
        title: "我去过的地方",
        path: "/settings/your_twitter_data/locations",
      },
      {
        title: "将位置信息添加到帖子",
        path: "/settings/location",
      },
      {
        title: "探索设置",
        path: "/settings/location",
      },
    ],
  },
  NotificationFilterPage: {
    pageTitle: "筛选",
    description: "选择您想查看和不想查看的通知。",
    list: [
      {
        type: "checkbox",
        selector: getQualityFilter,
        comp: {
          text: "质量筛选",
          reducer: setQualityFilter,
        },
        description:
          "选择后，将过滤重复内容和自动发布的内容。这不适用于您关注或最近互动的帐户的通知。",
      },
      {
        type: "card",
        comp: {
          title: "静音通知",
          path: "/settings/notifications/advanced_filters",
        },
      },
    ],
  },
  AccessibilityPage: {
    pageTitle: "辅助功能",
    description:
      "管理您的PlayGround用户体验，例如色彩对比和运动限制。这些设置适用于此浏览器上的所有PlayGround账户。",
    list: [
      {
        title: "视觉辅助",
        type: "checkbox",
        selector: getColorContrast,
        comp: {
          text: "增强色彩对比度",
          reducer: setColorContrast,
        },
        description: "通过增强文本与背景色的对比度提高可读性。",
      },
      {
        title: "动作",
        type: "checkbox",
        selector: getReduceMotion,
        comp: {
          text: "减少动画效果",
          reducer: setReduceMotion,
        },
        description: "减少应用程序内的动画，包括直播参与人数显示。",
      },
      {
        type: "card",
        comp: {
          title: "自动播放",
          expl: "使用蜂窝数据或Wi-Fi时",
          path: "/settings/autoplay",
        },
      },
      {
        title: "媒体",
        type: "checkbox",
        selector: getAddImgExpl,
        comp: {
          text: "接收图片描述通知",
          reducer: setAddImgExpl,
        },
        description: "在发送帖子之前，会收到添加图片描述的通知。",
      },
    ],
  },
  LanguagesPage: {
    pageTitle: "语言",
    description: "管理用于定制用户体验的语言。",
    list: [
      {
        title: "显示语言",
        detail: "选择PG标题、按钮和其他文本所使用的主要语言。",
        type: "card",
        comp: {
          title: "显示语言",
          expl: "韩语",
          path: "/settings/language",
        },
      },
      {
        title: "选择其他语言",
        detail: "选择您希望在PG上显示的内容的其他语言。",
        type: "card",
        comp: {
          title: "其他语言",
          path: "/i/flow/language_selector",
        },
      },
      {
        title: "已知语言",
        detail:
          "管理PG根据您的活动（如您关注的账号和您互动过的帖子）推断出的语言。",
        type: "card",
        comp: {
          title: "已知语言",
          path: "/settings/your_twitter_data/language",
        },
      },
    ],
  },
  DataPage: {
    pageTitle: "数据使用量",
    description: "PG会限制在此设备上使用的部分网络数据。",
    list: [
      {
        type: "checkbox",
        selector: getDataSaver,
        comp: {
          text: "数据节省器",
          reducer: setDataSaver,
        },
        description: "选择此选项将减少PG使用的网络数据。",
      },
      {
        type: "card",
        comp: {
          title: "自动播放",
          expl: "使用蜂窝数据或Wi-Fi时",
          path: "/settings/autoplay",
        },
      },
    ],
  },
  AutoplayPage: {
    pageTitle: "自动播放",
    item: {
      text: "自动播放",
      detail: "选择是否在此设备上自动播放视频和GIF。",
      type: "checkboxlist",
      selector: getAutoplay,
      comp: [
        {
          text: "使用蜂窝数据或Wi-Fi时",
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
    pageTitle: "将位置信息添加到帖子",
    description: "启用后，可以将位置信息附加到您的帖子中。",
    item: {
      type: "checkbox",
      selector: getAddLocationInfo,
      comp: {
        text: "将位置信息添加到帖子",
        reducer: setAddLocationInfo,
      },
    },
    hyperlink: "删除帖子中添加的所有位置信息。",
  },
  NotificationAdvancedFilters: {
    pageTitle: "静音通知",
    list: [
      {
        title: "静音以下帐户的通知:",
        type: "checkbox",
        selector: getMuteNotFollowing,
        comp: {
          text: "我未关注的帐户",
          reducer: setMuteNotFollowing,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNotFollower,
        comp: {
          text: "未关注我的帐户",
          reducer: setMuteNotFollower,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNewAccount,
        comp: {
          text: "新帐户",
          reducer: setMuteNewAccount,
        },
      },
      {
        type: "checkbox",
        selector: getMuteDefaultProfile,
        comp: {
          text: "使用默认头像的帐户",
          reducer: setMuteDefaultProfile,
        },
      },
      {
        type: "checkbox",
        selector: getMuteEmailAuthenticated,
        comp: {
          text: "未验证邮箱的帐户",
          reducer: setMuteEmailAuthenticated,
        },
      },
      {
        type: "checkbox",
        selector: getMutePhoneAuthenticated,
        comp: {
          text: "未验证手机号码的帐户",
          reducer: setMutePhoneAuthenticated,
        },
        description: "此过滤器不影响我关注的人的通知。",
      },
    ],
  },
  LoginVerficationPage: {
    pageTitle: "二步验证",
    list: [
      {
        title: "二步验证",
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "短信",
          reducer: setTwoFactorAuthentication,
          value: "sms",
        },
        description: "登录PG时，您将收到包含验证代码的短信。",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "认证应用",
          reducer: setTwoFactorAuthentication,
          value: "app",
        },
        description: "使用移动认证应用程序，每次登录PG时接收验证代码。",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "安全密钥",
          reducer: setTwoFactorAuthentication,
          value: "key",
        },
        description:
          "登录PG时，使用一个输入到计算机中或与移动设备同步的安全密钥。需要使用支持的移动设备或网页浏览器。",
        top: true,
      },
    ],
  },
  IdVerficationPage: {
    pageTitle: "ID认证",
    description:
      "通过验证您的身份证来保护账户免遭冒充，并在个人资料中显示ID认证标签。",
    list: [
      {
        type: "checkbox",
        selector: getHideLabel,
        comp: {
          text: "隐藏ID认证标签",
          reducer: setHideLabel,
        },
        description: "当他人在我的个人主页点击蓝色对勾时，不显示ID认证标签。",
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
    pageTitle: "性别",
    description:
      "如果未指定性别，可能会根据您的账户资料和活动推测性别。此信息不会公开显示。",
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
        text: "添加新性别",
        value: false,
      },
    },
    input: {
      fieldTitle: "性别",
    },
    button: {
      text: "保存",
    },
  },
  ScreenNamePage: {
    pageTitle: "更改用户名",
    input: {
      fieldTitle: "用户ID",
      validation: regExp.userId.default,
    },
    title: "推荐",
    button: {
      text: "保存",
    },
    validations: [
      {
        regExp: regExp.userId.countError,
        msg: "用户ID必须在4到15个字符之间。",
      },
      {
        regExp: regExp.userId.typeError,
        msg: "用户ID只能包含大小写字母和数字。",
      },
      {
        regExp: regExp.userId.numberError,
        msg: "用户ID必须包含至少一个大写字母或小写字母。",
      },
    ],
  },
  PhonePage: {
    pageTitle: "更改手机号",
    addPhone: "添加手机号",
  },
  EmailPage: {
    pageTitle: "更改邮箱",
    input: {
      fieldTitle: "当前邮箱",
    },
  },
  LanguagePage: {
    pageTitle: "更改显示语言",
    description:
      "选择此账户中PG标题、按钮和其他文本的默认语言。这不会更改时间线中显示的内容语言。",
  },
  AgePage: {
    pageTitle: "年龄",
    description: "推特推测的您的年龄范围。",
    info: "信息有误吗？您可以在不公开信息的情况下将生日添加到个人资料中。",
  },
  PasswordPage: {
    pageTitle: "更改密码",
    fieldTitle1: "当前密码",
    hyperlink: "忘记密码？",
    fieldTitle2: "新密码",
    fieldTitle3: "确认密码",
    validation: regExp.password.default,
    validations: [
      {
        regExp: regExp.password.countError,
        msg: "密码长度需为8至20字符。",
      },
      {
        regExp: regExp.password.typeError,
        msg: "密码必须至少包含一个大写字母、一个特殊字符和一个数字。",
      },
    ],
    button: {
      text: "保存",
    },
  },
  DownloadDataPage: {
    pageTitle: "下载您的数据档案",
    description: "了解存储在您账户中的信息类型。",
    expl1:
      "您可以申请包含账户信息、账户历史、应用程序和设备、账户活动、兴趣和广告数据记录的ZIP文件。当您的数据档案可以下载时，您将收到应用内通知。",
    expl2:
      "您的数据档案已准备就绪，可以通过桌面浏览器下载和查看。此数据将在几天后过期，请在此之前下载。",
    button: {
      text: "下载数据",
    },
  },
  ConnectedAppsPage: {
    pageTitle: "已连接的应用",
    description:
      "这是连接到您账户的应用。您可以查看它们访问的信息并撤销访问权限。",
  },
  SessionsPage: {
    pageTitle: "会话",
    description:
      "会话是指当前使用或曾使用您PG账户的设备。这些会话已登录您的账户。您可以退出每个会话。",
    heading1: "当前活动会话",
    expl1: "此设备已登录此PG账户，并且当前正在使用中。",
    heading2: "退出其他会话",
    expl2: "此账户已登录此设备，但当前未在使用。",
    expl3: "退出登录将结束其他4个活动PG会话。这不会影响您当前的活动会话。",
    hyperlink: "退出所有其他会话",
  },
  LoginHistoryPage: {
    pageTitle: "账户访问记录",
    description: (
      <>
        如果应用程序中检测到可疑活动，请从{" "}
        <HyperLink text="已连接应用" path="/settings/connected_app" />
        阻止访问。基于IP的位置信息可能与实际位置不同。
      </>
    ),
    heading1: "验证您的密码。",
    expl1: "请输入密码以继续。",
    fieldTitle: "密码",
    hyperlink: "忘记密码？",
    button: {
      text: "确认",
    },
  },
  DevicesPage: {
    pageTitle: "已登录的设备和应用",
    heading1: "手机",
    expl1:
      "包括PG用于定制用户体验的浏览器、设备和信息，还包括您从未用于登录X的设备和浏览器，以及与您的PG帐户关联的电子邮件地址和电话号码。",
  },
  ConnectedAccountsPage: {
    pageTitle: "关联账户",
    description: "这些是与您的PG账户登录关联的社交账户。您可以在此禁用访问。",
  },
  DelegatePage: {
    pageTitle: "委托",
    description: "与您委托角色的人共享账户。",
    text: "其他用户可以邀请我加入他们的账户。",
    expl: "启用此设置以允许其他人邀请您共享他们的账户。",
    heading: "我的委托账户",
    list: [
      {
        type: "card",
        comp: {
          title: "委托给我的账户",
          path: "groups",
        },
      },
      {
        type: "card",
        comp: {
          title: "我委托角色的成员",
          path: "members",
        },
      },
    ],
  },
  DelegateGroupsPage: {
    pageTitle: "委托给我的账户",
    description:
      "作为该社区的成员，您可以发送消息、发布内容、创建和查看列表。此外，管理员可以邀请或移除账户参与者，并查看发布分析。",
    empty: "没有委托给我的账户。",
  },
  DelegateMembersPage: {
    pageTitle: "被委托的成员",
    description:
      "邀请其他用户代表您管理账户角色。成员可以发送消息、发布内容、创建和查看列表。",
    hyperlink: "邀请成员",
    empty: "尚未添加成员。",
  },
  TaggingPage: {
    pageTitle: "照片标记",
    text: "照片标记",
    expl: "允许他人在照片中标记我，并在被标记时收到通知。",
    item: {
      type: "checkboxlist",
      selector: getAllowTaggingWhom,
      comp: [
        {
          text: "允许任何人标记我",
          reducer: setAllowTaggingWhom,
          value: "all",
        },
        {
          text: "仅允许我关注的人标记我",
          reducer: setAllowTaggingWhom,
          value: "followers",
        },
      ],
    },
  },
  TopicsPage: {
    pageTitle: "话题",
    tabList: (userId: string) => {
      return [
        {
          text: "已关注",
          path: `/${userId}/topics`,
          value: "",
        },
        {
          text: "不感兴趣",
          path: `/${userId}/topics/not_interested`,
          value: "not",
        },
      ];
    },
  },
  BlockedAllPage: {
    pageTitle: "已屏蔽的账号",
    tabList: [
      {
        text: "全部",
        path: "",
        value: "",
      },
      {
        text: "已导入",
        path: "/settings/blocked/imported",
        value: "imported",
      },
    ],
    description:
      "屏蔽用户后，他们将无法关注您、向您发送消息或出现在您的通知中。",
  },
  MutedAllPage: {
    pageTitle: "已静音的账号",
    description: "所有已静音的用户都将在此显示。您可以从列表中添加或删除。",
  },
  MutedKeywordsPage: {
    pageTitle: "已静音的关键词",
    empty: {
      heading: "添加静音关键词",
      expl: "静音关键词后，包含该关键词的帖子将不会出现在您的主页时间线上，您也不会收到相关通知。",
    },
  },
  AddMutedKeywordsPage: {
    pageTitle: "添加静音关键词",
    expl: "您可以一次静音一个项目：单词、短语、@用户名或标签。",
    heading1: "静音范围",
    item1: {
      type: "checkbox",
      comp: {
        text: "主页时间线",
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
          text: "所有用户",
          value: "all",
        },
        {
          text: "我未关注的人",
          value: "notFollowing",
        },
      ],
    },
    heading2: "时长",
    item4: {
      type: "checkboxlist",
      comp: [
        {
          text: "直到取消静音此单词",
          value: "forever",
        },
        {
          text: "24小时",
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
      text: "保存",
    },
  },
};

export default pages;

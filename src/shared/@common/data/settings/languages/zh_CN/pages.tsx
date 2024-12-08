import { countryNamesZhCN } from "@shared/@common/data/countries";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
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
        path: "/settings/my_tweets",
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
        path: "/settings/language",
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
        path: "age",
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
};

export default pages;

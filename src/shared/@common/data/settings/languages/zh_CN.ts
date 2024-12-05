import { countryNamesZhTW } from "../../countries";

const settingsBranchList = [
  // 账号
  {
    title: "账号",
    expl: "查看账号信息，下载数据记录，或者了解账号停用选项的更多详情。",
    path: "account",
    midBranches: [
      // 账号信息
      {
        title: "账号信息",
        expl: "查看手机号码和电子邮件地址等账号信息。",
        path: "account_data",
        icon: "user",
      },
      // 更改密码
      {
        title: "更改密码",
        expl: "随时更改您的密码。",
        path: "password",
        icon: "key",
      },
      // 下载数据记录
      {
        title: "下载数据记录",
        expl: "获取有关存储在账号中的信息类型的洞察。",
        path: "download_data",
        icon: "download",
      },
      // 停用账号
      {
        title: "停用账号",
        expl: "了解如何停用您的账号。",
        path: "inactivate",
        icon: "crackedHeart",
      },
    ],
  },
  // 安全性和账号访问
  {
    title: "安全性和账号访问",
    expl: "管理账号的安全性，并跟踪包括连接的应用程序在内的账号使用情况。",
    path: "security_and_account_access",
    midBranches: [
      // 安全性
      {
        title: "安全性",
        path: "security",
        expl: "管理您的账号安全。",
        icon: "lock",
      },
      // 应用程序和会话
      {
        title: "应用程序和会话",
        path: "apps_and_sessions",
        expl: "查看与账号和连接应用程序相关的登录信息。",
        icon: "apps",
        subBranches: [
          // 连接的应用程序
          {
            title: "连接的应用程序",
            expl: "这是与您的账号连接的应用程序。可以查看这些应用程序访问的信息并阻止访问。",
            path: "connected_apps",
          },
          // 会话
          {
            title: "会话",
            expl: "会话是当前正在使用或曾经使用PlayGround账号的设备。您可以从每个会话中登出。",
            path: "sessions",
          },
          // 账号访问记录
          {
            title: "账号访问记录",
            expl: "如果检测到应用中存在可疑活动，可阻止连接的应用程序的访问。基于IP的位置信息可能与实际位置不同。",
            path: "login_history",
          },
          // 登录设备和应用程序
          {
            title: "登录设备和应用程序",
            path: "devices",
          },
        ],
      },
      // 连接的账号
      {
        title: "连接的账号",
        path: "connected_accounts",
        expl: "管理用于登录PlayGround的Google、Naver或Kakao账号。",
        icon: "twoWay",
      },
      // 委托
      {
        title: "委托",
        path: "delegate",
        expl: "管理共享账号。",
        icon: "delegate",
      },
    ],
  },
  // 隐私与安全
  {
    title: "隐私与安全",
    expl: "管理在PlayGround中显示和共享的信息。",
    path: "privacy_and_safety",
    midBranches: [
      {
        title: "受众、媒体与标记",
        expl: "管理在PlayGround中向他人公开的信息。",
        path: "audience_and_tagging",
      },
      {
        title: "我的帖子",
        expl: "管理与您的帖子相关的信息。",
        path: "my_tweets",
      },
      {
        title: "显示的内容",
        expl: "根据用户的偏好（如主题和兴趣）决定在PlayGround中显示的信息。",
        path: "content_you_see",
      },
      {
        title: "静音与屏蔽",
        expl: "管理您静音或屏蔽的账号、词语和通知。",
        path: "mute_and_block",
        subBranches: [
          {
            title: "屏蔽的账号",
            path: "blocked/all",
          },
          {
            title: "静音的账号",
            path: "muted/all",
          },
          {
            title: "静音的词语",
            path: "muted_keywords",
          },
          {
            title: "静音的通知",
            path: "notifications/advanced_filters",
          },
        ],
      },
      {
        title: "消息",
        expl: "管理可以直接向您发送消息的对象。",
        path: "messages",
      },
      {
        title: "账号搜索与联系人",
        expl: "控制账号搜索设置并管理导入的联系人。",
        path: "contacts",
      },
      {
        title: "广告设置",
        expl: "管理PlayGround中的广告设置。",
        path: "ads_preferences",
      },
      {
        title: "位置信息",
        expl: "管理用于在PlayGround中定制体验的位置信息。",
        path: "location_information",
      },
    ],
  },
  // 通知
  {
    title: "通知",
    expl: "选择您希望接收的与活动、兴趣及推荐相关的通知类型。",
    path: "notifications",
    midBranches: [
      // 筛选器
      {
        title: "筛选器",
        expl: "选择您希望查看和不希望查看的通知。",
        path: "notifications/filters",
        icon: "",
      },
      // 设置
      {
        title: "设置",
        expl: "根据通知类型选择设置。",
        path: "notifications/preferences",
        icon: "",
        subBranches: [
          // 推送通知
          {
            title: "推送通知",
            path: "push_notifications",
          },
          // 电子邮件通知
          {
            title: "电子邮件通知",
            path: "email_notifications",
          },
        ],
      },
    ],
  },
  // 无障碍、显示与语言
  {
    title: "无障碍、显示与语言",
    expl: "管理PlayGround的内容显示方式。",
    path: "accessibility_display_and_languages",
    midBranches: [
      // 无障碍
      {
        title: "无障碍",
        expl: "管理颜色对比和动作限制等PlayGround的用户体验设置。此设置适用于此浏览器的所有PlayGround账号。",
        path: "accessibility",
        icon: "eyeoff",
      },
      // 显示
      {
        title: "显示",
        expl: "管理字体大小、颜色和背景。此设置适用于此浏览器的所有PlayGround账号。",
        path: "display",
        icon: "pen",
      },
      // 语言
      {
        title: "语言",
        expl: "管理用于定制用户体验的语言设置。",
        path: "languages",
        icon: "map",
      },
      // 数据使用量
      {
        title: "数据使用量",
        expl: "PlayGround限制在此设备上使用部分网络数据的方式。",
        path: "data",
        icon: "barChart",
      },
      // 键盘快捷键
      {
        title: "键盘快捷键",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },
  // 盈利化
  {
    title: "盈利化",
    path: "monetization",
  },
  // 其他资源
  {
    title: "其他资源",
    expl: "查看其他页面以了解有关PlayGround产品和服务的有用信息。",
    path: "about",
  },
];

const zh_CN = {
  languageSelect: {
    wrongCountryCode: "无效的国家代码",
    countryNames: countryNamesZhTW,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: {
      login: "的个人资料照片",
      logout: "个人资料照片",
    },
    ariaLabel: "点击更换个人资料照片。",
  },
  // 아미지
  image: {
    imgAlt: "图片",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "默认色",
      red: "红色",
      green: "绿色",
      yellow: "黄色",
      purple: "紫色",
      black: "黑色",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "非常小",
      s: "小",
      b: "默认",
      l: "大",
      xl: "非常大",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "返回上一页",
  },
  // Settings 브랜치 리스트
  settingsBranchList,
};

export default zh_CN;

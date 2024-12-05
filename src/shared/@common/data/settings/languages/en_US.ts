import { countryNamesEng } from "../../countries";

const settingsBranchList = [
  {
    title: "Account",
    expl: "Check your account information, download data logs, or learn about account deactivation options.",
    path: "account",
    midBranches: [
      {
        title: "Account Information",
        expl: "View account details such as your phone number and email address.",
        path: "account_data",
        icon: "user",
      },
      {
        title: "Change Password",
        expl: "Change your password anytime.",
        path: "password",
        icon: "key",
      },
      {
        title: "Download Data Logs",
        expl: "Gain insights into the types of information stored in your account.",
        path: "download_data",
        icon: "download",
      },
      {
        title: "Deactivate Account",
        expl: "Learn how to deactivate your account.",
        path: "inactivate",
        icon: "crackedHeart",
      },
    ],
  },
  {
    title: "Security and Account Access",
    expl: "Manage the security of your account and track its usage, including connected apps.",
    path: "security_and_account_access",
    midBranches: [
      {
        title: "Security",
        path: "security",
        expl: "Manage your account's security.",
        icon: "lock",
      },
      {
        title: "Apps and Sessions",
        path: "apps_and_sessions",
        expl: "View information about login activities and connected apps to your account.",
        icon: "apps",
        subBranches: [
          {
            title: "Connected Apps",
            expl: "These are apps connected to your account. View and revoke their access to your information.",
            path: "connected_apps",
          },
          {
            title: "Sessions",
            expl: "Sessions are devices using or that have used your Playground account. Log out of any active session.",
            path: "sessions",
          },
          {
            title: "Login History",
            expl: "If suspicious activity is detected, block access from connected apps. Location data may differ from your actual location.",
            path: "login_history",
          },
          {
            title: "Logged-in Devices and Apps",
            path: "devices",
          },
        ],
      },
      {
        title: "Connected Accounts",
        path: "connected_accounts",
        expl: "Manage Google, Naver, or Kakao accounts linked for logging in to Playground.",
        icon: "twoWay",
      },
      {
        title: "Delegation",
        path: "delegate",
        expl: "Manage shared accounts.",
        icon: "delegate",
      },
    ],
  },
  {
    title: "Privacy and Safety",
    expl: "Manage the information displayed and shared on Playground.",
    path: "privacy_and_safety",
    midBranches: [
      {
        title: "Audience, Media, and Tagging",
        expl: "Control the information you share with others on Playground.",
        path: "audience_and_tagging",
      },
      {
        title: "My Posts",
        expl: "Manage details related to your posts.",
        path: "my_tweets",
      },
      {
        title: "Content Preferences",
        expl: "Decide what information is shown on Playground based on topics and interests.",
        path: "content_you_see",
      },
      {
        title: "Mute and Block",
        expl: "Manage accounts, words, and notifications you've muted or blocked.",
        path: "mute_and_block",
        subBranches: [
          {
            title: "Blocked Accounts",
            path: "blocked/all",
          },
          {
            title: "Muted Accounts",
            path: "muted/all",
          },
          {
            title: "Muted Keywords",
            path: "muted_keywords",
          },
          {
            title: "Muted Notifications",
            path: "notifications/advanced_filters",
          },
        ],
      },
      {
        title: "Messages",
        expl: "Manage who can send you direct messages.",
        path: "messages",
      },
      {
        title: "Find Account and Contacts",
        expl: "Control settings for finding your account and manage imported contacts.",
        path: "contacts",
      },
      {
        title: "Ad Preferences",
        expl: "Manage advertising preferences on Playground.",
        path: "ads_preferences",
      },
      {
        title: "Location Information",
        expl: "Manage location information used for personalized experiences on Playground.",
        path: "location_information",
      },
    ],
  },
  {
    title: "Notifications",
    expl: "Select the types of notifications you receive for activities, interests, and recommendations.",
    path: "notifications",
    midBranches: [
      {
        title: "Filters",
        expl: "Choose the notifications you want to see and ignore.",
        path: "notifications/filters",
        icon: "",
      },
      {
        title: "Preferences",
        expl: "Select preferences by notification type.",
        path: "notifications/preferences",
        icon: "",
        subBranches: [
          {
            title: "Push Notifications",
            path: "push_notifications",
          },
          {
            title: "Email Notifications",
            path: "email_notifications",
          },
        ],
      },
    ],
  },
  {
    title: "Accessibility, Display, and Language",
    expl: "Control how content appears on Playground.",
    path: "accessibility_display_and_languages",
    midBranches: [
      {
        title: "Accessibility",
        expl: "Manage user experience settings like color contrast and motion limits. These apply to all accounts on this browser.",
        path: "accessibility",
        icon: "eyeoff",
      },
      {
        title: "Display",
        expl: "Manage font size, colors, and backgrounds. These settings apply to all accounts on this browser.",
        path: "display",
        icon: "pen",
      },
      {
        title: "Language",
        expl: "Manage the language used to personalize your experience.",
        path: "languages",
        icon: "map",
      },
      {
        title: "Data Usage",
        expl: "Control how Playground uses network data on this device.",
        path: "data",
        icon: "barChart",
      },
      {
        title: "Keyboard Shortcuts",
        path: "/i/keyboard_shortcuts",
        icon: "shortcut",
      },
    ],
  },
  {
    title: "Monetization",
    path: "monetization",
  },
  {
    title: "Additional Resources",
    expl: "Explore other pages for helpful information about Playground's products and services.",
    path: "about",
  },
];

const en_US = {
  // 언어 선택
  languageSelect: {
    wrongCountryCode: "Invalid country code",
    countryNames: countryNamesEng,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: { login: "'s profile photo", logout: "Profile Photo" },
    ariaLabel: "Click to change the profile picture.",
  },
  // 아미지
  image: {
    imgAlt: "Image",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "default",
      red: "red",
      green: "green",
      yellow: "yellow",
      purple: "purple",
      black: "black",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "extra small",
      s: "small",
      b: "default",
      l: "large",
      xl: "extra large",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "Go to Previous Page",
  },
  // Settings 브랜치 목록
  settingsBranchList,
};

export default en_US;

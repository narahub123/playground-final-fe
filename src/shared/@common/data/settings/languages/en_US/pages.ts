const pages = {
  settingsLandingPage: {
    pageTitle: "Settings",
    placeholder: "Search in Settings",
    branchList: [
      {
        title: "Account",
        path: "account",
      },
      {
        title: "Security and Account Access",
        path: "security_and_account_access",
      },
      {
        title: "Privacy and Safety",
        path: "privacy_and_safety",
      },
      {
        title: "Notifications",
        path: "notifications",
      },
      {
        title: "Accessibility, Display, and Language",
        path: "accessibility_display_and_languages",
      },
      {
        title: "Monetization",
        path: "monetization",
      },
      {
        title: "Additional Resources",
        path: "about",
      },
    ],
  },
  AccountPage: {
    pageTitle: "Account",
    description:
      "Check your account information, download data records, or learn more about account deactivation options.",
    branchList: [
      {
        title: "Account Information",
        expl: "View account information such as your phone number and email address.",
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
        title: "Download Data Records",
        expl: "Gain insight into the types of information stored in your account.",
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
  SecurityAndAccountAccessPage: {
    pageTitle: "Security and Account Access",
    description:
      "Manage the security of your account and track account usage, including connected apps.",
    branchList: [
      {
        title: "Security",
        path: "security",
        expl: "Manage your account security.",
        icon: "lock",
      },
      {
        title: "Apps and Sessions",
        path: "apps_and_sessions",
        expl: "View login information for your account and connected apps.",
        icon: "apps",
      },
      {
        title: "Connected Accounts",
        path: "connected_accounts",
        expl: "Manage Google, Naver, or Kakao accounts linked for PlayGround login.",
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
  PrivacyAndSafetyPage: {
    pageTitle: "Privacy and Safety",
    description: "Manage the information displayed and shared on PlayGround.",
    branchList: [
      {
        title: "Audience, Media, and Tagging",
        expl: "Control the information you share publicly on X.",
        path: "audience_and_tagging",
      },
      {
        title: "My Posts",
        expl: "Manage information related to your posts.",
        path: "my_tweets",
      },
      {
        title: "Displayed Content",
        expl: "Determine what is shown on PlayGround based on your preferences like topics and interests.",
        path: "content_you_see",
      },
      {
        title: "Mute and Block",
        expl: "Manage accounts, words, and notifications you have muted or blocked.",
        path: "mute_and_block",
      },
      {
        title: "Messages",
        expl: "Control who can send you direct messages.",
        path: "messages",
      },
      {
        title: "Find Account and Contacts",
        expl: "Control account discovery settings and manage imported contacts.",
        path: "contacts",
      },
      {
        title: "Ads Preferences",
        expl: "Manage ad settings on PlayGround.",
        path: "ads_preferences",
      },
      {
        title: "Location Information",
        expl: "Manage location information used for personalized experiences on PlayGround.",
        path: "location_information",
      },
    ],
  },
  NotificationsPage: {
    pageTitle: "Notifications",
    description:
      "Choose the types of notifications you want to receive about activities, interests, and recommendations.",
    branchList: [
      {
        title: "Filters",
        expl: "Choose the notifications you want to see and those you don’t.",
        path: "notifications/filters",
        icon: "",
      },
      {
        title: "Preferences",
        expl: "Select preferences for each type of notification.",
        path: "notifications/preferences",
        icon: "",
      },
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "Accessibility, Display, and Languages",
    description: "Manage how content is displayed on PlayGround.",
    branchList: [
      {
        title: "Accessibility",
        expl: "Manage user experience settings like color contrast and motion reduction for PlayGround. These settings apply to all PlayGround accounts in this browser.",
        path: "accessibility",
        icon: "eyeoff",
      },
      {
        title: "Display",
        expl: "Manage font size, colors, and backgrounds. These settings apply to all PlayGround accounts in this browser.",
        path: "display",
        icon: "pen",
      },
      {
        title: "Language",
        expl: "Manage the language used to customize your experience.",
        path: "languages",
        icon: "map",
      },
      {
        title: "Data Usage",
        expl: "Limit how PlayGround uses some of your network data on this device.",
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
  AppsAndSessionsPage: {
    pageTitle: "Apps and Sessions",
    description:
      "View information about the apps and sessions logged into your account.",
    branchList: [
      // 연결된 앱
      {
        title: "Connected Apps",
        expl: "These are the apps connected to your account. You can view the information accessed by these apps and block access.",
        path: "connected_apps",
      },
      // 세션
      {
        title: "Sessions",
        expl: "Sessions are devices that are currently using or have used your PlayGround account. These sessions are logged in with your account. You can log out from each session.",
        path: "sessions",
      },
      // 계정 엑세스 기록
      {
        title: "Account Access History",
        expl: "If suspicious activity is detected in an app, block access from connected apps. IP-based locations may differ from your actual location.",
        path: "login_history",
      },
      // 로그인된 디바이스 및 앱
      {
        title: "Logged-in Devices and Apps",
        path: "devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "Mute and Block",
    description:
      "Manage accounts, words, and notifications that you've muted or blocked.",
    branchList: [
      {
        title: "Blocked Accounts",
        path: "blocked/all",
      },
      {
        title: "Muted Accounts",
        path: "muted/all",
      },
      {
        title: "Muted Words",
        path: "muted_keywords",
      },
      {
        title: "Muted Notification Alerts",
        path: "notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "Notification Preferences",
    description: "Choose preferences for each type of notification.",
    branchList: [
      // 푸시 알림
      {
        title: "Push Notifications",
        path: "push_notifications",
      },
      // 이메일 알림
      {
        title: "Email Notifications",
        path: "email_notifications",
      },
    ],
  },
};

export default pages;

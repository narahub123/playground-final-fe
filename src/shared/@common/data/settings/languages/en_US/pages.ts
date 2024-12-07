const pages = {
  settingsLandingPage: {
    pageTitle: "Settings",
    placeholder: "Search settings",
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
        title: "Accessibility, Display, and Languages",
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
      "Check account information, download data records, or learn more about deactivating your account.",
    branchList: [
      {
        title: "Account Information",
        expl: "View account information such as phone numbers and email addresses.",
        path: "/settings/your_data/account",
        icon: "user",
      },
      {
        title: "Change Password",
        expl: "Change your password anytime.",
        path: "/settings/password",
        icon: "key",
      },
      {
        title: "Download Data Records",
        expl: "Gain insights into the types of information stored in your account.",
        path: "/settings/download_data",
        icon: "download",
      },
      {
        title: "Deactivate Account",
        expl: "Learn how to deactivate your account.",
        path: "/settings/inactivate",
        icon: "crackedHeart",
      },
    ],
  },
  SecurityAndAccountAccessPage: {
    pageTitle: "Security and Account Access",
    description:
      "Manage your account security and track account usage, including connected apps.",
    branchList: [
      {
        title: "Security",
        expl: "Manage your account's security settings.",
        path: "/settings/security",
        icon: "lock",
      },
      {
        title: "Apps and Sessions",
        expl: "View information about login sessions and connected apps.",
        path: "/settings/apps_and_sessions",
        icon: "apps",
      },
      {
        title: "Connected Accounts",
        expl: "Manage Google, Naver, or Kakao accounts linked for PlayGround login.",
        path: "/settings/connected_accounts",
        icon: "twoWay",
      },
      {
        title: "Delegate",
        expl: "Manage shared accounts.",
        path: "/settings/delegate",
        icon: "delegate",
      },
    ],
  },
  PrivacyAndSafetyPage: {
    pageTitle: "Privacy and Safety",
    description: "Manage information displayed and shared on PlayGround.",
    branchList: [
      {
        title: "Audience, Media, and Tagging",
        expl: "Control what information is publicly visible on X.",
        path: "/settings/audience_and_tagging",
        icon: "users",
      },
      {
        title: "My Posts",
        expl: "Manage information related to your posts.",
        path: "/settings/my_tweets",
        icon: "penLine",
      },
      {
        title: "Content Preferences",
        expl: "Decide what information is displayed on PlayGround based on topics and interests.",
        path: "/settings/content_you_see",
        icon: "content",
      },
      {
        title: "Mute and Block",
        expl: "Manage accounts, words, and notifications you have muted or blocked.",
        path: "/settings/mute_and_block",
        icon: "mute",
      },
      {
        title: "Messages",
        expl: "Control who can send you direct messages.",
        path: "/settings/messages",
        icon: "message",
      },
      {
        title: "Discoverability and Contacts",
        expl: "Control discoverability settings and manage imported contacts.",
        path: "/settings/contacts",
        icon: "contact",
      },
      {
        title: "Ad Preferences",
        expl: "Manage ad settings on PlayGround.",
        path: "/settings/ads_preferences",
        icon: "ads",
      },
      {
        title: "Location Information",
        expl: "Manage location information used for customizing the PlayGround experience.",
        path: "/settings/location_information",
        icon: "pin",
      },
    ],
  },
  NotificationsPage: {
    pageTitle: "Notifications",
    description:
      "Choose the types of notifications you receive about activities, interests, and recommendations.",
    branchList: [
      {
        title: "Filters",
        expl: "Select which notifications you want to see and which ones to ignore.",
        path: "/settings/notifications/filters",
        icon: "filter",
      },
      {
        title: "Preferences",
        expl: "Set preferences for each type of notification.",
        path: "/settings/notifications/preferences",
        icon: "preferences",
      },
    ],
  },
  AccessibilityAndDisplayAndLanguagesPage: {
    pageTitle: "Accessibility, Display, and Languages",
    description: "Manage how content is displayed on PlayGround.",
    branchList: [
      {
        title: "Accessibility",
        expl: "Manage user settings such as color contrast and motion reduction. These settings apply to all PlayGround accounts on this browser.",
        path: "/settings/accessibility",
        icon: "eyeoff",
      },
      {
        title: "Display",
        expl: "Manage font size, colors, and background. These settings apply to all PlayGround accounts on this browser.",
        path: "/settings/display",
        icon: "pen",
      },
      {
        title: "Languages",
        expl: "Manage languages used for customizing the user experience.",
        path: "/settings/languages",
        icon: "map",
      },
      {
        title: "Data Usage",
        expl: "Limit how PlayGround uses network data on this device.",
        path: "/settings/data",
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
    description: "View information about login sessions and connected apps.",
    branchList: [
      {
        title: "Connected Apps",
        path: "/settings/connected_apps",
      },
      {
        title: "Sessions",
        path: "/settings/sessions",
      },
      {
        title: "Login History",
        path: "/settings/login_history",
      },
      {
        title: "Logged-in Devices and Apps",
        path: "/settings/devices",
      },
    ],
  },
  MuteAndBlockPage: {
    pageTitle: "Mute and Block",
    description:
      "Manage accounts, words, and notifications you have muted or blocked.",
    branchList: [
      {
        title: "Blocked Accounts",
        path: "/settings/blocked/all",
      },
      {
        title: "Muted Accounts",
        path: "/settings/muted/all",
      },
      {
        title: "Muted Words",
        path: "/settings/muted_keywords",
      },
      {
        title: "Muted Notifications",
        path: "/settings/notifications/advanced_filters",
      },
    ],
  },
  NotificationPreferencePage: {
    pageTitle: "Preferences",
    description: "Set preferences for each type of notification.",
    branchList: [
      {
        title: "Push Notifications",
        path: "/settings/push_notifications",
      },
      {
        title: "Email Notifications",
        path: "/settings/email_notifications",
      },
    ],
  },
};

export default pages;

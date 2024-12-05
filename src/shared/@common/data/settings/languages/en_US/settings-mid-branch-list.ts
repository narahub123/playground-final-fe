import { SettingsBranchType } from "@features/settings-setting/types/data";

// Account
const accountBranchList: SettingsBranchType[] = [
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
];

// Security and Account Access
const securityAndAccountAccessBranchList: SettingsBranchType[] = [
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
];

// Privacy and Safety
const privacyAndSafetyBranchList = [
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
];

// Notifications
const notificationBranchList: SettingsBranchType[] = [
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
];

// Accessibility, Display, and Languages
const AccessibilityAndDisplayAndLanguages: SettingsBranchType[] = [
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
    icon: "",
  },
];

export {
  accountBranchList,
  securityAndAccountAccessBranchList,
  privacyAndSafetyBranchList,
  notificationBranchList,
  AccessibilityAndDisplayAndLanguages,
};

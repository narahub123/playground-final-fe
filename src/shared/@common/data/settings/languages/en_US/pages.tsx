import { countryNamesEng } from "@shared/@common/data/countries";
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
        path: "/settings/deactivate",
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
        path: "/settings/your_posts",
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
  SecurityPage: {
    pageTitle: "Security",
    description: "Manage the security of your account.",
    list: [
      {
        title: "Two-Factor Authentication",
        type: "card",
        comp: {
          title: "Two-Factor Authentication",
          path: "/settings/account/login_verification",
        },
        description:
          "Protect your account from unauthorized access by requiring a second authentication method in addition to your PlayGround password. You can choose between SMS, authentication app, or security key.",
      },
      {
        title: "ID Verification",
        type: "card",
        comp: {
          title: "ID Verification",
          path: "/settings/account/id_verification",
        },
        description:
          "Upload an approved form of ID to verify the authenticity of your account. The information you provide will only be used for identity verification and will be securely handled.",
      },
      {
        title: "Password Reset",
        type: "checkbox",
        comp: {
          text: "Protect Password Reset",
          reducer: setBackgroundTheme,
          initialValue: false,
        },
        description:
          "As an additional layer of protection, you will need to verify your email address or phone number to reset your PlayGround password.",
      },
    ],
  },
  AccountInfoPage: {
    pageTitle: "Account Information",
    branchList: (user: UserType & SettingsType) => [
      // 사용자 아이디
      {
        title: "User ID",
        path: "/settings/screen_name",
        expl: `@${user.userId}`,
      },
      // 휴대폰
      {
        title: "Phone",
        path: "/settings/phone",
      },
      // 이메일
      {
        title: "Email",
        path: "/settings/email",
        expl: user.email,
      },
      // 인증 여부
      {
        title: "Authentication Status",
        path: "",
        expl: user.isAuthenticated ? "Authenticated" : "Not Authenticated",
      },
      // 비공개 게시물
      {
        title: "Private Posts",
        path: "/settings/audience_and_tagging",
        expl: user.isVisible ? "Yes" : "No",
      },
      // 계정 생성
      {
        title: "Account Created",
        path: "",
        expl: user.regDate.toLocaleString(),
      },
      // 국가
      {
        title: "Country",
        path: "/settings/country",
        expl: countryNamesEng[
          user.language
            .split("-")[1]
            .toLowerCase() as keyof typeof countryNamesEng
        ],
      },
      // 언어
      {
        title: "Languages",
        path: "/settings/languages",
        expl: getLangName(user.language)?.text,
      },
      // 성별
      {
        title: "Gender",
        path: "/settings/gender",
        expl: translateGender(user.gender),
      },
      // 생년월일
      {
        title: "Date of Birth",
        path: "",
        expl: convertBirthToLocalString(user.birth),
      },
      // 연령
      {
        title: "Age",
        path: "/settings/your_data/age",
        expl: calculateAge(user.birth),
      },
      // 자동화
      {
        title: "Automation",
        path: "automation",
        expl: "Manage automation accounts.",
      },
    ],
  },
  DeactivatePage: {
    pageTitle: "Deactivate Account",
    section1: {
      title: "Your account will be deactivated.",
      description:
        "You are starting the process to deactivate your PlayGround account. Your display name, @username, and public profile will no longer be visible on PlayGround.com, PlayGround for iOS, or PlayGround for Android.",
    },
    section2: {
      title: "What else should I know?",
      list: [
        "You can recover your PlayGround account within 30 days if it was deactivated by mistake or unintentionally.",
        "Some account information may still be accessible on search engines like Google or Bing.",
        <>
          You don't need to deactivate your account to change your @username.{" "}
          <HyperLink text="Settings" path="/settings/password" out={false} />
          to update your username.
        </>,
        <>
          If you want to use your current @username or email address for another
          PlayGround account, please{" "}
          <HyperLink
            text="update"
            path="/settings/your_data/account"
            out={false}
          />
          them before deactivating this account.
        </>,
        "To download your PlayGround data, you must complete the request and download process before deactivating your account. Data download links cannot be sent to a deactivated account.",
      ],
    },
    deactivate: {
      text: "Deactivate",
    },
  },
  AudienceAndTaggingPage: {
    pageTitle: "Audience, Media, and Tagging",
    description: "Manage the information you share with others on PlayGround.",
    list: [
      {
        title: "",
        type: "checkbox",
        selector: getIsPrivate,
        comp: {
          text: "Set my posts to private",
          reducer: setIsPrivate,
        },
        description:
          "When selected, only people who follow me can view my posts and other account information.",
      },
      {
        title: "",
        type: "checkbox",
        selector: getProtectVideo,
        comp: {
          text: "Protect videos",
          reducer: setProtectVideo,
        },
        description:
          "If enabled, videos in posts cannot be downloaded by default. This setting applies to future posts and does not apply retroactively.",
      },
      {
        title: "",
        type: "card",
        comp: {
          title: "Photo Tagging",
          path: "/settings/tagging",
          expl: "Allow anyone to tag me",
        },
        description: "",
      },
    ],
  },
  YourPostsPage: {
    pageTitle: "My Posts",
    description: "Manage information related to your posts.",
    list: [
      {
        type: "checkbox",
        selector: getTagSensitiveMedia,
        comp: {
          text: "Mark media you post as potentially sensitive content",
          reducer: setTagSensitiveMedia,
        },
        description:
          "If enabled, photos and videos you post will be marked as sensitive content for people who prefer not to see sensitive material.",
      },
      {
        type: "card",
        comp: {
          title: "Add location information to posts",
          path: "/settings/location",
        },
      },
    ],
  },
  ContentYouSeePage: {
    pageTitle: "Content You See",
    description:
      "Determines the information displayed on PlayGround based on your preferences, such as topics and interests.",
    checkboxItem: {
      type: "checkbox",
      selector: getDisplaySensitiveMedia,
      comp: {
        text: "Show media that may contain sensitive content",
        reducer: setDisplaySensitiveMedia,
      },
    },
    branchList: (user: UserType) => [
      {
        title: "Topics",
        path: `/${user.userId}/topics`,
      },
      {
        title: "Interests",
        path: `/settings/your_data/your_interests`,
      },
      {
        title: "Explore Settings",
        path: `/settings/explore`,
      },
      {
        title: "Search Settings",
        path: `/settings/search`,
      },
    ],
  },
  MessageSettingPage: {
    pageTitle: "Messages",
    list: [
      {
        text: "Allow message requests from the following users",
        detail: "You can always receive messages sent by users you follow.",
        type: "checkboxlist",
        selector: getAllowMessages,
        comp: [
          {
            text: "Do not receive",
            reducer: setAllowMessages,
            value: "none",
          },
          {
            text: "Verified users",
            reducer: setAllowMessages,
            value: "authenticated",
          },
          {
            text: "Everyone",
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
          text: "Filter low-quality messages",
          reducer: setHideMessages,
        },
        description:
          "Hides message requests identified as spam or containing low-quality content. These requests will be sent to a separate inbox at the bottom of the message request list. You can still check them if you want.",
        top: true,
        disabled: true,
      },
      {
        title: "",
        type: "checkbox",
        selector: getShowRead,
        comp: {
          text: "Show read receipts",
          reducer: setShowRead,
        },
        description:
          "Allows people exchanging messages to know when you have read a message. Read receipts do not appear in message requests.",
        top: true,
      },
    ],
  },
  ContactsPage: {
    pageTitle: "Find Account and Contacts",
    description:
      "Control account discovery settings and manage imported contacts.",
    list: [
      {
        title: "Discoverability",
        detail:
          "Decide whether people who know your email address or phone number can find and contact you on PG.",
        type: "checkbox",
        selector: getFindByEmail,
        comp: {
          text: "Allow people who know my email address to find me on PG",
          reducer: setFindByEmail,
        },
        description:
          "Allows people who know your email address to find and contact you on PG.",
      },
      {
        type: "checkbox",
        selector: getFindByPhone,
        comp: {
          text: "Allow people who know my phone number to find me on PG",
          reducer: setFindByPhone,
        },
        description:
          "Allows people who know your phone number to find and contact you on PG.",
      },
      {
        title: "Contacts",
        detail: "Manage contacts imported from your mobile device.",
        type: "card",
        comp: {
          title: "Manage Contacts",
          path: "/settings/contacts_dashboard",
        },
        top: true,
      },
    ],
  },
  AdsPreferencesPage: {
    pageTitle: "Ad Preferences",
    description: "Manage ad settings on PlayGround.",
    checkbox: {
      type: "checkbox",
      selector: getAllowBehavioralAds,
      comp: {
        text: "Personalized Ads",
        reducer: setAllowBehavioralAds,
      },
      description:
        "You will always see ads based on your activity on PlayGround. When this setting is enabled, PlayGround can personalize ads from PlayGround advertisers both on and off PlayGround by combining your PlayGround activity with other online activities and information provided by partners.",
    },
    branchList: [
      {
        title: "Interests",
        path: "/settings/your_twitter_data/twitter_interests",
      },
      {
        title: "Advertisers List",
        path: "/settings/your_twitter_data/audiences",
      },
    ],
  },
  LocationInfoPage: {
    pageTitle: "Location Information",
    description:
      "Manage location information used to personalize your experience on PlayGround.",
    checkbox: {
      type: "checkbox",
      selector: getAllowLocationAds,
      comp: {
        text: "Personalize based on places I've been",
        reducer: setAllowLocationAds,
      },
      description:
        "PlayGround always uses information like the location where I signed up or my current location to provide personalized content. Enabling this setting allows personalized content to be provided based on the places I’ve visited.",
    },
    branchList: [
      {
        title: "Places I've Been",
        path: "/settings/your_twitter_data/locations",
      },
      {
        title: "Add Location to Posts",
        path: "/settings/location",
      },
      {
        title: "Explore Settings",
        path: "/settings/location",
      },
    ],
  },
  NotificationFilterPage: {
    pageTitle: "Filters",
    description:
      "Choose the notifications you want to see and those you don’t.",
    list: [
      {
        type: "checkbox",
        selector: getQualityFilter,
        comp: {
          text: "Quality Filter",
          reducer: setQualityFilter,
        },
        description:
          "When selected, content such as duplicates and automated posts will be filtered. This does not apply to notifications from accounts you follow or have recently interacted with.",
      },
      {
        type: "card",
        comp: {
          title: "Muted Notifications",
          path: "/settings/notifications/advanced_filters",
        },
      },
    ],
  },
  AccessibilityPage: {
    pageTitle: "Accessibility",
    description:
      "Manage your PlayGround user experience, such as color contrast and motion restrictions. These settings apply to all PlayGround accounts on this browser.",
    list: [
      {
        title: "Visual Assistance",
        type: "checkbox",
        selector: getColorContrast,
        comp: {
          text: "Increase Color Contrast",
          reducer: setColorContrast,
        },
        description:
          "Enhance readability by increasing contrast between text and background colors.",
      },
      {
        title: "Motion",
        type: "checkbox",
        selector: getReduceMotion,
        comp: {
          text: "Reduce Motion",
          reducer: setReduceMotion,
        },
        description:
          "Reduce in-app animations, including live participation counts.",
      },
      {
        type: "card",
        comp: {
          title: "Autoplay",
          expl: "When using cellular data or Wi-Fi",
          path: "/settings/autoplay",
        },
      },
      {
        title: "Media",
        type: "checkbox",
        selector: getAddImgExpl,
        comp: {
          text: "Receive Image Description Notifications",
          reducer: setAddImgExpl,
        },
        description:
          "Get notified to add image descriptions before sending posts.",
      },
    ],
  },
  LanguagesPage: {
    pageTitle: "Languages",
    description: "Manage the languages used to customize your user experience.",
    list: [
      {
        title: "Display Language",
        detail:
          "Select the primary language for headlines, buttons, and other text on PG.",
        type: "card",
        comp: {
          title: "Display Language",
          expl: "Korean",
          path: "/settings/language",
        },
      },
      {
        title: "Select Additional Languages",
        detail:
          "Choose additional languages for the content you want to see on PG.",
        type: "card",
        comp: {
          title: "Additional Languages",
          path: "/i/flow/language_selector",
        },
      },
      {
        title: "Known Languages",
        detail:
          "Manage the languages PG inferred based on your activities, such as accounts you follow and posts you've interacted with.",
        type: "card",
        comp: {
          title: "Known Languages",
          path: "/settings/your_twitter_data/language",
        },
      },
    ],
  },
  DataPage: {
    pageTitle: "Data Usage",
    description:
      "PG limits how it uses some of your network data on this device.",
    list: [
      {
        type: "checkbox",
        selector: getDataSaver,
        comp: {
          text: "Data Saver",
          reducer: setDataSaver,
        },
        description:
          "Selecting this option will reduce the network data used by PG.",
      },
      {
        type: "card",
        comp: {
          title: "Autoplay",
          expl: "When using cellular data or Wi-Fi",
          path: "/settings/autoplay",
        },
      },
    ],
  },
  AutoplayPage: {
    pageTitle: "Autoplay",
    item: {
      text: "Autoplay",
      detail: "Choose whether to autoplay videos and GIFs on this device.",
      type: "checkboxlist",
      selector: getAutoplay,
      comp: [
        {
          text: "When using cellular data or Wi-Fi",
          reducer: setAutoplay,
          value: "on",
        },
        {
          text: "Do not use",
          reducer: setAutoplay,
          value: "off",
        },
      ],
    },
  },
  LocationPage: {
    pageTitle: "Add Location to Posts",
    description: "Enable to attach location information to your posts.",
    item: {
      type: "checkbox",
      selector: getAddLocationInfo,
      comp: {
        text: "Add location to posts",
        reducer: setAddLocationInfo,
      },
    },
    hyperlink: "Delete all location information added to posts.",
  },
  NotificationAdvancedFilters: {
    pageTitle: "Muted Notifications",
    list: [
      {
        title: "Mute notifications from the following accounts:",
        type: "checkbox",
        selector: getMuteNotFollowing,
        comp: {
          text: "Accounts I don't follow",
          reducer: setMuteNotFollowing,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNotFollower,
        comp: {
          text: "Accounts that don't follow me",
          reducer: setMuteNotFollower,
        },
      },
      {
        type: "checkbox",
        selector: getMuteNewAccount,
        comp: {
          text: "New accounts",
          reducer: setMuteNewAccount,
        },
      },
      {
        type: "checkbox",
        selector: getMuteDefaultProfile,
        comp: {
          text: "Accounts with default profile images",
          reducer: setMuteDefaultProfile,
        },
      },
      {
        type: "checkbox",
        selector: getMuteEmailAuthenticated,
        comp: {
          text: "Accounts without verified email",
          reducer: setMuteEmailAuthenticated,
        },
      },
      {
        type: "checkbox",
        selector: getMutePhoneAuthenticated,
        comp: {
          text: "Accounts without verified phone number",
          reducer: setMutePhoneAuthenticated,
        },
        description:
          "This filter does not affect notifications from people I follow.",
      },
    ],
  },
  LoginVerficationPage: {
    pageTitle: "Two-Step Verification",
    list: [
      {
        title: "Two-Step Verification",
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "SMS",
          reducer: setTwoFactorAuthentication,
          value: "sms",
        },
        description:
          "You will receive a text message with a verification code on your phone when logging into PG.",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "Authentication App",
          reducer: setTwoFactorAuthentication,
          value: "app",
        },
        description:
          "Use a mobile authentication app to receive a verification code every time you log into PG.",
        top: true,
      },
      {
        type: "checkbox",
        selector: getTwoFactorAuthentication,
        comp: {
          text: "Security Key",
          reducer: setTwoFactorAuthentication,
          value: "key",
        },
        description:
          "Use a security key that you either input into your computer or sync with your mobile device when logging into PG. Supported mobile devices or web browsers are required.",
        top: true,
      },
    ],
  },
  IdVerficationPage: {
    pageTitle: "ID Verification",
    description:
      "Verify your ID to protect your account from impersonation and display an ID verification label on your profile.",
    list: [
      {
        type: "checkbox",
        selector: getHideLabel,
        comp: {
          text: "Hide ID Verification Label",
          reducer: setHideLabel,
        },
        description:
          "Prevents the ID verification label from being displayed when people tap the blue checkmark on my profile page.",
        disabled: true,
      },
      {
        type: "link",
        comp: {
          text: "Help Center",
          path: "https://help.x.com/ko/rules-and-policies/verification-policy",
        },
      },
    ],
  },
  GenderPage: {
    pageTitle: "Gender",
    description:
      "If no gender is specified, it may be inferred based on your profile and activity on the account. This information is not publicly displayed.",
    list: [
      {
        type: "checkbox",
        comp: {
          text: "Female",
          value: "f",
        },
      },
      {
        type: "checkbox",
        comp: {
          text: "Male",
          value: "m",
        },
      },
    ],
    item: {
      type: "checkbox",
      comp: {
        text: "Add a new gender.",
        value: false,
      },
    },
    input: {
      fieldTitle: "Gender",
    },
    button: {
      text: "Save",
    },
  },
  ScreenNamePage: {
    pageTitle: "Change Username",
    input: {
      fieldTitle: "User ID",
      validation: regExp.userId.default,
    },
    title: "Recommendations",
    button: {
      text: "Save",
    },
    validations: [
      {
        regExp: regExp.userId.countError,
        msg: "User ID must be between 4 and 15 characters.",
      },
      {
        regExp: regExp.userId.typeError,
        msg: "User ID can only contain uppercase and lowercase letters and numbers.",
      },
      {
        regExp: regExp.userId.numberError,
        msg: "User ID must contain at least one uppercase or lowercase letter.",
      },
    ],
  },
  PhonePage: {
    pageTitle: "Change Phone Number",
    addPhone: "Add Phone Number",
  },
  EmailPage: {
    pageTitle: "Change Email",
    input: {
      fieldTitle: "Current Email",
    },
  },
  LanguagePage: {
    pageTitle: "Change Display Language",
    description:
      "Select the default language for PG headlines, buttons, and other text used in this account. This will not change the language of content displayed on your timeline.",
  },
  AgePage: {
    pageTitle: "Age",
    description: "The age range estimated by Twitter.",
    info: "Is the information incorrect? You can add your birthday to your profile without making it public.",
  },
  PasswordPage: {
    pageTitle: "Change Password",
    fieldTitle1: "Current Password",
    hyperlink: "Forgot your password?",
    fieldTitle2: "New Password",
    fieldTitle3: "Confirm Password",
    validation: regExp.password.default,
    validations: [
      {
        regExp: regExp.password.countError,
        msg: "Password must be between 8 and 20 characters.",
      },
      {
        regExp: regExp.password.typeError,
        msg: "Password must include at least one uppercase letter, one special character, and one number.",
      },
    ],
    button: {
      text: "Save",
    },
  },
};

export default pages;

// 설정 관련 slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AllowMessageType,
  AutoplayType,
  ColorThemeType,
  FontSizeType,
  MuteDurationType,
  MuteTargetType,
  MuteType,
  SettingsType,
  TaggingWhomType,
  TwoFactorAuthentication,
} from "@shared/@common/types";
import {
  PopularPostsType,
  PushNotificationsCustomType,
  ReplyMessageType,
} from "@shared/@common/types/settings";

const initialState: SettingsType = {
  bgTheme: "light",
  colorTheme: "cornflowerblue",
  fontSize: "b",
  isVisible: true,
  allowMessages: "all",
  filterMessages: true,
  showRead: false,
  findByEmail: false,
  findByPhone: false,
  allowBehavioralAds: false,
  allowLocationAds: false,
  colorContrast: false,
  reduceMotion: false,
  addImgExpl: false, // 이미지 설명 추가 알림
  dataSaver: false,
  autoplay: "off",
  isPrivate: false,
  protectVideo: false,
  tagSensitiveMedia: false, // 포스트 할 때 민감한 미디어 표시하기
  displaySensitiveMedia: false, // 피드에 민감한 미디어 표시하기
  addLocationInfo: false,
  notifications: {
    qualityFilter: false,
    mutesNotifications: {
      notFollowing: false,
      notFollower: false,
      newAccount: false,
      defaultProfile: false,
      emailAuthenticated: false,
      phoneAuthenticated: false,
    },
    emailNotification: false,
    emailNotifications: {
      newNotification: true,
      messages: true,
      postsSentByEmail: true,
      popularPosts: "off",
      myStatics: true,
      PGUpdates: true,
      PGTips: true,
      PGLatest: true,
      PGPartners: true,
      PGSurvey: true,
      PGRecommend: true,
      PGRecentFollowings: true,
      PGBusiness: true,
    },
    pushNotification: false,
    pushNotifications: {
      posts: true,
      replies: "custom",
      reposts: "custom",
      likes: "custom",
      photoTags: true,
      newFollower: true,
      messages: true,
      replyMessage: "mine",
      joinPplInContacts: true,
      topics: true,
      newsAndSports: true,
      recommend: true,
      moments: true,
      lives: true,
      otherLives: true,
      alertAndAgent: true,
      professional: true,
    },
  },
  protectRenewPassword: false, // 비밀번호 재설정 보호
  twoFactorAuthentication: "", // 2단계 인증
  hideLabel: false,
  connectedApps: [],
  sessions: [],
  loginHistory: [],
  devices: [],
  connectedAccounts: [],
  canBeInvited: false,
  delegate: {
    groups: [],
    members: [],
  },
  tagging: {
    allow: false,
    whom: "all",
  },
  topics: ["강해린", "뉴진스"],
  mutedKeywords: [],
  mute: {
    homeFeed: true,
    notification: true,
    target: "notFollowing",
    duration: "forever",
  },
  contacts: [],
  interests: [],
  audiences: [],
  locations: [],
};

// 페이지 로드 전에 setting를 먼저 로드해야 함
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBackgroundTheme: (state, action) => {
      state.bgTheme = action.payload;
    },
    setColorTheme: (state, action: PayloadAction<ColorThemeType>) => {
      state.colorTheme = action.payload;
    },
    setFontSize: (state, action: PayloadAction<FontSizeType>) => {
      state.fontSize = action.payload;
    },
    setAllowMessages: (state, action: PayloadAction<AllowMessageType>) => {
      state.allowMessages = action.payload;
    },
    setFilterMessages: (state, action: PayloadAction<boolean>) => {
      state.filterMessages = action.payload;
    },
    setShowRead: (state, action: PayloadAction<boolean>) => {
      state.showRead = action.payload;
    },
    setFindByEmail: (state, action: PayloadAction<boolean>) => {
      state.findByEmail = action.payload;
    },
    setFindByPhone: (state, action: PayloadAction<boolean>) => {
      state.findByPhone = action.payload;
    },
    setAllowBehavioralAds: (state, action: PayloadAction<boolean>) => {
      state.allowBehavioralAds = action.payload;
    },
    setAllowLocationAds: (state, action: PayloadAction<boolean>) => {
      state.allowLocationAds = action.payload;
    },
    setQualityFilter: (state, action: PayloadAction<boolean>) => {
      state.notifications.qualityFilter = action.payload;
    },
    setColorContrast: (state, action: PayloadAction<boolean>) => {
      state.colorContrast = action.payload;
    },
    setReduceMotion: (state, action: PayloadAction<boolean>) => {
      state.reduceMotion = action.payload;
    },
    setAddImgExpl: (state, action: PayloadAction<boolean>) => {
      state.addImgExpl = action.payload;
    },
    setDataSaver: (state, action: PayloadAction<boolean>) => {
      state.dataSaver = action.payload;
    },
    setAutoplay: (state, action: PayloadAction<AutoplayType>) => {
      state.autoplay = action.payload;
    },
    setIsPrivate: (state, action: PayloadAction<boolean>) => {
      state.isPrivate = action.payload;
    },
    setProtectVideo: (state, action: PayloadAction<boolean>) => {
      state.protectVideo = action.payload;
    },
    setTagSensitiveMedia: (state, action: PayloadAction<boolean>) => {
      state.tagSensitiveMedia = action.payload;
    },
    setDisplaySensitiveMedia: (state, action: PayloadAction<boolean>) => {
      state.displaySensitiveMedia = action.payload;
    },
    setAddLocationInfo: (state, action: PayloadAction<boolean>) => {
      state.addLocationInfo = action.payload;
    },
    setMuteNotFollowing: (state, action: PayloadAction<boolean>) => {
      state.notifications.mutesNotifications.notFollowing = action.payload;
    },
    setMuteNotFollower: (state, action: PayloadAction<boolean>) => {
      state.notifications.mutesNotifications.notFollower = action.payload;
    },
    setMuteNewAccount: (state, action: PayloadAction<boolean>) => {
      state.notifications.mutesNotifications.newAccount = action.payload;
    },
    setMuteDefaultProfile: (state, action: PayloadAction<boolean>) => {
      state.notifications.mutesNotifications.defaultProfile = action.payload;
    },
    setMuteEmailAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.notifications.mutesNotifications.emailAuthenticated =
        action.payload;
    },
    setMutePhoneAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.notifications.mutesNotifications.phoneAuthenticated =
        action.payload;
    },
    setProtectRenewPassword: (state, action: PayloadAction<boolean>) => {
      state.protectRenewPassword = action.payload;
    },
    setTwoFactorAuthentication: (
      state,
      action: PayloadAction<TwoFactorAuthentication>
    ) => {
      const value = action.payload;

      if (value !== state.twoFactorAuthentication) {
        state.twoFactorAuthentication = value;
      } else {
        state.twoFactorAuthentication = "";
      }
    },
    setHideLabel: (state, action: PayloadAction<boolean>) => {
      state.hideLabel = action.payload;
    },
    setConnectedApps: (state, action: PayloadAction<string>) => {
      state.connectedApps = [...state.connectedApps, action.payload];
    },
    setSessions: (state, action: PayloadAction<string>) => {
      state.sessions = [...state.sessions, action.payload];
    },
    setLoginHistory: (state, action: PayloadAction<string>) => {
      state.loginHistory = [...state.loginHistory, action.payload];
    },
    setDevices: (state, action: PayloadAction<string>) => {
      state.devices = [...state.devices, action.payload];
    },
    setConnectedAccounts: (state, action: PayloadAction<string>) => {
      state.connectedAccounts = [...state.connectedAccounts, action.payload];
    },
    setDelegateGroups: (state, action: PayloadAction<string>) => {
      state.delegate.groups = [...state.delegate.groups, action.payload];
    },
    setDelegateMembers: (state, action: PayloadAction<string>) => {
      state.delegate.members = [...state.delegate.members, action.payload];
    },
    setCanBeInvited: (state, action: PayloadAction<boolean>) => {
      state.canBeInvited = action.payload;
    },
    setAllowTagging: (state, action: PayloadAction<boolean>) => {
      state.tagging.allow = action.payload;
    },
    setAllowTaggingWhom: (state, action: PayloadAction<TaggingWhomType>) => {
      state.tagging.whom = action.payload;
    },
    setTopics: (state, action: PayloadAction<string[]>) => {
      state.topics = action.payload;
    },
    setMutedKeywords: (state, action: PayloadAction<string[]>) => {
      state.mutedKeywords = action.payload;
    },
    setMute: (state, action: PayloadAction<MuteType>) => {
      state.mute = action.payload;
    },
    setMuteinHomeFeed: (state, action: PayloadAction<boolean>) => {
      state.mute.homeFeed = action.payload;
    },
    setMuteNotification: (state, action: PayloadAction<boolean>) => {
      state.mute.notification = action.payload;
    },
    setMuteTarget: (state, action: PayloadAction<MuteTargetType>) => {
      state.mute.target = action.payload;
    },
    setMuteDuration: (state, action: PayloadAction<MuteDurationType>) => {
      state.mute.duration = action.payload;
    },
    setContacts: (state, action: PayloadAction<string[]>) => {
      state.contacts = action.payload;
    },
    setInterests: (state, action: PayloadAction<string[]>) => {
      state.interests = action.payload;
    },
    setAudiences: (state, action: PayloadAction<string[]>) => {
      state.audiences = action.payload;
    },
    setLocations: (state, action: PayloadAction<string[]>) => {
      state.locations = action.payload;
    },
    setEmailNotification: (state, action: PayloadAction<boolean>) => {
      state.notifications.emailNotification = action.payload;
    },
    setEmailNotificationsNewNotification: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.emailNotifications.newNotification = action.payload;
    },
    setEmailNotificationsMessages: (state, action: PayloadAction<boolean>) => {
      state.notifications.emailNotifications.messages = action.payload;
    },
    setEmailNotificationsPostsSentByEmail: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.emailNotifications.postsSentByEmail = action.payload;
    },
    setEmailNotificationsPopularPosts: (
      state,
      action: PayloadAction<PopularPostsType>
    ) => {
      state.notifications.emailNotifications.popularPosts = action.payload;
    },
    setEmailNotificationsMyStatics: (state, action: PayloadAction<boolean>) => {
      state.notifications.emailNotifications.myStatics = action.payload;
    },
    setEmailNotificationsPGUpdates: (state, action: PayloadAction<boolean>) => {
      state.notifications.emailNotifications.PGUpdates = action.payload;
    },
    setEmailNotificationsPGTips: (state, action: PayloadAction<boolean>) => {
      state.notifications.emailNotifications.PGTips = action.payload;
    },
    setEmailNotificationsPGLatest: (state, action: PayloadAction<boolean>) => {
      state.notifications.emailNotifications.PGLatest = action.payload;
    },
    setEmailNotificationsPGPartners: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.emailNotifications.PGPartners = action.payload;
    },
    setEmailNotificationsPGSurvey: (state, action: PayloadAction<boolean>) => {
      state.notifications.emailNotifications.PGSurvey = action.payload;
    },
    setEmailNotificationsPGRecommend: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.emailNotifications.PGRecommend = action.payload;
    },
    setEmailNotificationsPGRecentFollowings: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.emailNotifications.PGRecentFollowings =
        action.payload;
    },
    setEmailNotificationsPGBusiness: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.emailNotifications.PGBusiness = action.payload;
    },
    setPushNotification: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotification = action.payload;
    },
    setPushNotificationsPosts: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.posts = action.payload;
    },
    setPushNotificationsReplies: (
      state,
      action: PayloadAction<PushNotificationsCustomType>
    ) => {
      state.notifications.pushNotifications.replies = action.payload;
    },
    setPushNotificationsReposts: (
      state,
      action: PayloadAction<PushNotificationsCustomType>
    ) => {
      state.notifications.pushNotifications.reposts = action.payload;
    },
    setPushNotificationsLikes: (
      state,
      action: PayloadAction<PushNotificationsCustomType>
    ) => {
      state.notifications.pushNotifications.likes = action.payload;
    },
    setPushNotificationsPhotoTags: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.photoTags = action.payload;
    },
    setPushNotificationsNewFollower: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.pushNotifications.newFollower = action.payload;
    },
    setPushNotificationsMessages: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.messages = action.payload;
    },
    setPushNotificationsReplyMessage: (
      state,
      action: PayloadAction<ReplyMessageType>
    ) => {
      state.notifications.pushNotifications.replyMessage = action.payload;
    },
    setPushNotificationsJoinPplInContacts: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.pushNotifications.joinPplInContacts = action.payload;
    },
    setPushNotificationsTopics: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.topics = action.payload;
    },
    setPushNotificationsNewsAndSports: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.pushNotifications.newsAndSports = action.payload;
    },
    setPushNotificationsRecommend: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.recommend = action.payload;
    },
    setPushNotificationsMoments: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.moments = action.payload;
    },
    setPushNotificationsLives: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.lives = action.payload;
    },
    setPushNotificationsOtherLives: (state, action: PayloadAction<boolean>) => {
      state.notifications.pushNotifications.otherLives = action.payload;
    },
    setPushNotificationsAlertAndAgent: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.pushNotifications.alertAndAgent = action.payload;
    },
    setPushNotificationsProfessional: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.pushNotifications.professional = action.payload;
    },
  },
});

export default settingsSlice.reducer;

export const {
  setBackgroundTheme,
  setColorTheme,
  setFontSize,
  setAllowMessages,
  setFilterMessages,
  setShowRead,
  setFindByEmail,
  setFindByPhone,
  setAllowBehavioralAds,
  setAllowLocationAds,
  setQualityFilter,
  setColorContrast,
  setReduceMotion,
  setAddImgExpl,
  setDataSaver,
  setAutoplay,
  setIsPrivate,
  setProtectVideo,
  setTagSensitiveMedia,
  setDisplaySensitiveMedia,
  setAddLocationInfo,
  setMuteNotFollowing,
  setMuteNotFollower,
  setMuteNewAccount,
  setMuteDefaultProfile,
  setMuteEmailAuthenticated,
  setMutePhoneAuthenticated,
  setProtectRenewPassword,
  setTwoFactorAuthentication,
  setHideLabel,
  setConnectedApps,
  setSessions,
  setLoginHistory,
  setDevices,
  setConnectedAccounts,
  setCanBeInvited,
  setDelegateGroups,
  setDelegateMembers,
  setAllowTagging,
  setAllowTaggingWhom,
  setTopics,
  setMutedKeywords,
  setMute,
  setMuteinHomeFeed,
  setMuteNotification,
  setMuteTarget,
  setMuteDuration,
  setContacts,
  setInterests,
  setAudiences,
  setLocations,
  setEmailNotification,
  setEmailNotificationsNewNotification,
  setEmailNotificationsMessages,
  setEmailNotificationsPostsSentByEmail,
  setEmailNotificationsPopularPosts,
  setEmailNotificationsMyStatics,
  setEmailNotificationsPGUpdates,
  setEmailNotificationsPGTips,
  setEmailNotificationsPGLatest,
  setEmailNotificationsPGPartners,
  setEmailNotificationsPGSurvey,
  setEmailNotificationsPGRecommend,
  setEmailNotificationsPGRecentFollowings,
  setEmailNotificationsPGBusiness,
  setPushNotification,
  setPushNotificationsPosts,
  setPushNotificationsReplies,
  setPushNotificationsReposts,
  setPushNotificationsLikes,
  setPushNotificationsPhotoTags,
  setPushNotificationsNewFollower,
  setPushNotificationsMessages,
  setPushNotificationsReplyMessage,
  setPushNotificationsJoinPplInContacts,
  setPushNotificationsTopics,
  setPushNotificationsNewsAndSports,
  setPushNotificationsRecommend,
  setPushNotificationsMoments,
  setPushNotificationsLives,
  setPushNotificationsOtherLives,
  setPushNotificationsAlertAndAgent,
  setPushNotificationsProfessional,
} = settingsSlice.actions;

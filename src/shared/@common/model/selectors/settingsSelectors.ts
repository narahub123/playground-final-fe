import { RootState } from "@app/store";

const getSettings = (state: RootState) => state.settings;
const getBgTheme = (state: RootState) => state.settings.bgTheme;
const getLanguage = (state: RootState) => state.settings.language;
const getColorTheme = (state: RootState) => state.settings.colorTheme;
const getFontSize = (state: RootState) => state.settings.fontSize;
const getAllowMessages = (state: RootState) => state.settings.allowMessages;
const getHideMessages = (state: RootState) => state.settings.hideMessages;
const getShowRead = (state: RootState) => state.settings.showRead;
const getFindByEmail = (state: RootState) => state.settings.findByEmail;
const getFindByPhone = (state: RootState) => state.settings.findByPhone;
const getAllowBehavioralAds = (state: RootState) =>
  state.settings.allowBehavioralAds;
const getAllowLocationAds = (state: RootState) =>
  state.settings.allowLocationAds;
const getQualityFilter = (state: RootState) => state.settings.qualityFilter;
const getColorContrast = (state: RootState) => state.settings.colorContrast;
const getReduceMotion = (state: RootState) => state.settings.reduceMotion;
const getAddImgExpl = (state: RootState) => state.settings.addImgExpl;
const getDataSaver = (state: RootState) => state.settings.dataSaver;
const getAutoplay = (state: RootState) => state.settings.autoplay;
const getIsPrivate = (state: RootState) => state.settings.isPrivate;
const getProtectVideo = (state: RootState) => state.settings.protectVideo;
const getTagSensitiveMedia = (state: RootState) =>
  state.settings.tagSensitiveMedia;
const getDisplaySensitiveMedia = (state: RootState) =>
  state.settings.displaySensitiveMedia;
const getAddLocationInfo = (state: RootState) => state.settings.addLocationInfo;
const getMuteNotFollowing = (state: RootState) =>
  state.settings.notifications.mutes.notFollowing;
const getMuteNotFollower = (state: RootState) =>
  state.settings.notifications.mutes.notFollower;
const getMuteNewAccount = (state: RootState) =>
  state.settings.notifications.mutes.newAccount;
const getMuteDefaultProfile = (state: RootState) =>
  state.settings.notifications.mutes.defaultProfile;
const getMuteEmailAuthenticated = (state: RootState) =>
  state.settings.notifications.mutes.emailAuthenticated;
const getMutePhoneAuthenticated = (state: RootState) =>
  state.settings.notifications.mutes.phoneAuthenticated;
const getProtectRenewPassword = (state: RootState) =>
  state.settings.protectRenewPassword;
const getTwoFactorAuthentication = (state: RootState) =>
  state.settings.twoFactorAuthentication;
const getHideLabel = (state: RootState) => state.settings.hideLabel;
const getConnectedApps = (state: RootState) => state.settings.connectedApps;
const getSessions = (state: RootState) => state.settings.sessions;
const getLoginHistory = (state: RootState) => state.settings.loginHistory;
const getDevices = (state: RootState) => state.settings.devices;
const getConnectedAccounts = (state: RootState) =>
  state.settings.connectedAccounts;
const getDelegate = (state: RootState) => state.settings.delegate;
const getDelegateGroups = (state: RootState) => state.settings.delegate.groups;
const getDelegateMembers = (state: RootState) =>
  state.settings.delegate.members;
const getCanbeInvited = (state: RootState) => state.settings.canBeInvited;
const getAllowTagging = (state: RootState) => state.settings.tagging.allow;
const getAllowTaggingWhom = (state: RootState) => state.settings.tagging.whom;
const getTopics = (state: RootState) => state.settings.topics;
const getMute = (state: RootState) => state.settings.mute;
const getMutedKeywords = (state: RootState) => state.settings.mutedKeywords;
const getMuteinHomeFeed = (state: RootState) => state.settings.mute.homeFeed;
const getMuteNotification = (state: RootState) =>
  state.settings.mute.notification;
const getMuteTarget = (state: RootState) => state.settings.mute.target;
const getMuteDuration = (state: RootState) => state.settings.mute.duration;
const getContacts = (state: RootState) => state.settings.contacts;
const getInterests = (state: RootState) => state.settings.interests;
const getAudiences = (state: RootState) => state.settings.audiences;
const getLocations = (state: RootState) => state.settings.locations;
const getEmailNotification = (state: RootState) =>
  state.settings.emailNotification;
const getEmailNotificationsNewNotification = (state: RootState) =>
  state.settings.emailNotifications.newNotification;
const getEmailNotificationsMessages = (state: RootState) =>
  state.settings.emailNotifications.messages;
const getEmailNotificationsPostsSentByEmail = (state: RootState) =>
  state.settings.emailNotifications.postsSentByEmail;
const getEmailNotificationsPopularPosts = (state: RootState) =>
  state.settings.emailNotifications.popularPosts;
const getEmailNotificationsMyStatics = (state: RootState) =>
  state.settings.emailNotifications.myStatics;
const getEmailNotificationsPGUpdates = (state: RootState) =>
  state.settings.emailNotifications.PGUpdates;
const getEmailNotificationsPGTips = (state: RootState) =>
  state.settings.emailNotifications.PGTips;
const getEmailNotificationsPGLatest = (state: RootState) =>
  state.settings.emailNotifications.PGLatest;
const getEmailNotificationsPGPartners = (state: RootState) =>
  state.settings.emailNotifications.PGPartners;
const getEmailNotificationsPGSurvey = (state: RootState) =>
  state.settings.emailNotifications.PGSurvey;
const getEmailNotificationsPGRecommend = (state: RootState) =>
  state.settings.emailNotifications.PGRecommend;
const getEmailNotificationsPGRecentFollowings = (state: RootState) =>
  state.settings.emailNotifications.PGRecentFollowings;
const getEmailNotificationsPGBusiness = (state: RootState) =>
  state.settings.emailNotifications.PGBusiness;
const getPushNotification = (state: RootState) =>
  state.settings.pushNotification;
const getPushNotificationsPosts = (state: RootState) =>
  state.settings.pushNotificatins.posts;
const getPushNotificationsReplies = (state: RootState) =>
  state.settings.pushNotificatins.replies;
const getPushNotificationsReposts = (state: RootState) =>
  state.settings.pushNotificatins.reposts;
const getPushNotificationsLikes = (state: RootState) =>
  state.settings.pushNotificatins.likes;
const getPushNotificationsPhotoTags = (state: RootState) =>
  state.settings.pushNotificatins.photoTags;
const getPushNotificationsNewFollower = (state: RootState) =>
  state.settings.pushNotificatins.newFollower;
const getPushNotificationsMessages = (state: RootState) =>
  state.settings.pushNotificatins.messages;
const getPushNotificationsReplyMessage = (state: RootState) =>
  state.settings.pushNotificatins.replyMessage;
const getPushNotificationsJoinPplInContacts = (state: RootState) =>
  state.settings.pushNotificatins.joinPplInContacts;
const getPushNotificationsTopics = (state: RootState) =>
  state.settings.pushNotificatins.topics;
const getPushNotificationsNewsAndSports = (state: RootState) =>
  state.settings.pushNotificatins.newsAndSports;
const getPushNotificationsRecommend = (state: RootState) =>
  state.settings.pushNotificatins.recommend;
const getPushNotificationsMoments = (state: RootState) =>
  state.settings.pushNotificatins.moments;
const getPushNotificationsLives = (state: RootState) =>
  state.settings.pushNotificatins.lives;
const getPushNotificationsOtherLives = (state: RootState) =>
  state.settings.pushNotificatins.otherLives;
const getPushNotificationsAlertAndAgent = (state: RootState) =>
  state.settings.pushNotificatins.alertAndAgent;
const getPushNotificationsProfessional = (state: RootState) =>
  state.settings.pushNotificatins.professional;

export {
  getSettings,
  getBgTheme,
  getLanguage,
  getColorTheme,
  getFontSize,
  getAllowMessages,
  getHideMessages,
  getShowRead,
  getFindByEmail,
  getFindByPhone,
  getAllowBehavioralAds,
  getAllowLocationAds,
  getQualityFilter,
  getColorContrast,
  getReduceMotion,
  getAddImgExpl,
  getDataSaver,
  getAutoplay,
  getIsPrivate,
  getProtectVideo,
  getTagSensitiveMedia,
  getDisplaySensitiveMedia,
  getAddLocationInfo,
  getMuteNotFollowing,
  getMuteNotFollower,
  getMuteNewAccount,
  getMuteDefaultProfile,
  getMuteEmailAuthenticated,
  getMutePhoneAuthenticated,
  getProtectRenewPassword,
  getTwoFactorAuthentication,
  getHideLabel,
  getConnectedApps,
  getSessions,
  getLoginHistory,
  getDevices,
  getConnectedAccounts,
  getCanbeInvited,
  getDelegate,
  getDelegateGroups,
  getDelegateMembers,
  getAllowTagging,
  getAllowTaggingWhom,
  getTopics,
  getMutedKeywords,
  getMute,
  getMuteinHomeFeed,
  getMuteNotification,
  getMuteTarget,
  getMuteDuration,
  getContacts,
  getInterests,
  getAudiences,
  getLocations,
  getEmailNotification,
  getEmailNotificationsNewNotification,
  getEmailNotificationsMessages,
  getEmailNotificationsPostsSentByEmail,
  getEmailNotificationsPopularPosts,
  getEmailNotificationsMyStatics,
  getEmailNotificationsPGUpdates,
  getEmailNotificationsPGTips,
  getEmailNotificationsPGLatest,
  getEmailNotificationsPGPartners,
  getEmailNotificationsPGSurvey,
  getEmailNotificationsPGRecommend,
  getEmailNotificationsPGRecentFollowings,
  getEmailNotificationsPGBusiness,
  getPushNotification,
  getPushNotificationsPosts,
  getPushNotificationsReplies,
  getPushNotificationsReposts,
  getPushNotificationsLikes,
  getPushNotificationsPhotoTags,
  getPushNotificationsNewFollower,
  getPushNotificationsMessages,
  getPushNotificationsReplyMessage,
  getPushNotificationsJoinPplInContacts,
  getPushNotificationsTopics,
  getPushNotificationsNewsAndSports,
  getPushNotificationsRecommend,
  getPushNotificationsMoments,
  getPushNotificationsLives,
  getPushNotificationsOtherLives,
  getPushNotificationsAlertAndAgent,
  getPushNotificationsProfessional,
};

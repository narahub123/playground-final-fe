import { RootState } from "@app/store";

const getSettings = (state: RootState) => state.settings;
const getBgTheme = (state: RootState) => state.settings.bgTheme;
const getColorTheme = (state: RootState) => state.settings.colorTheme;
const getFontSize = (state: RootState) => state.settings.fontSize;
const getAllowMessages = (state: RootState) => state.settings.allowMessages;
const getFilterMessages = (state: RootState) => state.settings.filterMessages;
const getShowRead = (state: RootState) => state.settings.showRead;
const getFindByEmail = (state: RootState) => state.settings.findByEmail;
const getFindByPhone = (state: RootState) => state.settings.findByPhone;
const getAllowBehavioralAds = (state: RootState) =>
  state.settings.allowBehavioralAds;
const getAllowLocationAds = (state: RootState) =>
  state.settings.allowLocationAds;
const getQualityFilter = (state: RootState) =>
  state.settings.notifications.qualityFilter;
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
  state.settings.notifications.mutesNotifications.notFollowing;
const getMuteNotFollower = (state: RootState) =>
  state.settings.notifications.mutesNotifications.notFollower;
const getMuteNewAccount = (state: RootState) =>
  state.settings.notifications.mutesNotifications.newAccount;
const getMuteDefaultProfile = (state: RootState) =>
  state.settings.notifications.mutesNotifications.defaultProfile;
const getMuteEmailAuthenticated = (state: RootState) =>
  state.settings.notifications.mutesNotifications.emailAuthenticated;
const getMutePhoneAuthenticated = (state: RootState) =>
  state.settings.notifications.mutesNotifications.phoneAuthenticated;
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
  state.settings.notifications.emailNotification;
const getEmailNotificationsNewNotification = (state: RootState) =>
  state.settings.notifications.emailNotifications.newNotification;
const getEmailNotificationsMessages = (state: RootState) =>
  state.settings.notifications.emailNotifications.messages;
const getEmailNotificationsPostsSentByEmail = (state: RootState) =>
  state.settings.notifications.emailNotifications.postsSentByEmail;
const getEmailNotificationsPopularPosts = (state: RootState) =>
  state.settings.notifications.emailNotifications.popularPosts;
const getEmailNotificationsMyStatics = (state: RootState) =>
  state.settings.notifications.emailNotifications.myStatics;
const getEmailNotificationsPGUpdates = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGUpdates;
const getEmailNotificationsPGTips = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGTips;
const getEmailNotificationsPGLatest = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGLatest;
const getEmailNotificationsPGPartners = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGPartners;
const getEmailNotificationsPGSurvey = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGSurvey;
const getEmailNotificationsPGRecommend = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGRecommend;
const getEmailNotificationsPGRecentFollowings = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGRecentFollowings;
const getEmailNotificationsPGBusiness = (state: RootState) =>
  state.settings.notifications.emailNotifications.PGBusiness;
const getPushNotification = (state: RootState) =>
  state.settings.notifications.pushNotification;
const getPushNotificationsPosts = (state: RootState) =>
  state.settings.notifications.pushNotifications.posts;
const getPushNotificationsReplies = (state: RootState) =>
  state.settings.notifications.pushNotifications.replies;
const getPushNotificationsReposts = (state: RootState) =>
  state.settings.notifications.pushNotifications.reposts;
const getPushNotificationsLikes = (state: RootState) =>
  state.settings.notifications.pushNotifications.likes;
const getPushNotificationsPhotoTags = (state: RootState) =>
  state.settings.notifications.pushNotifications.photoTags;
const getPushNotificationsNewFollower = (state: RootState) =>
  state.settings.notifications.pushNotifications.newFollower;
const getPushNotificationsMessages = (state: RootState) =>
  state.settings.notifications.pushNotifications.messages;
const getPushNotificationsReplyMessage = (state: RootState) =>
  state.settings.notifications.pushNotifications.replyMessage;
const getPushNotificationsJoinPplInContacts = (state: RootState) =>
  state.settings.notifications.pushNotifications.joinPplInContacts;
const getPushNotificationsTopics = (state: RootState) =>
  state.settings.notifications.pushNotifications.topics;
const getPushNotificationsNewsAndSports = (state: RootState) =>
  state.settings.notifications.pushNotifications.newsAndSports;
const getPushNotificationsRecommend = (state: RootState) =>
  state.settings.notifications.pushNotifications.recommend;
const getPushNotificationsMoments = (state: RootState) =>
  state.settings.notifications.pushNotifications.moments;
const getPushNotificationsLives = (state: RootState) =>
  state.settings.notifications.pushNotifications.lives;
const getPushNotificationsOtherLives = (state: RootState) =>
  state.settings.notifications.pushNotifications.otherLives;
const getPushNotificationsAlertAndAgent = (state: RootState) =>
  state.settings.notifications.pushNotifications.alertAndAgent;
const getPushNotificationsProfessional = (state: RootState) =>
  state.settings.notifications.pushNotifications.professional;

export {
  getSettings,
  getBgTheme,
  getColorTheme,
  getFontSize,
  getAllowMessages,
  getFilterMessages,
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

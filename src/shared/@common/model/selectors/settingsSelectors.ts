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
const getMutedKeywords = (state: RootState) => state.settings.mutedKeywords;

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
};

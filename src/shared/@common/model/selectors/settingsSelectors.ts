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
};

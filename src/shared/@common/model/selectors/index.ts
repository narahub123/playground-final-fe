import {
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
} from "./settingsSelectors";
import { getIsLoggedIn } from "./loginSelector";
import { getUser, getProfileImage } from "./userSelector";
import {
  getSigninInfo,
  getSigninUser,
  getSigninUserSettings,
} from "./signinSelector";

export {
  // userSettings
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
  // login
  getIsLoggedIn,
  // user
  getUser,
  getProfileImage,
  // signin
  getSigninInfo,
  getSigninUser,
  getSigninUserSettings,
};

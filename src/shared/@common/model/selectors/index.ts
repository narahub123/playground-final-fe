import {
  getBgTheme,
  getLanguage,
  getColorTheme,
  getFontSize,
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

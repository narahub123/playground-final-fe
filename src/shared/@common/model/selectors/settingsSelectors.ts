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
};

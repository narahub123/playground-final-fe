import { RootState } from "@app/store";

const getBgTheme = (state: RootState) => state.settings.bgTheme;
const getLanguage = (state: RootState) => state.settings.language;
const getColorTheme = (state: RootState) => state.settings.colorTheme;

export { getBgTheme, getLanguage, getColorTheme };

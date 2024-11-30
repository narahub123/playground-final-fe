import { RootState } from "@app/store";

const getBgTheme = (state: RootState) => state.settings.bgTheme;
const getLanguage = (state: RootState) => state.settings.language;

export { getBgTheme, getLanguage };

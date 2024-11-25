import { RootState } from "@app/store";

const getBgTheme = (state: RootState) => state.settings.bgTheme;

export { getBgTheme };

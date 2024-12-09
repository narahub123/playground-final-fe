// 설정 관련 slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AllowMessageType,
  ColorThemeType,
  FontSizeType,
  SettingsType,
} from "@shared/@common/types";

const initialState: SettingsType = {
  bgTheme: "light",
  language: "ko-KR",
  colorTheme: "cornflowerblue",
  fontSize: "b",
  isVisible: true,
  allowMessages: "all",
  hideMessages: true,
  showRead: false,
};

// 페이지 로드 전에 setting를 먼저 로드해야 함
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBackgroundTheme: (state, action) => {
      state.bgTheme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setColorTheme: (state, action: PayloadAction<ColorThemeType>) => {
      state.colorTheme = action.payload;
    },
    setFontSize: (state, action: PayloadAction<FontSizeType>) => {
      state.fontSize = action.payload;
    },
    setAllowMessages: (state, action: PayloadAction<AllowMessageType>) => {
      state.allowMessages = action.payload;
    },
    setHideMessages: (state, action: PayloadAction<boolean>) => {
      state.hideMessages = action.payload;
    },
    setShowRead: (state, action: PayloadAction<boolean>) => {
      state.showRead = action.payload;
    },
  },
});

export default settingsSlice.reducer;

export const {
  setBackgroundTheme,
  setLanguage,
  setColorTheme,
  setFontSize,
  setAllowMessages,
  setHideMessages,
  setShowRead,
} = settingsSlice.actions;

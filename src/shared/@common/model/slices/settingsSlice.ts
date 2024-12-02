// 설정 관련 slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  bgTheme: string;
  language: string;
}

const initialState: SettingsState = {
  bgTheme: "light",
  language: "ko-KR",
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
  },
});

export default settingsSlice.reducer;

export const { setBackgroundTheme, setLanguage } = settingsSlice.actions;

// 설정 관련 slice
import { createSlice } from "@reduxjs/toolkit";

// 페이지 로드 전에 setting를 먼저 로드해야 함
const settingsSlice = createSlice({
  name: "settings",
  initialState: {},
  reducers: {},
});

export default settingsSlice.reducer;

export const {} = settingsSlice.actions;

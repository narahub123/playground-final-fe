import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
export const {} = loginSlice.actions;

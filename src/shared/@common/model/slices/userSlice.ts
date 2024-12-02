import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  profileImage?: string;
}

const initialState: UserState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

export const {} = userSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@shared/@common/types";

const initialState: UserType = {
  userId: "abcdefg",
  username: "몰러",
  profileImage: "",
  phone: "01001010101",
  email: "example@example.com",
  isAuthenticated: false,
  regDate: new Date(),
  language: "ko-KR",
  gender: "f",
  birth: "20060515",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserType>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;

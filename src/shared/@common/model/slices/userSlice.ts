import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profile1 } from "@shared/@common/assets/images";
import { UserType } from "@shared/@common/types";
import { GenderType } from "@shared/@common/types/user";

const initialState: UserType = {
  userId: "abcdefg",
  username: "몰러",
  profileImage: profile1,
  phone: ["01001010101"],
  email: "example@example.com",
  isAuthenticated: false,
  regDate: new Date(),
  country: "kr",
  language: "ko-KR",
  gender: "f",
  birth: "20060515",
  intro: "안녕하세요.",
  blockedUsers: ["abcdefg"],
  followings: [],
  followers: [],
  mutes: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserType>>) => {
      return { ...state, ...action.payload };
    },
    setGender: (state, action: PayloadAction<GenderType>) => {
      state.gender = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setPhone: (state, action: PayloadAction<string[]>) => {
      state.phone = [...state.phone, ...action.payload];
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setBlockedUsers: (state, action: PayloadAction<string[]>) => {
      state.blockedUsers = action.payload;
    },
    setFollowings: (state, action: PayloadAction<string[]>) => {
      state.followings = action.payload;
    },
    setFollowers: (state, action: PayloadAction<string[]>) => {
      state.followers = action.payload;
    },
    setMutes: (state, action: PayloadAction<string[]>) => {
      state.mutes = action.payload;
    },
  },
});

export default userSlice.reducer;

export const {
  setUser,
  setGender,
  setUserId,
  setPhone,
  setEmail,
  setCountry,
  setBlockedUsers,
  setFollowings,
  setFollowers,
  setMutes,
} = userSlice.actions;

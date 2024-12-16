import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profile1 } from "@shared/@common/assets/images";
import { UserType } from "@shared/@common/types";
import { GenderType } from "@shared/@common/types/user";

const initialState: UserType = {
  userId: "abcdefg", // 유저 Id
  username: "몰러", // 유저 이름
  email: "example@example.com", // 이메일
  birth: "20060515", // 생년월일
  phone: ["01001010101"], // 전화번호 목록
  gender: "f", // 성별
  userRole: "USER", // 유저 등급
  country: "kr", // 국가
  language: "ko-KR", // 언어
  ip: "", // 가입시 ip 주소
  location: "", // 가입시 주소
  profileImage: profile1, // 프로필 사진
  profileCoverImage: "", // 프로필 배경 사진
  intro: "안녕하세요.", // 자기 소개
  followings: [], // 팔로잉
  followers: [], // 팔로워
  blockedUsers: ["abcdefg"], // 차단한 유저
  mutedUsers: [], // 뮤트한 유저
  social: [], // 소셜 로그인
  isAuthorized: false, // 유료 계정 여부
  isAuthenticated: false, // 인증 코드 인증 여부
  createdAt: new Date(), // 등록일
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
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
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
      state.mutedUsers = action.payload;
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
  setLanguage,
  setBlockedUsers,
  setFollowings,
  setFollowers,
  setMutes,
} = userSlice.actions;

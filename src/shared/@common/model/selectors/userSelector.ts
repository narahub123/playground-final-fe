import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getProfileImage = (state: RootState) => state.user.profileImage;
const getGender = (state: RootState) => state.user.gender;
const getUserId = (state: RootState) => state.user.userId;
const getPhone = (state: RootState) => state.user.phone;
const getEmail = (state: RootState) => state.user.email;
const getCountry = (state: RootState) => state.user.country;

export {
  getUser,
  getProfileImage,
  getGender,
  getUserId,
  getPhone,
  getEmail,
  getCountry,
};

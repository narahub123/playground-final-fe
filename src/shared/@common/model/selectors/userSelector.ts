import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getProfileImage = (state: RootState) => state.user.profileImage;
const getGender = (state: RootState) => state.user.gender;
const getUserId = (state: RootState) => state.user.userId;
const getPhone = (state: RootState) => state.user.phone;
const getEmail = (state: RootState) => state.user.email;
const getCountry = (state: RootState) => state.user.country;
const getBirth = (state: RootState) => state.user.birth;
const getBlockedUsers = (state: RootState) => state.user.blockedUsers;
const getFollowings = (state: RootState) => state.user.followings;
const getFollowers = (state: RootState) => state.user.followers;
const getMutes = (state: RootState) => state.user.mutes;

export {
  getUser,
  getProfileImage,
  getGender,
  getUserId,
  getPhone,
  getEmail,
  getCountry,
  getBirth,
  getBlockedUsers,
  getFollowings,
  getFollowers,
  getMutes,
};

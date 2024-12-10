import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getProfileImage = (state: RootState) => state.user.profileImage;
const getGender = (state: RootState) => state.user.gender;
const getUserId = (state: RootState) => state.user.userId;

export { getUser, getProfileImage, getGender, getUserId };

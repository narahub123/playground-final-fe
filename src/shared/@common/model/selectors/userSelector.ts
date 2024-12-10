import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getProfileImage = (state: RootState) => state.user.profileImage;
const getGender = (state: RootState) => state.user.gender;

export { getUser, getProfileImage, getGender };

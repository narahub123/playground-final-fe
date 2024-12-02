import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getProfileImage = (state: RootState) => state.user.profileImage;

export { getUser, getProfileImage };

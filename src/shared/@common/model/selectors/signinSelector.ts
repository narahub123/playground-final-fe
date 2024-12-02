import { RootState } from "@app/store";

const getSigninInfo = (state: RootState) => state.signin;
const getSigninUser = (state: RootState) => state.signin.user;
const getSigninUserSettings = (state: RootState) => state.signin.userSetting;

export { getSigninInfo, getSigninUser, getSigninUserSettings };

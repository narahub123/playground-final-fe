import { RootState } from "@app/store";

const getIsLoggedIn = (state: RootState) => state.login.isLoggedIn;

export { getIsLoggedIn };

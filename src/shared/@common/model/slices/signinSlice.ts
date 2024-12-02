import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SigninType, SigninUserType } from "@shared/@common/types";

const initialState: SigninType = {
  user: {},
  userSetting: {},
};

const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    // siginin User 값 업데이트 하기
    setSigninUser: (state, action: PayloadAction<Partial<SigninUserType>>) => {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    },
  },
});

export default signinSlice.reducer;

export const { setSigninUser } = signinSlice.actions;

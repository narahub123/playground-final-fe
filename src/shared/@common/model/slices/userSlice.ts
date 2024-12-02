import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@shared/@common/types";

const initialState: UserType = {
  userId: "111",
  username: "몰러",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserType>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalState {
  coverModal: boolean;
}

const initialState: modalState = {
  coverModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCoverModalOpen: (state, action: PayloadAction<boolean>) => {
      state.coverModal = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setCoverModalOpen } = modalSlice.actions;

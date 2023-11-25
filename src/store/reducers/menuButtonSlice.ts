import { createSlice } from "@reduxjs/toolkit";

const initialState: { isMenuBtnClicked: boolean } = {
  isMenuBtnClicked: false,
};

const menuButtonSlice = createSlice({
  name: "menuButton",
  initialState,
  reducers: {
    switchMenuButton(state) {
      state.isMenuBtnClicked = !state.isMenuBtnClicked;
    },
  },
});

export const { switchMenuButton } = menuButtonSlice.actions;
export default menuButtonSlice.reducer;

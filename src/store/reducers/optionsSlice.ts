import { createSlice } from "@reduxjs/toolkit";

const initialState: { optionsOpen: boolean } = {
  optionsOpen: false,
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    switchOptionsOpen(state) {
      state.optionsOpen = !state.optionsOpen;
    },
  },
});

export const { switchOptionsOpen } = optionsSlice.actions;
export default optionsSlice.reducer;

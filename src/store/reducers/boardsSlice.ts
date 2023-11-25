import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { boards: string[] } = {
  boards: [],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard(state, action: PayloadAction<string>) {
      state.boards.push(action.payload);
    },
  },
});

export const { addBoard } = boardsSlice.actions;
export default boardsSlice.reducer;

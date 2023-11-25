import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { currentBoard: string } = {
  currentBoard: "myday",
};

const currentBoardSlice = createSlice({
  name: "currentBoard",
  initialState,
  reducers: {
    setCurrentBoard(state, action: PayloadAction<string>) {
      state.currentBoard = action.payload;
    },
  },
});

export const { setCurrentBoard } = currentBoardSlice.actions;
export default currentBoardSlice.reducer;

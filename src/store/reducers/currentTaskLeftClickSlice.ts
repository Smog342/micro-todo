import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

const initialState: { currentTask: Task | null } = {
  currentTask: null,
};

const currentTaskLeftClickSlice = createSlice({
  name: "currentTaskLeftClick",
  initialState,
  reducers: {
    setCurrentTaskLeftClick(state, action: PayloadAction<Task | null>) {
      state.currentTask = action.payload;
    },
  },
});

export const { setCurrentTaskLeftClick } = currentTaskLeftClickSlice.actions;
export default currentTaskLeftClickSlice.reducer;

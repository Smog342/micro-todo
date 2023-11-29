import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

const initialState: { currentTask: Task | null } = {
  currentTask: null,
};

const currentTaskSlice = createSlice({
  name: "currentTask",
  initialState,
  reducers: {
    setCurrentTaskRightClick(state, action: PayloadAction<Task>) {
      state.currentTask = action.payload;
    },
  },
});

export const { setCurrentTaskRightClick } = currentTaskSlice.actions;
export default currentTaskSlice.reducer;

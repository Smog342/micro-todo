import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

const initialState: { currentTask: Task | null } = {
  currentTask: null,
};

const currentTaskSlice = createSlice({
  name: "currentTask",
  initialState,
  reducers: {
    setCurrentTask(state, action: PayloadAction<Task>) {
      state.currentTask = action.payload;
    },
  },
});

export const { setCurrentTask } = currentTaskSlice.actions;
export default currentTaskSlice.reducer;

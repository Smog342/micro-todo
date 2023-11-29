import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

type tasksState = {
  tasks: Task[];
};

const initialState: tasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    setTaskAsImportant(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, important: !task.important }
          : { ...task }
      );
    },
    setTaskAsFinished(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, finished: !task.finished }
          : { ...task }
      );
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeTask(state, action: PayloadAction<{ id: number; text: string }>) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : { ...task }
      );
    },
  },
});

export const {
  addTask,
  deleteTask,
  changeTask,
  setTaskAsImportant,
  setTaskAsFinished,
} = tasksSlice.actions;

export default tasksSlice.reducer;

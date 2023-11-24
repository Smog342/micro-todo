import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksSlice";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

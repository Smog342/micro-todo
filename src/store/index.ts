import { combineReducers } from "redux";
import { tasksReducer } from "./reducers/tasksReducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

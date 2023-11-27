import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksSlice";
import currentBoardReducer from "./reducers/currentBoardSlice";
import boardsReducer from "./reducers/boardsSlice";
import menuButtonReducer from "./reducers/menuButtonSlice";
import optionsReducer from "./reducers/optionsSlice";
import currentTaskReducer from "./reducers/currentTaskSlice";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  boards: boardsReducer,
  currentBoard: currentBoardReducer,
  currentTask: currentTaskReducer,
  menuButton: menuButtonReducer,
  options: optionsReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

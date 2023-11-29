import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksSlice";
import currentBoardReducer from "./reducers/currentBoardSlice";
import boardsReducer from "./reducers/boardsSlice";
import menuButtonReducer from "./reducers/menuButtonSlice";
import optionsReducer from "./reducers/optionsSlice";
import currentTaskRightClickReducer from "./reducers/currentTaskRightClickSlice";
import currentTaskLeftClickReducer from "./reducers/currentTaskLeftClickSlice";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  boards: boardsReducer,
  currentBoard: currentBoardReducer,
  currentTaskRightClick: currentTaskRightClickReducer,
  currentTaskLeftClick: currentTaskLeftClickReducer,
  menuButton: menuButtonReducer,
  options: optionsReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

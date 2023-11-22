import { Task } from "../../types";

enum TasksActionTypes {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  CHANGE_TASK = "CHANGE_TASK",
  SET_TASK_AS_IMPORTANT = "SET_TASK_AS_IMPORTANT",
  SET_TASK_AS_FINISHED = "SET_TASK_AS_FINISHED",
}

type tasksState = {
  tasks: Task[];
};

type tasksActionAdd = {
  type: TasksActionTypes.ADD_TASK;
  payload: Task;
};

type atomarTaskOperation = {
  type:
    | TasksActionTypes.DELETE_TASK
    | TasksActionTypes.SET_TASK_AS_IMPORTANT
    | TasksActionTypes.SET_TASK_AS_FINISHED;
  payload: number;
};

type tasksAction = tasksActionAdd | atomarTaskOperation;

const defaultState: tasksState = {
  tasks: [],
};

export const tasksReducer = (
  state = defaultState,
  action: tasksAction
): tasksState => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TasksActionTypes.SET_TASK_AS_IMPORTANT:
      return {
        ...state,
        tasks: [
          ...state.tasks.map(
            (task): Task =>
              task.id === action.payload
                ? { ...task, important: !task.important }
                : { ...task }
          ),
        ],
      };
    case TasksActionTypes.SET_TASK_AS_FINISHED:
      return {
        ...state,
        tasks: [
          ...state.tasks.map(
            (task): Task =>
              task.id === action.payload
                ? { ...task, finished: !task.finished }
                : { ...task }
          ),
        ],
      };
    default:
      return state;
  }
};

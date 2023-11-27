import { Dropdown, MenuProps } from "antd";
import { PropsWithChildren } from "react";
import {
  deleteTask,
  setTaskAsFinished,
  setTaskAsImportant,
} from "../store/reducers/tasksSlice";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Task } from "../types";
import TaskComponent from "./TaskComponent";

let items = [
  { label: "Пометить как важное", key: "set_important" },
  { label: "Пометить как завершённое", key: "set_finished" },
  { label: "Удалить", key: "delete_task" },
];

export default function (taskProps: Task) {
  const dispatch = useDispatch();
  const { currentTask } = useTypedSelector((state) => state.currentTask);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "delete_task") {
      if (currentTask !== null) {
        dispatch(deleteTask(currentTask.id));
      }
    }
    if (key === "set_important") {
      if (currentTask !== null) {
        dispatch(setTaskAsImportant(currentTask.id));
      }
    }
    if (key === "set_finished") {
      if (currentTask !== null) {
        dispatch(setTaskAsFinished(currentTask.id));
      }
    }
  };

  return (
    <div>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div>
          <TaskComponent {...taskProps}></TaskComponent>
        </div>
      </Dropdown>
    </div>
  );
}

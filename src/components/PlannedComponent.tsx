import { ScheduleOutlined } from "@ant-design/icons";
import TaskComponent from "./TaskComponent";
import TaskCreator from "./TaskCreator";
import { Task, Context } from "../Context";
import { useContext } from "react";

function PlannedComponent() {
  const { tasks } = useContext(Context);

  return (
    <div className="pl-[24px] pr-[24px] overflow-auto h-full">
      <div className="flex text-blue-600">
        <ScheduleOutlined className="text-3xl mr-2"></ScheduleOutlined>
        <p className="text-2xl">Запланировано</p>
      </div>
      <TaskCreator></TaskCreator>
      {tasks.map((task: Task) =>
        task.date !== "" ? (
          <TaskComponent
            id={task.id}
            text={task.text}
            date={task.date}
            important={task.important}
            finished={task.finished}
            board={task.board}
            key={task.id}
          ></TaskComponent>
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default PlannedComponent;

import { CoffeeOutlined } from "@ant-design/icons";
import TaskComponent from "./TaskComponent";
import TaskCreator from "./TaskCreator";
import { Task, Context } from "../Context";
import { useContext } from "react";

function MyDay() {
  const { tasks } = useContext(Context);

  return (
    <div className="pl-[24px] pr-[24px] overflow-auto h-full">
      <div className="flex text-blue-600">
        <CoffeeOutlined className="text-3xl mr-2"></CoffeeOutlined>
        <p className="text-2xl">Мой день</p>
      </div>
      <TaskCreator></TaskCreator>
      {tasks.map((task: Task) =>
        task.board === "Мой день" ? (
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

export default MyDay;

import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";
import { Task, Context } from "../Context";
import { useContext, useState } from "react";

function TaskComponent(taskProps: Task) {
  const { tasks, setTasks } = useContext(Context);

  const [isImportant, setIsImportant] = useState(taskProps.important);

  const [isFinished, setIsFinished] = useState(taskProps.finished);

  function handleStarClick(e: React.MouseEvent<HTMLElement>): void {
    setIsImportant(!isImportant);
    setTasks([
      ...tasks.map((task: { id: number; important: boolean }) =>
        task.id === taskProps.id
          ? { ...task, important: !task.important }
          : { ...task }
      ),
    ]);
  }

  function handleRadioClick(e: React.MouseEvent<HTMLElement>): void {
    setIsFinished(!isFinished);
    setTasks([
      ...tasks.map((task: { id: number; finished: boolean }) =>
        task.id === taskProps.id
          ? { ...task, finished: !task.finished }
          : { ...task }
      ),
    ]);
  }

  return (
    <div className="mt-2 shadow-sider-shadow w-full bg-white flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex overflow-hidden">
          <Radio checked={isFinished} onClick={handleRadioClick}></Radio>
          <p className="break-words">{taskProps.text}</p>
        </div>
        <div>
          <Button type="text" onClick={handleStarClick}>
            {isImportant ? (
              <StarFilled className="text-xl mr-auto"></StarFilled>
            ) : (
              <StarOutlined className="text-xl mr-auto"></StarOutlined>
            )}
          </Button>
        </div>
      </div>
      <div className="flex">
        <p className="text-sm mt-0 mb-0 ml-0 mr-2">{taskProps.date}</p>
        {taskProps.board !== "important" || "schedule" || "tasks" ? (
          <p className="text-sm m-0">{taskProps.board}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default TaskComponent;

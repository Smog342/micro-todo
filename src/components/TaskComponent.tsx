import { Button, Radio } from "antd";
import { Task, Context } from "../Context";
import { useContext, useState } from "react";
import { ReactComponent as StarIcon } from "../icons/svgexport-22.svg";
import { ReactComponent as StarFilledIcon } from "../icons/svgexport-23.svg";
import Icon from "@ant-design/icons/lib/components/Icon";

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
    <div className="mt-[8px] mr-[24px] ml-[24px] pl-[16px] pr-[16px] min-h-[52px] shadow-sider-shadow bg-white flex flex-col rounded">
      <div className="flex items-center min-h-[52px]">
        <div className="flex overflow-hidden">
          <Radio checked={isFinished} onClick={handleRadioClick}></Radio>
        </div>
        <div className="pt-[8px] pb-[8px] pl-[14px] pr-[14px] min-h-[52px]">
          <p className="break-words">{taskProps.text}</p>
        </div>
        <div className="ml-auto">
          <Button
            type="text"
            className="!p-0 !h-[20px] !w-[20px]"
            onClick={handleStarClick}
          >
            {isImportant ? (
              <Icon component={StarIcon} className="text-[20px]" />
            ) : (
              <Icon component={StarFilledIcon} className="text-[20px]" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskComponent;

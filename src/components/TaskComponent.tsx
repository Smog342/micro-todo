import { Button, Radio } from "antd";
import { Task } from "../types";
import { useState } from "react";
import { ReactComponent as StarIcon } from "../icons/svgexport-22.svg";
import { ReactComponent as StarFilledIcon } from "../icons/svgexport-23.svg";
import Icon from "@ant-design/icons/lib/components/Icon";
import { useDispatch } from "react-redux";
import {
  setTaskAsImportant,
  setTaskAsFinished,
} from "../store/reducers/tasksSlice";

function TaskComponent(taskProps: Task) {
  const [isImportant, setIsImportant] = useState(taskProps.important);

  const [isFinished, setIsFinished] = useState(taskProps.finished);

  const dispatch = useDispatch();

  function handleStarClick() {
    setIsImportant(!isImportant);
    dispatch(setTaskAsImportant(taskProps.id));
  }

  function handleRadioClick() {
    setIsFinished(!isFinished);
    dispatch(setTaskAsFinished(taskProps.id));
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

import { Button, Input, Radio } from "antd";
import { Task } from "../types";
import { ReactComponent as hideIcon } from "../icons/hideTaskView.svg";
import { ReactComponent as deleteIcon } from "../icons/deleteTask.svg";
import { ReactComponent as StarIcon } from "../icons/svgexport-22.svg";
import { ReactComponent as StarFilledIcon } from "../icons/svgexport-23.svg";
import Icon from "@ant-design/icons/lib/components/Icon";
import {
  changeTask,
  setTaskAsFinished,
  setTaskAsImportant,
  deleteTask,
} from "../store/reducers/tasksSlice";
import { setCurrentTaskLeftClick } from "../store/reducers/currentTaskLeftClickSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function (taskProps: Task) {
  const dispatch = useDispatch();
  const [text, setText] = useState(taskProps.text);

  return (
    <div className="flex flex-col h-full shadow-right-sider-shadow bg-white-bg">
      <div className="pr-[16px] pl-[24px] mt-[16px] sticky">
        <div className="h-[52px] w-[312px] bg-white flex items-center">
          <Radio
            checked={taskProps.finished}
            onClick={() => {
              dispatch(setTaskAsFinished(taskProps.id));
            }}
          ></Radio>
          <Input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onPressEnter={() => {
              dispatch(changeTask({ id: taskProps.id, text: text }));
            }}
            bordered={false}
            className="bg-white"
          ></Input>
          <Button type="text" className="!p-0 !h-[20px] !w-[20px]">
            <Icon
              component={taskProps.important ? StarIcon : StarFilledIcon}
              className="text-[20px]"
            ></Icon>
          </Button>
        </div>
      </div>
      <div className="mt-auto flex mr-[24px] ml-[24px] pt-[16px] pb-[16px] items-center relative">
        <Button
          type="text"
          className="!p-0 !h-[20px] ![w-20px]"
          onClick={() => {
            dispatch(setCurrentTaskLeftClick(null));
          }}
        >
          <Icon className="text-[20px]" component={hideIcon}></Icon>
        </Button>
        <div className="ml-auto mr-auto">Создано сегодня</div>
        <Button
          type="text"
          className="!p-0 !h-[20px] ![w-20px]"
          onClick={() => {
            dispatch(deleteTask(taskProps.id));
            dispatch(setCurrentTaskLeftClick(null));
          }}
        >
          <Icon className="text-[20px]" component={deleteIcon}></Icon>
        </Button>
      </div>
    </div>
  );
}

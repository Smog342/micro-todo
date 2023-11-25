import { Button, ConfigProvider, Input } from "antd";
import { useState } from "react";
import { Task } from "../types";
import { ReactComponent as DatePickerIcon } from "../icons/svgexport-19.svg";
import { ReactComponent as BellIcon } from "../icons/svgexport-20.svg";
import { ReactComponent as RepeatIcon } from "../icons/svgexport-21.svg";
import { ReactComponent as CircleIcon } from "../icons/svgexport-18.svg";
import Icon from "@ant-design/icons/lib/components/Icon";
import { useDispatch } from "react-redux";
import { addTask } from "../store/reducers/tasksSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";

function TaskCreator() {
  const { currentBoard } = useTypedSelector((state) => state.currentBoard);

  const dispatch = useDispatch();

  const [datePickerAllowed, setDatePickerAllowed] = useState(false);

  const [date, setDate] = useState("");

  const [text, setText] = useState("");

  function handleClick() {
    setDatePickerAllowed(!datePickerAllowed);
  }

  function addTaskLocal(task: Task) {
    dispatch(addTask(task));
    setText("");
  }

  return (
    <div className="rounded-[4px] ml-[24px] mr-[24px] flex flex-col shadow-sider-shadow">
      <div className="min-h-[52px] pr-[16px] pl-[16px] flex items-center bg-white">
        <Input
          prefix={<Icon component={CircleIcon} className="text-[20px]" />}
          bordered={false}
          placeholder="Добавить задачу"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onPressEnter={(e) => {
            addTaskLocal({
              id: Math.random() * 1000,
              text: text,
              date: date,
              important: currentBoard === "important" ? true : false,
              finished: false,
              board: currentBoard,
            });
          }}
        ></Input>
      </div>
      <div className="flex items-center justify-between h-[44px] pr-[16px] pl-[16px] bg-white-bg">
        <div className="flex gap-[8px] pl-[2px] items-center">
          <div className="h-[28px] w-[28px]">
            <Button type="text" className="!p-0 !h-[20px] !w-[20px]">
              <Icon component={DatePickerIcon} className="text-[20px]" />
            </Button>
          </div>
          <div className="h-[28px] w-[28px]">
            <Button type="text" className="!p-0 !h-[20px] !w-[20px]">
              <Icon component={BellIcon} className="text-[20px]" />
            </Button>
          </div>
          <div className="h-[28px] w-[28px]">
            <Button type="text" className="!p-0 !h-[20px] !w-[20px]">
              <Icon component={RepeatIcon} className="text-[20px]" />
            </Button>
          </div>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBgContainerDisabled: "#ffffff",
                fontWeight: 700,
                fontSize: 12,
              },
            },
          }}
        >
          <Button
            className="!w-[74px] !p-0 rounded-none"
            disabled={text.length === 0 ? true : false}
            onClick={(e) => {
              addTask({
                id: Math.random() * 1000,
                text: text,
                date: date,
                important: currentBoard === "important" ? true : false,
                finished: false,
                board: currentBoard,
              });
            }}
          >
            Добавить
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default TaskCreator;

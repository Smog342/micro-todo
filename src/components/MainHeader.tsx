import { Avatar, Badge, Button, Input } from "antd";
import {
  NotificationOutlined,
  QuestionOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Context } from "../Context";
import { useContext } from "react";

const { Search } = Input;

function MainHeader() {
  const { optionsOpen, setOptionsOpen } = useContext(Context);

  function openOptions() {
    setOptionsOpen(!optionsOpen);
  }

  return (
    <div className="bg-header-bg p-0 flex justify-between items-center  text-white text-base/[48px] h-[48px]">
      <div className="h-full">
        <Button type="text" className="bg-inherit hover:bg-header-hover h-full">
          <WindowsOutlined className="text-xl text-white"></WindowsOutlined>
        </Button>
      </div>
      <div className="flex justify-between flex-1">
        <div className="font-semibold ml-[3px]">To Do</div>
        <div className="flex items-center justify-between">
          <Input
            prefix={
              <Button type="text" size="small" className="!pl-0">
                <SearchOutlined
                  rotate={90}
                  className="text-header-bg text-xl"
                />
              </Button>
            }
            className="w-[400px] sc-910:hidden"
          ></Input>
        </div>
        <div className="flex items-center">
          <Button
            type="text"
            className="bg-inherit hover:bg-header-hover !h-[48px] !w-[48px]"
            onClick={openOptions}
          >
            <SettingOutlined className="text-[20px] text-white"></SettingOutlined>
          </Button>
          <Button
            type="text"
            className="bg-inherit hover:bg-header-hover !h-[48px] !w-[48px]"
          >
            <QuestionOutlined className="text-[20px] text-white"></QuestionOutlined>
          </Button>
          <Button
            type="text"
            className="bg-inherit hover:bg-header-hover !h-[48px] !w-[48px]"
          >
            <Badge count={5} size="small">
              <NotificationOutlined className="text-[20px] text-white"></NotificationOutlined>
            </Badge>
          </Button>
        </div>
      </div>
      <Button
        type="text"
        className="h-full bg-inherit hover:bg-header-hover !p-1"
      >
        <Avatar className="">
          <UserOutlined className="text-xl text-white"></UserOutlined>
        </Avatar>
      </Button>
    </div>
  );
}

export default MainHeader;

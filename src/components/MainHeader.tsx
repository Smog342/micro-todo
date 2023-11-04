import { Avatar, Badge, Button, Input } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  HolderOutlined,
  NotificationOutlined,
  QuestionOutlined,
  SettingOutlined,
  UserOutlined,
  WindowsOutlined,
} from "@ant-design/icons";

const { Search } = Input;

function MainHeader() {
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
          <Search className="w-[400px] block"></Search>
        </div>
        <div className="flex items-center">
          <Button
            type="text"
            className="bg-inherit hover:bg-header-hover h-full"
          >
            <SettingOutlined className="text-xl text-white"></SettingOutlined>
          </Button>
          <Button
            type="text"
            className="bg-inherit hover:bg-header-hover h-full"
          >
            <QuestionOutlined className="text-xl text-white"></QuestionOutlined>
          </Button>
          <Button
            type="text"
            className="bg-inherit hover:bg-header-hover h-full"
          >
            <Badge count={5} size="small">
              <NotificationOutlined className="text-xl text-white"></NotificationOutlined>
            </Badge>
          </Button>
        </div>
      </div>
      <Button type="text" className="h-full bg-inherit hover:bg-header-hover">
        <Avatar className="">
          <UserOutlined className="text-xl text-white"></UserOutlined>
        </Avatar>
      </Button>
    </div>
  );
}

export default MainHeader;

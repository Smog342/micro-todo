import { Avatar, Badge, Button, Input } from "antd";
import {Header } from "antd/es/layout/layout";
import {HolderOutlined, NotificationOutlined, QuestionOutlined,SettingOutlined, UserOutlined, WindowsOutlined} from "@ant-design/icons";

const {Search} = Input;

function MainHeader(){

    return(
        <Header className="bg-blue-600 p-0 flex justify-between items-center sticky">
        <Button type="text" className="hover:bg-blue-700">
            <WindowsOutlined className="text-xl"></WindowsOutlined>
        </Button>
        <div className="text-xl font-bold">To Do</div>
        <div className="flex items-center w-2/5">
            <Search>
            </Search>
        </div>
        <div className="flex items-center">
            <Button type="text" className="bg-inherit hover:bg-blue-700">
            <SettingOutlined className="text-xl"></SettingOutlined>
            </Button>
            <Button type="text" className="bg-inherit hover:bg-blue-700">
            <QuestionOutlined className="text-xl"></QuestionOutlined>
            </Button>
            <Button type="text" className="bg-inherit hover:bg-blue-700">
            <Badge count={5} size="small">
                <NotificationOutlined className="text-xl"></NotificationOutlined>
            </Badge>
            </Button>
        </div>
        <Avatar className="mr-3"><UserOutlined className="text-xl"></UserOutlined></Avatar>
        </Header>
    );

}

export default MainHeader;
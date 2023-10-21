import { Badge, Layout, Space, Input } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import {NotificationOutlined, QuestionOutlined, SearchOutlined, SettingOutlined} from "@ant-design/icons";
import type { SearchProps } from "antd/es/input";

const {Search} = Input;

function LayoutComponent(){

    return(
        <Space className="w-screen h-screen">
            <Layout className="w-screen h-screen">
                {/* <Header className="bg-blue-600 mx-0 p-0">
                    <div className="flex justify-between items-center">
                        <div className="">Icon</div>
                        <div>To Do</div>
                    </div>
                </Header> */}
                <Header className="bg-blue-600 p-0 flex justify-between items-center sticky">
                    <div className="pl-3">Icon</div>
                    <div>To Do</div>
                    <div className="flex items-center w-2/5">
                        <Search>
                        </Search>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <SettingOutlined className="text-xl"></SettingOutlined>
                        <QuestionOutlined className="text-xl"></QuestionOutlined>
                        <Badge count={5} size="small">
                            <NotificationOutlined className="text-xl"></NotificationOutlined>
                        </Badge>
                    </div>
                    <div className="pr-3">Avatar</div>
                </Header>
                <Layout hasSider>
                    <Sider collapsible breakpoint="lg" collapsedWidth="0" className="p-0"></Sider>
                    <Content className="pl-10">Content</Content>
                </Layout>
            </Layout>
        </Space>
    );

}

export default LayoutComponent;
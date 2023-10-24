import { Badge, Layout, Space, Input, Menu, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import {CoffeeOutlined, HomeOutlined, NotificationOutlined, QuestionOutlined, ScheduleOutlined, SearchOutlined, SettingOutlined, StarOutlined, UserOutlined} from "@ant-design/icons";
import type { SearchProps } from "antd/es/input";
import MenuItem from "antd/es/menu/MenuItem";
import { useState } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import TaskCreator from "./TaskCreator";
import MainHeader from "./MainHeader";
import MyDay from "./MyDay";
import ImportantComponent from "./ImportantComponent";
import PlannedComponent from "./PlannedComponent";
import AssignedComponent from "./AssignedComponent";
import TasksListComponent from "./TasksListComponent";

const {Search} = Input;

function LayoutComponent(){

    type Task = {

        id: number,
        text: string

    }

    type Board = {

        id: number,
        name: string
        tasks: Task[]

    }

    const [boards, setBoards] = useState<Board[]>([{id: 1, name: 'Hello', tasks: [{id: 1, text: 'Empty'}, {id: 2, text: 'Not empty'}]}]);
    const navigate = useNavigate();

    let items = [{label: 'Мой день', icon: <CoffeeOutlined/>, key: 'myday'}, 
    {label: 'Важно', icon: <StarOutlined/>, key: 'important'},
    {label: 'Запланировано', icon: <ScheduleOutlined/>, key: 'schedule'},
    {label: 'Назначено', icon: <UserOutlined/>, key: 'assigned'},
    {label: 'Задачи', icon: <HomeOutlined/>, key: 'tasks'}];

    return(
        <Space className="w-screen h-screen">
            <Layout className="w-screen h-screen">
                <MainHeader></MainHeader>
                <Layout hasSider>
                    <Sider collapsible breakpoint="lg" collapsedWidth="0" className="bg-white">
                        <Menu items={items} mode="inline" className="h-full"
                        onClick={({key}) => {navigate(key)}}>
                        </Menu>
                    </Sider>
                    <Content className="pl-10 pr-10">
                        <Routes>
                            <Route path="/" element={<div></div>}></Route>
                            <Route path="myday" element={<MyDay></MyDay>}></Route>
                            <Route path="important" element={<ImportantComponent></ImportantComponent>}></Route>
                            <Route path="schedule" element={<PlannedComponent></PlannedComponent>}></Route>
                            <Route path="assigned" element={<AssignedComponent></AssignedComponent>}></Route>
                            <Route path="tasks" element={<TasksListComponent></TasksListComponent>}></Route>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Space>
    );

}

export default LayoutComponent;
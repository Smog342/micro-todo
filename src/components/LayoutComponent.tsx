import { Layout, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import {Route, Routes} from "react-router-dom";
import MainHeader from "./MainHeader";
import MyDay from "./MyDay";
import ImportantComponent from "./ImportantComponent";
import PlannedComponent from "./PlannedComponent";
import AssignedComponent from "./AssignedComponent";
import TasksListComponent from "./TasksListComponent";
import LayoutSiderComponent from "./LayoutSiderComponent";
import { Context } from "../Context";
import { useContext } from "react";
import BoardComponent from "./BoardComponent";

function LayoutComponent(){

    const {currentBoard} = useContext(Context);

    return(
        <Space className="">
            <Layout className="w-screen h-screen">
                <MainHeader></MainHeader>
                <Layout hasSider className="">
                    <LayoutSiderComponent></LayoutSiderComponent>
                    <Content className="pl-10 pr-10">
                        <Routes>
                            <Route path="/" element={<div></div>}></Route>
                            <Route path="Мой день" element={<MyDay></MyDay>}></Route>
                            <Route path="important" element={<ImportantComponent></ImportantComponent>}></Route>
                            <Route path="schedule" element={<PlannedComponent></PlannedComponent>}></Route>
                            <Route path="assigned" element={<AssignedComponent></AssignedComponent>}></Route>
                            <Route path="tasks" element={<TasksListComponent></TasksListComponent>}></Route>
                            <Route path={currentBoard} element={<BoardComponent></BoardComponent>}></Route>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Space>
    );

}

export default LayoutComponent;
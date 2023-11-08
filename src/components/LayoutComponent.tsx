import { Col, ConfigProvider, Layout, Row, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
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
import OptionsDrawer from "./OptionsDrawer";

function LayoutComponent() {
  const { currentBoard } = useContext(Context);

  return (
    <>
      <Row className="w-full sticky top-0 z-50">
        <Col span={24}>
          <MainHeader></MainHeader>
        </Col>
      </Row>
      <ConfigProvider
        theme={{
          token: {
            screenXSMin: 0,
            screenXS: 0,
            screenMDMin: 920,
            screenMD: 920,
            screenLGMin: 1010,
            screenLG: 1010,
          },
        }}
      >
        <Row wrap={false} className="h-screen">
          <Col
            xs={0}
            md={5}
            lg={7}
            className="h-full sc-920:min-w-[200px] sc-920:max-w-[200px] 
            sc-1010:min-w-[290px] sc-1010:max-w-[290px] transition-all duration-100 ease-out"
          >
            <div className="bg-white shadow-sider-shadow h-full flex flex-col">
              <LayoutSiderComponent></LayoutSiderComponent>
              <div>Test</div>
            </div>
          </Col>
          <Col flex="auto" className="h-full">
            <OptionsDrawer></OptionsDrawer>
            <Content className="">
              <Routes>
                <Route path="/" element={<div>Not empty</div>}></Route>
                <Route path="myday" element={<MyDay></MyDay>}></Route>
                <Route
                  path="important"
                  element={<ImportantComponent></ImportantComponent>}
                ></Route>
                <Route
                  path="schedule"
                  element={<PlannedComponent></PlannedComponent>}
                ></Route>
                <Route
                  path="assigned"
                  element={<AssignedComponent></AssignedComponent>}
                ></Route>
                <Route
                  path="tasks"
                  element={<TasksListComponent></TasksListComponent>}
                ></Route>
                <Route
                  path={currentBoard}
                  element={<BoardComponent></BoardComponent>}
                ></Route>
              </Routes>
            </Content>
          </Col>
        </Row>
      </ConfigProvider>
    </>
  );
}

export default LayoutComponent;

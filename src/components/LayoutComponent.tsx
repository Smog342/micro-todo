import { Col, Row } from "antd";
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
import useWindowSize from "../hooks/useWindowSize";

function LayoutComponent() {
  const { currentBoard } = useContext(Context);

  const windowWidth = useWindowSize();

  return (
    <>
      <Row className="w-full sticky top-0 z-50">
        <Col span={24}>
          <MainHeader />
        </Col>
      </Row>
      <Row wrap={false} className="h-screen">
        <Col
          flex={
            windowWidth > 1010 ? "290px" : windowWidth > 920 ? "200px" : "0px"
          }
          className="h-full transition-all duration-100 ease-out bg-white"
        >
          <div className="bg-white shadow-sider-shadow h-full flex flex-col">
            <LayoutSiderComponent />
          </div>
        </Col>
        <Col flex="auto" className="">
          <OptionsDrawer />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="myday" element={<MyDay />} />
            <Route path="important" element={<ImportantComponent />} />
            <Route path="schedule" element={<PlannedComponent />} />
            <Route path="assigned" element={<AssignedComponent />} />
            <Route path="tasks" element={<TasksListComponent />} />
            <Route path={currentBoard} element={<BoardComponent />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default LayoutComponent;

import { Col, Row } from "antd";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import MyDay from "./MyDay";
import ImportantComponent from "./ImportantComponent";
import PlannedComponent from "./PlannedComponent";
import AssignedComponent from "./AssignedComponent";
import TasksListComponent from "./TasksListComponent";
import LayoutSiderComponent from "./LayoutSiderComponent";
import BoardComponent from "./BoardComponent";
import OptionsDrawer from "./OptionsDrawer";
import useWindowSize from "../hooks/useWindowSize";
import { useTypedSelector } from "../hooks/useTypedSelector";
import TaskSiderComponent from "./TaskSiderComponent";

function LayoutComponent() {
  const { currentBoard } = useTypedSelector((state) => state.currentBoard);
  const { currentTask } = useTypedSelector(
    (state) => state.currentTaskLeftClick
  );

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
          id="menu-col"
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
            <Route path="/" element={<MyDay />} />
            <Route path="myday" element={<MyDay />} />
            <Route path="important" element={<ImportantComponent />} />
            <Route path="schedule" element={<PlannedComponent />} />
            <Route path="assigned" element={<AssignedComponent />} />
            <Route path="tasks" element={<TasksListComponent />} />
            <Route path={currentBoard} element={<BoardComponent />} />
          </Routes>
        </Col>
        <Col flex={currentTask ? "360px" : "0px"}>
          <div className="bg-white-bg shadow-sider-shadow h-full flex flex-col">
            {currentTask !== null && (
              <TaskSiderComponent {...currentTask}></TaskSiderComponent>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default LayoutComponent;

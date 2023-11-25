import TaskComponent from "./TaskComponent";
import TaskCreator from "./TaskCreator";
import { Task } from "../types";
import { ReactComponent as MenuIcon } from "../icons/svgexport-1.svg";
import { ReactComponent as ArrowsIcon } from "../icons/svgexport-15.svg";
import { ReactComponent as GroupIcon } from "../icons/svgexport-16.svg";
import { ReactComponent as LampIcon } from "../icons/svgexport-17.svg";
import { ReactComponent as BoardIcon } from "../icons/svgexport-7.svg";
import Icon from "@ant-design/icons/lib/components/Icon";
import { Button } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { switchMenuButton } from "../store/reducers/menuButtonSlice";
import { useDispatch } from "react-redux";

function MyDay() {
  const { isMenuBtnClicked } = useTypedSelector((state) => state.menuButton);

  const { tasks } = useTypedSelector((state) => state.tasks);

  const dispatch = useDispatch();

  return (
    <div className="h-full overflow-auto bg-white-bg">
      <div className="flex items-center mr-[24px] ml-[24px] mt-[16px] mb-[16px]">
        <div className="flex items-center">
          {isMenuBtnClicked ? (
            <Button
              type="text"
              className="!h-[20px] !w-[20px] !p-0 mr-[8px]"
              onClick={(__) => {
                document.getElementById("menu-col")?.classList.remove("hidden");
                dispatch(switchMenuButton());
              }}
            >
              <Icon component={MenuIcon} className="text-[20px]" />
            </Button>
          ) : (
            <Icon component={BoardIcon} className="text-[24px] mr-[8px]" />
          )}
          <p className="text-[1.2rem] font-[600]">Мой день</p>
        </div>
        <div className="flex items-center ml-auto">
          <div className="pt-[2px] pb-[2px] pr-[12px] pl-[12px]">
            <Icon component={ArrowsIcon} className="text-[20px]" />
            <span className="ml-[4px]">Сортировка</span>
          </div>
          <div className="pt-[2px] pb-[2px] pr-[12px] pl-[12px]">
            <Icon component={GroupIcon} className="text-[20px]" />
            <span className="ml-[4px]">Группировать</span>
          </div>
          <div className="pt-[2px] pb-[2px] pr-[12px] pl-[12px]">
            <Icon component={LampIcon} className="text-[20px]" />
            <span className="ml-[4px]">Предложения</span>
          </div>
        </div>
      </div>
      <TaskCreator></TaskCreator>
      {tasks.map(
        (task: Task) =>
          task.board === "myday" && (
            <TaskComponent {...task} key={task.id}></TaskComponent>
          )
      )}
    </div>
  );
}

export default MyDay;

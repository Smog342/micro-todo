import TaskComponent from "./TaskComponent";
import TaskCreator from "./TaskCreator";
import { Task, Context } from "../Context";
import { useContext } from "react";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ReactComponent as MenuIcon } from "../icons/svgexport-1.svg";
import { ReactComponent as ArrowsIcon } from "../icons/svgexport-15.svg";
import { ReactComponent as GroupIcon } from "../icons/svgexport-16.svg";
import { ReactComponent as LampIcon } from "../icons/svgexport-17.svg";
import { ReactComponent as BoardIcon } from "../icons/svgexport-7.svg";
import { Button } from "antd";

function BoardComponent() {
  const { tasks, currentBoard, menuButtonIsClicked, setmenuButtonIsClicked } =
    useContext(Context);

  return (
    <div className="h-full overflow-auto bg-white-bg">
      <div className="flex items-center mr-[24px] ml-[24px] mt-[16px] mb-[16px]">
        <div className="flex items-center">
          {menuButtonIsClicked ? (
            <Button
              type="text"
              className="!h-[20px] !w-[20px] !p-0 mr-[8px]"
              onClick={(__) => {
                document.getElementById("menu-col")?.classList.remove("hidden");
                setmenuButtonIsClicked(false);
              }}
            >
              <Icon component={MenuIcon} className="text-[20px]" />
            </Button>
          ) : (
            <Icon component={BoardIcon} className="text-[24px] mr-[8px]" />
          )}
          <p className="text-[1.2rem] font-[600]">{currentBoard}</p>
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
      <TaskCreator />
      {tasks.map(
        (task: Task) =>
          task.board === currentBoard && (
            <TaskComponent {...task} key={task.id} />
          )
      )}
    </div>
  );
}

export default BoardComponent;

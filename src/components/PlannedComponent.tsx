import { ScheduleOutlined } from "@ant-design/icons";
import TaskComponent from "./TaskComponent";
import TaskCreator from "./TaskCreator";
import { Task, Context } from "../Context";
import { useContext } from "react";
import { ReactComponent as ArrowsIcon } from "../icons/svgexport-15.svg";
import { ReactComponent as GroupIcon } from "../icons/svgexport-16.svg";
import { ReactComponent as LampIcon } from "../icons/svgexport-17.svg";
import { ReactComponent as BoardIcon } from "../icons/svgexport-7.svg";
import Icon from "@ant-design/icons/lib/components/Icon";

function PlannedComponent() {
  const { tasks } = useContext(Context);

  return (
    <div className="overflow-auto h-full bg-white-bg">
      <div className="flex items-center mr-[24px] ml-[24px] mt-[16px] mb-[16px]">
        <div className="flex items-center">
          <Icon component={BoardIcon} className="text-[24px] mr-[8px]" />
          <p className="text-[1.2rem] font-[600]">Запланировано</p>
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
      {tasks.map((task: Task) =>
        task.date !== "" ? (
          <TaskComponent {...task} key={task.id}></TaskComponent>
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default PlannedComponent;

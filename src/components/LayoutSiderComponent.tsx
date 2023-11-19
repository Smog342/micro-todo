import { CheckOutlined } from "@ant-design/icons";
import { ReactComponent as MenuIcon } from "../icons/svgexport-1.svg";
import { ReactComponent as SunIcon } from "../icons/svgexport-2.svg";
import { ReactComponent as StarIcon } from "../icons/svgexport-3.svg";
import { ReactComponent as CalendarIcon } from "../icons/svgexport-4.svg";
import { ReactComponent as UserIcon } from "../icons/svgexport-5.svg";
import { ReactComponent as HomeIcon } from "../icons/svgexport-6.svg";
import { ReactComponent as BoardIcon } from "../icons/svgexport-7.svg";
import { ReactComponent as PlusIcon } from "../icons/svgexport-8.svg";
import { ReactComponent as GroupIcon } from "../icons/svgexport-9.svg";
import { ReactComponent as BottomFirstIcon } from "../icons/svgexport-10.svg";
import { ReactComponent as BottomSecondIcon } from "../icons/svgexport-11.svg";
import { ReactComponent as BottomThirdIcon } from "../icons/svgexport-12.svg";
import { ReactComponent as BottomFourthIcon } from "../icons/svgexport-13.svg";
import { Menu, Input, Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../Context";
import Icon from "@ant-design/icons/lib/components/Icon";

function LayoutSiderComponent() {
  const navigate = useNavigate();

  const { boards, setBoards, setCurrentBoard } = useContext(Context);

  const [isBoardsDisabled, setIsBoardsDisabled] = useState(
    boards.length === 0 ? true : false
  );

  const [boardTitle, setBoardTitle] = useState("");

  let items = [
    { label: "Мой день", icon: <Icon component={SunIcon} />, key: "myday" },
    { label: "Важно", icon: <Icon component={StarIcon} />, key: "important" },
    {
      label: "Запланировано",
      icon: <Icon component={CalendarIcon} />,
      key: "schedule",
    },
    {
      label: "Назначено",
      icon: <Icon component={UserIcon} />,
      key: "assigned",
    },
    { label: "Задачи", icon: <Icon component={HomeIcon} />, key: "tasks" },
    { type: "divider", label: null, icon: null, key: "divider" },
    ...boards.map((board: string) => ({
      label: board,
      icon: <Icon component={BoardIcon} />,
      key: board,
    })),
  ];

  function handlePlusClick(e: React.MouseEvent<HTMLElement>): void {
    setBoards([...boards, boardTitle]);
    setBoardTitle("");
    setIsBoardsDisabled(false);
  }

  return (
    <div className="bg-white h-full overflow-auto flex flex-col">
      <div className="mt-[16px] h-[48px] flex items-center pl-[24px] pr-[24px]">
        <Button type="text" className="!p-0 !h-[20px] !w-[20px]">
          <Icon component={MenuIcon} className="text-[20px]" />
        </Button>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHeight: 44,
              itemSelectedBg: "#eff6fc",
              iconSize: 20,
              itemColor: "rgba(0, 0, 0, 0.88)",
              itemSelectedColor: "rgba(0, 0, 0, 0.88)",
              itemBorderRadius: 0,
              itemMarginBlock: 0,
              itemPaddingInline: 10,
              iconMarginInlineEnd: 16,
            },
          },
        }}
      >
        <Menu
          items={items}
          mode="inline"
          className=""
          onClick={({ key }) => {
            setCurrentBoard(key);
            navigate(key);
          }}
        ></Menu>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: { Input: { paddingInline: 24, paddingBlock: 12 } },
        }}
      >
        <Input
          prefix={
            <Button
              type="text"
              className="!h-[20px] !w-[20px] !p-0"
              onClick={handlePlusClick}
            >
              <Icon component={PlusIcon} className="text-[20px]" />
            </Button>
          }
          suffix={
            <Button type="text" className="!h-[20px] !w-[20px] !p-0">
              <Icon component={GroupIcon} className="text-[20px]" />
            </Button>
          }
          className="rounded-none"
          placeholder="Создать список"
          bordered={false}
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        ></Input>
      </ConfigProvider>
      <div className="flex justify-around mt-auto">
        <a>
          <Icon component={BottomFirstIcon} className="text-[20px]" />
        </a>
        <a>
          <Icon component={BottomSecondIcon} className="text-[20px]" />
        </a>
        <a>
          <Icon component={BottomThirdIcon} className="text-[20px]" />
        </a>
        <a>
          <Icon component={BottomFourthIcon} className="text-[20px]" />
        </a>
        <a>
          <CheckOutlined className="text-[20px] text-header-bg" />
        </a>
      </div>
    </div>
  );
}

export default LayoutSiderComponent;

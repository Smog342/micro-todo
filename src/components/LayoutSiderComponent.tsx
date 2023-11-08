import {
  CoffeeOutlined,
  HomeOutlined,
  MenuOutlined,
  OrderedListOutlined,
  PlusOutlined,
  ScheduleOutlined,
  StarOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Input, Button, ConfigProvider, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../Context";
import "../App.css";

function LayoutSiderComponent() {
  const navigate = useNavigate();

  const { boards, setBoards, setCurrentBoard } = useContext(Context);

  const [isBoardsDisabled, setIsBoardsDisabled] = useState(
    boards.length === 0 ? true : false
  );

  const [boardTitle, setBoardTitle] = useState("");

  let items = [
    { label: "Мой день", icon: <CoffeeOutlined />, key: "myday" },
    { label: "Важно", icon: <StarOutlined />, key: "important" },
    { label: "Запланировано", icon: <ScheduleOutlined />, key: "schedule" },
    { label: "Назначено", icon: <UserOutlined />, key: "assigned" },
    { label: "Задачи", icon: <HomeOutlined />, key: "tasks" },
    { label: null, icon: null, key: "divider", type: "divider" },
  ];

  let items2: MenuProps["items"] = [
    ...boards.map((board: string) => ({
      label: board,
      icon: <UnorderedListOutlined />,
      key: board,
    })),
  ];

  function handlePlusClick(e: React.MouseEvent<HTMLElement>): void {
    setBoards([...boards, boardTitle]);
    setBoardTitle("");
    setIsBoardsDisabled(false);
  }

  return (
    <div className="bg-white h-full overflow-auto">
      <div className="flex h-[48px] mt-[16px] pt-0 pb-0 pl-[24px] pr-[24px] items-center justify-between">
        <div>
          <ConfigProvider>
            <Button type="text" className="h-[20px] w-[20px]">
              <MenuOutlined className="h-[20px] w-[20px] p-0 m-0"></MenuOutlined>
            </Button>
          </ConfigProvider>
        </div>
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
              itemPaddingInline: 0,
              iconMarginInlineEnd: 16,
              paddingContentHorizontal: 10,
            },
          },
        }}
      >
        <Menu
          items={items}
          mode="inline"
          onClick={({ key }) => {
            setCurrentBoard(key);
            navigate(key);
          }}
        ></Menu>
      </ConfigProvider>
      <Menu
        items={items2}
        mode="inline"
        onClick={({ key }) => {
          setCurrentBoard(key);
          navigate(key);
        }}
      ></Menu>
      <Input
        prefix={
          <Button type="text" onClick={handlePlusClick}>
            <PlusOutlined className="text-blue-600 text-xl"></PlusOutlined>
          </Button>
        }
        className="rounded-none"
        placeholder="Создать список"
        bordered={false}
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
      ></Input>
    </div>
  );
}

export default LayoutSiderComponent;

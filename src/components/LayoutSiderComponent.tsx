import {
  CoffeeOutlined,
  HomeOutlined,
  PlusOutlined,
  ScheduleOutlined,
  StarOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Input, Button, ConfigProvider } from "antd";
import Sider from "antd/es/layout/Sider";
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
    {
      label: "Доски",
      icon: null,
      key: "lalala",
      disabled: isBoardsDisabled,
      children: [
        ...boards.map((board: string) => ({
          label: board,
          icon: <UnorderedListOutlined />,
          key: board,
        })),
      ],
    },
  ];

  function handlePlusClick(e: React.MouseEvent<HTMLElement>): void {
    setBoards([...boards, boardTitle]);
    setBoardTitle("");
    setIsBoardsDisabled(false);
  }

  return (
    <div className="bg-white h-full overflow-auto">
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
      <Input
        prefix={
          <Button type="text" onClick={handlePlusClick}>
            <PlusOutlined className="text-blue-600 text-xl"></PlusOutlined>
          </Button>
        }
        className="rounded-none"
        placeholder="Создать доску"
        bordered={false}
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
      ></Input>
    </div>
  );
}

export default LayoutSiderComponent;

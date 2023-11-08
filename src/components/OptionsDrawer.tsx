import { Drawer, Switch } from "antd";
import { Context } from "../Context";
import { useContext } from "react";

function OptionsDrawer() {
  const { optionsOpen, setOptionsOpen } = useContext(Context);

  function closeOptions() {
    setOptionsOpen(!optionsOpen);
  }

  return (
    <Drawer
      title="Параметры"
      placement="right"
      getContainer={false}
      width={352}
      open={optionsOpen}
      onClose={closeOptions}
    >
      <h4>Общие</h4>
      <h5>Запрашивать подтверждение перед удалением</h5>
      <Switch></Switch>
    </Drawer>
  );
}

export default OptionsDrawer;

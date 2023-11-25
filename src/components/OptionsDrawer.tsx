import { Drawer, Switch } from "antd";
import { switchOptionsOpen } from "../store/reducers/optionsSlice";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

function OptionsDrawer() {
  const { optionsOpen } = useTypedSelector((state) => state.options);
  const dispatch = useDispatch();

  return (
    <Drawer
      title="Параметры"
      placement="right"
      getContainer={false}
      width={352}
      open={optionsOpen}
      onClose={(e) => {
        dispatch(switchOptionsOpen());
      }}
    >
      <h4>Общие</h4>
      <h5>Запрашивать подтверждение перед удалением</h5>
      <Switch></Switch>
    </Drawer>
  );
}

export default OptionsDrawer;

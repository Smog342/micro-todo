import { Spin } from "antd";

type LoadingProps = {
  isAppLoading: boolean;
  props: string;
};

function OnLoadingComponent(Component: React.FC) {
  return function LoadingComponent({
    isAppLoading,
    props,
  }: LoadingProps): JSX.Element {
    if (isAppLoading) {
      return (
        <div className="flex w-screen h-screen flex-col justify-center items-center">
          <Spin></Spin>
          <p className="text-blue-500 font-bold">Идёт загрузка, подождите...</p>
        </div>
      );
    } else {
      return <Component></Component>;
    }
  };
}

export default OnLoadingComponent;

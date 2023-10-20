import { Spin } from "antd"

function OnLoadingComponent(Component: React.FC){

    type LoadingProps = {
        isAppLoading: boolean,
        props: string
    }

    return function LoadingComponent({isAppLoading, props}: LoadingProps): JSX.Element{

        if (isAppLoading){

            return (
                <div className="flex w-screen h-screen flex-col justify-center items-center">
                    <Spin></Spin>
                    <p className="text-green-500 font-bold">Идёт загрузка, подождите...</p>
                </div>
            )

        }else{

            return (
                <Component></Component>
            )

        }

    }
}

export default OnLoadingComponent
import { Layout, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";

function LayoutComponent(){

    return(
        <Space className="w-screen h-screen">
            <Layout className="w-screen h-screen">
                <Header></Header>
                <Layout hasSider>
                    <Sider></Sider>
                    <Content></Content>
                </Layout>
            </Layout>
        </Space>
    );

}

export default LayoutComponent;
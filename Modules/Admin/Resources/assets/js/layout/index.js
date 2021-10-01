import React, {useState} from "react";
import {Layout, BackTop} from 'antd';
import {UpSquareOutlined} from "@ant-design/icons";

import AppHeader from './components/AppHeader'
import SideBar from './components/SideBar'
import AppFooter from "./components/AppFooter";

const {Content} = Layout;

const AppLayout = ({children}) => {

    const [collapsed, setToggle] = useState(false)
    const onCollapse = () => {
        setToggle(!collapsed)
        console.log(collapsed)
    }

    return (
        <Layout>
            <SideBar collapsed={collapsed} onCollapse={onCollapse}/>
            <Layout>
                <AppHeader collapsed={collapsed} onCollapse={onCollapse}/>
                <Content>
                    {children}
                </Content>
                <AppFooter/>
                <BackTop>
                    <UpSquareOutlined/>
                </BackTop>
            </Layout>
        </Layout>
    )
}

export default AppLayout;

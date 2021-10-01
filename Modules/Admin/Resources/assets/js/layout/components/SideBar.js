import React from "react";
import {Layout, Menu} from "antd";
import {Link, useLocation} from "react-router-dom";

import {
    DesktopOutlined,
    DropboxOutlined,
    Loading3QuartersOutlined,
    InfoCircleOutlined,
    UsergroupAddOutlined,
    FileOutlined,
    FileImageOutlined,
    ReadOutlined
} from '@ant-design/icons';

import {config} from '../../utils';


const {Sider} = Layout;
const {SubMenu, Item} = Menu;


const SideBar = ({collapsed}) => {

    const location = useLocation();

    const selectedRoute = () => [
        location.pathname.replace(/^(\/admin\/\w+)\/.*/, '$1')
    ];

    return (
        <Sider
            collapsed={collapsed}
            breakpoint="lg"
        >
            <div className={'sidebar-header'}>
                <div className="logo">
                    <img src={config.logoPath} alt="logo"/>
                    {!collapsed && <h1>{config.siteName}</h1>}
                </div>
            </div>
            <Menu
                mode="inline"
                selectedKeys={selectedRoute()}>
                <Item key={'/admin'}>
                    <Link to='/admin'/>
                    <DesktopOutlined/>
                    <span className={'text'}>Dashboard</span>
                </Item>
                <Item key={'/admin/media-managers'}>
                    <Link to="/admin/media-managers"/>
                    <DropboxOutlined/>
                    <span className={'text'}>Media Manager</span>
                </Item>
                <Item key={"/admin/posts"}>
                    <Link to="/admin/posts"/>
                    <ReadOutlined />
                    <span className={'text'}>Posts</span>
                </Item>

                <Item key={"/admin/members"}>
                    <Link to="/admin/members"/>
                    <UsergroupAddOutlined />
                    <span className={'text'}>Members</span>
                </Item>
                <Item key={"/admin/galleries"}>
                    <Link to="/admin/galleries"/>
                    <FileImageOutlined />
                    <span className={'text'}>Galleries</span>
                </Item>
                <Item key={"/admin/documents"}>
                    <Link to="/admin/documents"/>
                    <FileOutlined/>
                    <span className={'text'}>Documents</span>
                </Item>
                <SubMenu icon={<InfoCircleOutlined/>}
                         title={<span className={'text'}>Info</span>}>
                    <Item key={"/admin/about"}>
                        <Link to="/admin/about"/>
                        <Loading3QuartersOutlined/>
                        <span className={'text'}>About</span>
                    </Item>
                    <Item key={"/admin/history"}>
                        <Link to="/admin/history"/>
                        <Loading3QuartersOutlined/>
                        <span className={'text'}>History</span>
                    </Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SideBar;

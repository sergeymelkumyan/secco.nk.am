import React, {Fragment} from "react";
import {Avatar, Layout, Menu} from "antd";
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import withAdminContext from "@/context/consumers/AdminConsumer";

const {Header} = Layout;

const AppHeader = ({collapsed, onCollapse, admin, logout}) => {

    const handleClickMenu = e => {
        if (e.key === 'sign-out') {
            logout();
        }
    }

    return (
        <Header>
            <div className={'menu-bar'}>
                <div className={'left-container'}>
                    {collapsed ? <MenuUnfoldOutlined onClick={onCollapse}/> :
                        <MenuFoldOutlined onClick={onCollapse}/>}
                </div>
                <div className={'right-container'}>
                    <Menu mode={'horizontal'} onClick={handleClickMenu} className={'account-bar'}>
                        <Menu.SubMenu title={
                            <Fragment>
                                <Avatar icon={<UserOutlined/>}/>
                                <span>Hi, {admin.name}</span>
                            </Fragment>
                        }>
                            {/*<Menu.Item key={'Account'}>*/}
                            {/*    <NavLink to={'/admin/account'}>*/}
                            {/*        Account*/}
                            {/*    </NavLink>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item key="sign-out">
                                SignOut
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </div>
            </div>
        </Header>
    )
}

export default withAdminContext(AppHeader, ['admin', 'logout'])

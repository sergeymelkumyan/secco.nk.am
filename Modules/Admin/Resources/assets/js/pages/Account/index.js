import React from 'react';
import {Tabs, Card, Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import {Page} from "@/components";


const {TabPane} = Tabs;

const Account = () => {

    const onTabClick = (key) => {
        console.log(key);
    }

    return (
        <Page className={'account'}>
            <Tabs onChange={onTabClick} tabPosition={'left'}>
                <TabPane
                    tab={
                        <span>
                            <UserOutlined/>
                            General
                        </span>
                    }
                    key="1">
                    <Card>
                        General
                    </Card>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                             <LockOutlined/>
                             Change Password
                         </span>
                    }
                    key="2">
                    <Card>
                        <Form>
                            <Form.Item name={'old_password'}>
                                <Input placeholder={'Old Password'}/>
                            </Form.Item>
                            <Form.Item name={'new_password'}>
                                <Input placeholder={'New Password'}/>
                            </Form.Item>
                            <Form.Item name={'password_confirmation'}>
                                <Input placeholder={'Password Confirmation'}/>
                            </Form.Item>
                            <Form.Item>
                                <Button type={'primary'}>
                                    Save Changes
                                </Button>
                                <Button type={'primary'} style={{marginLeft: 20}}>
                                    Reset
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </TabPane>
            </Tabs>
        </Page>
    )
}

export default Account;

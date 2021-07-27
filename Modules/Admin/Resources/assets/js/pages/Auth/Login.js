import React from 'react';
import {Form, Input, Button, Checkbox} from "antd";
import {NavLink} from "react-router-dom";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {config} from '@/utils';
import withAdminContext from "@/context/consumers/AdminConsumer";

const Login = ({login, history}) => {

    const onFinish = values => {
        login(values).then(() => {
            history.push('/admin')
        });
    };

    return (
        <div className={'layout--full-page login-page  ant-row ant-row-center ant-row-middle'}>
            <div className={'card'}>
                <div className={'card-header'}>
                    <img src={config.logoPath} alt=""/>
                    <h2>Login to your account</h2>
                </div>
                <Form
                    name="login"
                    size={'large'}
                    initialValues={{remember: false}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}>
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder={'Email'}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}>
                        <Input type={'password'}
                               prefix={<LockOutlined className="site-form-item-icon"/>}
                               placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <NavLink to={'/admin/forgot-password'} className="login-forgot">
                            Forgot password ?
                        </NavLink>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default withAdminContext(Login, ['login']);

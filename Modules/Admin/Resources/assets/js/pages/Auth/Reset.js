import React from 'react';
import {Button, Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {config} from '@/utils';
import withAdminContext from "@/context/consumers/AdminConsumer";


const Reset = ({location, resetPassword}) => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const email = params.get('email');

    const onFinish = values => {
        resetPassword(values)
    };

    return (
        <div className={'layout--full-page  ant-row ant-row-center ant-row-middle'}>
            <div className={'card'}>
                <div className={'card-header'}>
                    <img src={config.logoPath} alt=""/>
                    <h2>Reset Password</h2>
                </div>
                <Form
                    name="login"
                    className="reset-form"
                    initialValues={{
                        email: email,
                        token: token
                    }}
                    onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}>
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                            placeholder={'Email'} value={email} disabled/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}>
                        <Input type={'password'}
                               prefix={<LockOutlined className="site-form-item-icon"/>}
                               placeholder="New Password"/>
                    </Form.Item>
                    <Form.Item
                        name="password_confirmation"
                        rules={[{required: true, message: 'Please input your password!'}]}>
                        <Input type={'password'}
                               prefix={<LockOutlined className="site-form-item-icon"/>}
                               placeholder="Confirm Password"/>
                    </Form.Item>
                    <Form.Item name={'token'} style={{display: 'none'}}>
                        <Input type={'hidden'} value={token}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="reset-form-button">
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default withAdminContext(Reset, ['resetPassword']);

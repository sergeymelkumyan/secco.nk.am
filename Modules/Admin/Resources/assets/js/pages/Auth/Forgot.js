import React from 'react';
import {Button, Form, Input} from "antd";
import {MailOutlined} from "@ant-design/icons";
import {config} from '@/utils';
import withAdminContext from "@/context/consumers/AdminConsumer";

const Forgot = ({forgotPassword}) => {

    const onFinish = (values) => {
        forgotPassword(values).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err, 'error')
        })
    }

    return (
        <div className={'layout--full-page forgot-page ant-row ant-row-center ant-row-middle'}>
            <div className={'card'}>
                <div className={'card-header'}>
                    <img src={config.logoPath} alt=""/>
                    <h2>Reset Password</h2>
                </div>
                <Form
                    name="login"
                    className="forgot-form"
                    onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}>
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                            placeholder={'Email'}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="forgot-form-button">
                            Unlock
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default withAdminContext(Forgot, ['forgotPassword']);

import React from 'react';
import {Form, Button, Card, Input, Row, Col, Upload, message} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {config} from '@/utils'


const _Form = ({current = {}, fileList = [], onFinish}) => {

    const [form] = Form.useForm();


    const props = {
        name: 'document',
        action: '/api/admin/document-upload',
        defaultFileList: fileList,
        onChange(info) {
            if (info.file.status !== 'uploading') {
                form.setFieldsValue({
                    'file': info.file.response.document
                })
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            initialValues={{
                ...current
            }}>
            <Card>
                <Row gutter={10}>
                    {config.languages.map(lang => (
                        <Col lg={24 / config.languages.length} key={lang.label}>
                            <Form.Item label={`Title ${lang.label}`} name={['title', lang.value]}
                                       rules={[{required: true, message: 'Please input the title of collection!'}]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                    ))}
                </Row>
                <Form.Item label={'File'} name={'file'} noStyle>
                    <Input type={'hidden'} name={'file'}/>
                </Form.Item>
                <Upload {...props}>
                    <UploadOutlined/> Select File
                </Upload>
                <Form.Item>
                    <Button type={'primary'} htmlType="submit">Submit</Button>
                </Form.Item>
            </Card>
        </Form>
    )
}

export default _Form;

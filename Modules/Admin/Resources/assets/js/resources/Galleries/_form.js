import React from 'react';
import {Form, Input, Radio, Row, Col, Card, Button} from "antd";
import {MediaPicker} from '@/components';
import {config} from '@/utils';


const _Form = ({current = {}, onFinish}) => {
    const [form] = Form.useForm();

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            initialValues={{
                type: 'image',
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
                <Form.Item label={'Type'} name="type" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="image">Image</Radio>
                        <Radio value="video">Video</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}>
                    {({getFieldValue}) => {
                        return getFieldValue('type') === 'video' ? (
                            <Form.Item label="Video Url" name="video_url" rules={[{required: true}]}>
                                <Input/>
                            </Form.Item>
                        ) : <>
                            <MediaPicker
                                directory={'galleries'}
                                form={form}
                                label={'Main Image'}
                                name={'main_image'}/>
                            <MediaPicker
                                directory={'galleries'}
                                form={form}
                                label={'Image'}
                                name={'image'}
                                multiple={true}/>
                        </>;
                    }}
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} htmlType="submit">Submit</Button>
                </Form.Item>
            </Card>
        </Form>
    )
}

export default _Form;

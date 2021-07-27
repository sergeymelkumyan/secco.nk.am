import React from 'react';
import {Form, Button, Card, Collapse, Input, Select, Tabs, Row, Col} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import {MetaInputs, MediaPicker, Editor} from "@/components";
import {config} from '@/utils'

const {TabPane} = Tabs;
const {Panel} = Collapse;
const {TextArea} = Input;

const _Form = ({current = {}, onFinish}) => {
    const [form] = Form.useForm();

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
                    <Col xl={18}> <Tabs type={'card'} tabPosition={'top'}>
                        {config.languages.map(lang => (
                            <TabPane tab={lang.label} key={lang.value}>
                                <Collapse
                                    ghost
                                    bordered={false}
                                    defaultActiveKey={['1']}
                                    expandIcon={({isActive}) => <CaretRightOutlined
                                        rotate={isActive ? 90 : 0}/>}
                                    className="site-collapse-custom-collapse">
                                    <Panel header="Main" key="1" className="site-collapse-custom-panel">
                                        <Form.Item
                                            label={'Full Name'}
                                            name={['full_name', lang.value]}
                                            rules={[{required: true, message: 'Please input Full Name!'}]}>
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            label={'Title'}
                                            name={['title', lang.value]}
                                            rules={[{required: true, message: 'Please input Title!'}]}>
                                            <Input/>
                                        </Form.Item>
                                        <Editor
                                            label={'Bio'}
                                            name={['bio', lang.value]}
                                            rules={[{
                                                required: true,
                                                message: 'Please input bio'
                                            }]}
                                        />
                                    </Panel>
                                    <Panel header="Seo" key="2" className="site-collapse-custom-panel">
                                        <MetaInputs lang={lang.value}/>
                                    </Panel>
                                </Collapse>
                            </TabPane>
                        ))}
                    </Tabs>
                    </Col>
                    <Col xl={6}>
                        <MediaPicker
                            directory={'members'}
                            form={form}
                            label={'Image'}
                            name={'image'}
                        />
                    </Col>
                </Row>
                <Form.Item>
                    <Button type={'primary'} htmlType="submit">Submit</Button>
                </Form.Item>
            </Card>
        </Form>
    )
}

export default _Form;

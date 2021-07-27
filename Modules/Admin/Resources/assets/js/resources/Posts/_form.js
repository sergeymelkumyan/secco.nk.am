import React from 'react';
import {Form, Button, Card, Collapse, Input, Select, Tabs, Row, Col, DatePicker} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import {MetaInputs, MediaPicker, Editor} from "@/components";
import {config} from '@/utils';
import moment from 'moment';


const {TabPane} = Tabs;
const {Panel} = Collapse;
const {TextArea} = Input;
const {Option} = Select;

const _Form = ({current = {}, onFinish}) => {

    const [form] = Form.useForm();

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            initialValues={{
                ...current,
                date: moment(current.date)
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
                                            label={'Title'}
                                            name={['title', lang.value]}
                                            rules={[{required: true, message: 'Please input title!'}]}>
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            label={'Short Description'}
                                            name={['short_description', lang.value]}
                                            rules={[{
                                                required: true,
                                                message: 'Please input short description!'
                                            }]}>
                                            <TextArea/>
                                        </Form.Item>
                                        <Editor
                                            label={'Description'}
                                            name={['description', lang.value]}
                                            rules={[{
                                                required: true,
                                                message: 'Please input  description!'
                                            }]}
                                        />
                                    </Panel>
                                    <Panel header="Seo" key="2" className="site-collapse-custom-panel">
                                        <MetaInputs lang={lang.value}/>
                                    </Panel>
                                </Collapse>
                            </TabPane>
                        ))}
                    </Tabs></Col>
                    <Col xl={6}>
                        <Form.Item label={'Type'} name={'type'}>
                            <Select>
                                <Option value={'press'}>Press</Option>
                                <Option value={'announcement'}>Announcement</Option>
                                <Option value={'speeches'}>Speeches</Option>
                                <Option value={'sessions'}>Sessions</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={'Date'} name={'date'}>
                            <DatePicker/>
                        </Form.Item>
                        <MediaPicker
                            directory={'posts'}
                            form={form}
                            label={'Image'}
                            name={'image'}
                            rules={[]}
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

import React, {useState, useEffect} from 'react';
import {MetaInputs, Page, Editor} from '@/components';
import {Form, Card, Tabs, Collapse, Input, Button, notification} from "antd";
import {CaretRightOutlined} from '@ant-design/icons';
import {api, config} from '@/utils';

const {TabPane} = Tabs;
const {Panel} = Collapse;


const History = () => {
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState(null);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        api.put(`histories/${state.id}`, values)
            .then(({data}) => {
                setState(data);
                notification.success({
                    message: 'Update Successfully',
                    duration: 2
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        api.get('histories')
            .then(({data}) => {
                setState(data)
                setLoading(false);
            })
    }, [])

    return (
        <Page title={'History'} className={'history'} loading={loading}>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                initialValues={{...state}}>
                <Card>
                    <Tabs type={'card'} tabPosition={'top'}>
                        {config.languages.map(lang => (
                            <TabPane tab={lang.label} key={lang.value}>
                                <Collapse
                                    ghost
                                    bordered={false}
                                    defaultActiveKey={['main']}
                                    expandIcon={({isActive}) => <CaretRightOutlined
                                        rotate={isActive ? 90 : 0}/>}
                                    className="site-collapse-custom-collapse">
                                    <Panel header={'Main'} key={'main'}>
                                        <Form.Item label={'Title'} name={['title', lang.value]}>
                                            <Input/>
                                        </Form.Item>
                                        <Editor
                                            label={'Content'}
                                            name={['description', lang.value]}
                                            rules={[{
                                                required: true,
                                                message: 'Please input content!'
                                            }]}
                                        />
                                    </Panel>
                                    <Panel header={'Seo'} key={'seo'}>
                                        <MetaInputs lang={lang.value}/>
                                    </Panel>
                                </Collapse>
                            </TabPane>
                        ))}
                    </Tabs>
                    <Form.Item>
                        <Button type={'primary'} htmlType="submit">Submit</Button>
                    </Form.Item>
                </Card>
            </Form>
        </Page>
    )
}

export default History;

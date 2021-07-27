import React, {Fragment} from 'react'
import {Form, Input} from "antd"


const MetaInputs = ({lang}) => {
    return (
        <Fragment>
            <Form.Item label={'Meta Title'} name={['meta', 'meta_title', lang]}>
                <Input/>
            </Form.Item>
            <Form.Item label={'Meta Description'} name={['meta', 'meta_description', lang]}>
                <Input/>
            </Form.Item>
            <Form.Item label={'Meta Keywords'} name={['meta', 'meta_keywords', lang]}>
                <Input/>
            </Form.Item>
        </Fragment>
    )
}

export default MetaInputs

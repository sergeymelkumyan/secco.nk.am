import React, {useState} from 'react';
import {Col, Row} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {Uploader} from '@/components';


const NewFile = ({directory}) => {
    const [upload, setUpload] = useState(false);

    return (
        <Row gutter={[32, 32]} className={'actions'}>
            <Col span={24}>
                <a onClick={() => setUpload(!upload)} className={'new-button'}>
                    <PlusOutlined/>
                    <span>
                         Add New Media
                    </span>
                </a>
            </Col>
            {upload ? <Col span={24}>
                <Uploader directory={directory}/>
            </Col> : ""}
        </Row>
    )
}

export default NewFile;

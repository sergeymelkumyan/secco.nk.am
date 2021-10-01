import React from 'react';
import withMediaContext from "../../context/consumers/MediaConsumer";
import {CloudUploadOutlined} from "@ant-design/icons";
import {Upload} from "antd";

const {Dragger} = Upload;

const Uploader = ({create, directory = 'images'}) => {
    const onChange = (info) => {
        const {status} = info.file;
        if (status !== 'uploading') {
        }
        if (status === 'done') {
            create(info.file.response.data)
        } else if (status === 'error') {
        }
    }

    return (
        <Dragger
            name={'file'}
            showUploadList={false}
            multiple={true}
            headers={{directory: directory}}
            action={'/api/admin/medias'}
            onChange={(info) => onChange(info)}>
            <p className="ant-upload-drag-icon">
                <CloudUploadOutlined/>
            </p>
            <p className="ant-upload-text">
                Drag and Drop or Browse to upload
            </p>
            <p className="ant-upload-hint">
            </p>
        </Dragger>
    )
}

export default withMediaContext(Uploader, ['create']);

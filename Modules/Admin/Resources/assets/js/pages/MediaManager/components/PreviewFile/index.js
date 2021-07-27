import React, {useState, useEffect} from 'react';
import {Drawer, Input, Button} from "antd";
import withMediaContext from "@/context/consumers/MediaConsumer";
import {bytesToKbytes} from "@/utils";

const {TextArea} = Input;

const PreviewFile = ({visible, toggleVisible, file, update}) => {

    const [alt, setAlt] = useState('')

    const onChange = ({target: {value}}) => {
        setAlt(value)
    };

    useEffect(() => {
        setAlt(file.alt)
    }, [])

    return (
        <Drawer
            title={file.name}
            visible={visible}
            onClose={() => toggleVisible()}
            getContainer={false}
            className={'image-preview'}
        >
            <img src={file.file_name} alt=""/>
            <div className={'info'}>
                <p>Type: {file.mime_type}</p>
                <p>Uploaded on: {file.created_at}</p>
                <p>Size:{bytesToKbytes(file.size)}</p>
                <TextArea
                    value={alt}
                    placeholder={'Alternative Text'}
                    autoSize={{minRows: 4, maxRows: 8}}
                    allowClear={true}
                    onChange={onChange}/>
            </div>
            <div className={'actions'}>
                <Button onClick={() => update(file.id, {alt: alt})}>
                    Update
                </Button>
            </div>
        </Drawer>
    )
}

export default withMediaContext(PreviewFile, ['file', 'toggleVisible', 'update', 'visible']);

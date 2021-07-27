import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-image-picker';
import {PlusOutlined} from "@ant-design/icons";
import {Modal, Input, Form} from "antd";
import Uploader from "../../Uploader";
import withMediaContext from "../../../context/consumers/MediaConsumer";
import {isNumber} from "../../../utils";

const {Search} = Input;

const MediaPicker = ({getList, fileList, findOneSelected, findManySelected, directory, form, label, name, rules = [], multiple = false}) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState({});

    const onPick = (image) => {
        form.setFieldsValue({
            [name]: multiple ? image.map(obj => obj.value) : image.value
        });
        setSelected(image);
    }

    const handleOk = e => {
        setVisible(!visible)
    };

    const getContainer = (id) => {
        return () => {
            if (!id || typeof document === 'undefined') return null;
            return document.getElementsByClassName(id)[0];
        };
    }

    const handleCancel = e => {
        setVisible(!visible)
    };

    useEffect(() => {
        getList({directory: directory}).then(() => {
            const selectedForm = form.getFieldValue(name);

            if (selectedForm && isNumber(selectedForm)) {
                setSelected(findOneSelected(selectedForm))
            }
            if (selectedForm && multiple) {
                setSelected(findManySelected(selectedForm))
            }
        });
    }, []);

    return (
        <div className={'media-picker-wrapper'}>
            <Form.Item label={label} name={name} rules={rules} className={'media-picker-label'}>
                <Input type={'hidden'}/>
            </Form.Item>
            {
                !multiple ? (
                    <div className={'media-picker-button'} onClick={() => setVisible(!visible)}>
                        {
                            (Object.keys(selected).length < 1) ? (
                                <div className={'upload'}>
                                    <PlusOutlined/>
                                    <div className={'text'}>Add Image</div>
                                </div>
                            ) : (
                                <img src={selected.src} alt=""/>
                            )
                        }
                    </div>
                ) : (
                    <>
                        {Object.keys(selected).length > 1 ? (
                            selected.map((select, key) => (
                                <div key={key} className={'media-picker-button'}>
                                    <img src={select.src} alt=""/>
                                </div>
                            ))
                        ) : null}
                        <div className={'media-picker-button'} onClick={() => setVisible(!visible)}>
                            <div className={'upload'}>
                                <PlusOutlined/>
                                <div className={'text'}>Add Image</div>
                            </div>
                        </div>
                    </>

                )
            }

            <Modal
                width={'70%'}
                wrapClassName={'media-picker'}
                closable={false}
                getContainer={getContainer('media-picker-wrapper')}
                title={
                    <Search placeholder="Search here"
                            allowClear={true}
                            onChange={e => getList({name: e.target.value})}
                            onSearch={value => getList({name: value})}/>
                }
                visible={visible}
                onOk={(e) => handleOk(e)}
                onCancel={(e) => handleCancel(e)}>
                <Uploader directory={directory}/>
                <ImagePicker
                    images={fileList.map((image, i) => ({src: image.file_name, value: image.id}))}
                    onPick={onPick}
                    multiple={multiple}
                />
            </Modal>
            <div className={'clear'}></div>
        </div>
    )
}

export default withMediaContext(MediaPicker, ['getList', 'fileList', 'findOneSelected', 'findManySelected']);

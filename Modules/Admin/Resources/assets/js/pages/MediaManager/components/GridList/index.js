import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Upload} from "antd";

const GridList = ({fileList, getOne, deleteOne}) => {

    const files = fileList.map(file => {
        return {
            uid: file.id,
            name: file.name,
            status: 'done',
            url: file.file_name,
        }
    });

    return (
        <Upload
            action=""
            listType="picture-card"
            fileList={files}
            onPreview={(file) => getOne(file.uid)}
            onChange={(data) => deleteOne(data.file.uid)}
        />
    )
}

export default GridList;

GridList.propTypes = {
    fileList: PropTypes.array,
    useShow: PropTypes.func,
    useDelete: PropTypes.func,
}

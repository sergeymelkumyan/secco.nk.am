import React from 'react';
import {Table} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {bytesToKbytes} from "@/utils";


const TableList = ({fileList, getOne, deleteOne}) => {

    const columns = [
        {
            title: '',
            dataIndex: 'image',
            key: 'image',
            render: (text, record) => (
                <img src={record.file_name} alt={''}/>
            )
        },
        {
            title: '',
            key: 'original_name',
            dataIndex: 'original_name'
        },
        {
            title: '',
            dataIndex: 'size',
            render: (text, record) => bytesToKbytes(record.size)
        },
        {
            title: '',
            key: 'mime_type',
            dataIndex: 'mime_type'
        },
        {
            title: '',
            key: 'alt',
            dataIndex: 'alt'
        },
        {
            title: '',
            key: 'created_at',
            dataIndex: 'created_at'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (text, record) => (
                <DeleteOutlined
                    onClick={() => deleteOne(record.id)}
                />
            )
        }
    ];

    return (
        <Table
            showHeader={false}
            className={'table-list'}
            rowKey={record => record.id}
            columns={columns}
            dataSource={fileList}
        />
    )
}

export default TableList;

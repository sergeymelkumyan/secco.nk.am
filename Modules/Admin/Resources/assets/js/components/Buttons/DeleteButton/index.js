import React from 'react'
import {Popconfirm} from "antd"
import {DeleteOutlined} from "@ant-design/icons"

const DeleteButton = ({handleDelete}) => {
    return (
        <span>
            <Popconfirm title={"Sure to delete?"} onConfirm={() => handleDelete()}>
                <DeleteOutlined/>
            </Popconfirm>
        </span>
    )
}

export default DeleteButton

import React from 'react'
import {Link} from "react-router-dom"
import {EditOutlined} from "@ant-design/icons"

const EditButton = ({url}) => {
    return (
        <span style={{marginRight: 10}}>
            <Link to={url}>
                <EditOutlined/>
            </Link>
        </span>
    )
}

export default EditButton

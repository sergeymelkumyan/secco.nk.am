import React from 'react'
import {Link} from 'react-router-dom'
import {PlusOutlined} from '@ant-design/icons'

const CreateButton = ({path}) => {
    return (
        <Link to={path} className={'new-button'}>
            <PlusOutlined/>
            <span>Add a new collection</span>
        </Link>
    )
}

export default CreateButton

import React from 'react'
import {Spin} from "antd"

const Loader = () => {
    return (
        <div style={{paddingTop: 100, textAlign: 'center'}}>
            <Spin size={"large"}/>
        </div>
    )
}

export default Loader

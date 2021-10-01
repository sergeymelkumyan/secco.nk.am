import React from 'react';
import {Col, DatePicker, Input, Row, Select} from "antd";
import {AppstoreOutlined, MenuOutlined} from "@ant-design/icons";

const {RangePicker} = DatePicker;
const {Option} = Select;
const {Search} = Input;

const FilterFiles = ({getList, setListType}) => {
    return (
        <Row gutter={[32, 32]} className={'filters'} align={'middle'}>
            <Col span={3}>
                <span>Show</span>
                <AppstoreOutlined onClick={() => setListType(true)}/>
                <MenuOutlined onClick={() => setListType(false)}/>
            </Col>
            <Col span={3}>
                <RangePicker
                    format={"YYYY-MM-DD"}
                    onCalendarChange={(dates, dateString) => {
                        getList({
                            'start_date': dateString[0],
                            'end_date': dateString[1]
                        })
                    }}/>
            </Col>
            <Col span={4} offset={14}>
                <Search placeholder="Search here" onSearch={value => getList({name: value})}/>
            </Col>
        </Row>
    )
}

export default FilterFiles;

import React, {useEffect, useMemo} from 'react'
import withDataContext from "../../context/consumers/DataConsumer"
import Page from "../Page"
import CreateButton from "../Buttons/CreateButton"
import EditButton from "../Buttons/EditButton"
import DeleteButton from "../Buttons/DeleteButton"
import {useRouter} from '../../hooks'
import {Col, Input, Row, Table} from "antd"

const {Search} = Input

const Resource =
    ({
         title,
         name,
         primaryKey = "slug",
         columns,
         isCreate = true,
         isEdit = true,
         isDelete = true,
         list,
         pagination,
         loading,
         getList,
         onPagination,
         deleteOne
     }) => {

        const router = useRouter();
        const basePath = router.match.path;


        useMemo(() => {
            return (isEdit || isDelete) && columns.push({
                title: 'Actions', dataIndex: 'actions',
                render: (text, record) => (
                    <>
                        {isEdit &&
                        <EditButton url={`${basePath}/edit/${record[primaryKey]}`}/>}
                        {isDelete &&
                        <DeleteButton handleDelete={() => deleteOne(name, primaryKey, record[primaryKey])}/>}
                    </>
                )
            })
        }, [isDelete, isEdit, columns])


        useEffect(() => {
            getList(name)
        }, [])


        return (
            <Page title={title}>
                <Row className={'row-actions'}>
                    <Col xl={20}>
                        {isCreate && <CreateButton path={`${basePath}/create`}/>}
                    </Col>
                    <Col xl={4}>
                        <Search
                            placeholder={'Search'}
                            size={'large'}
                            onSearch={value => getList(name, {search: value})}/>
                    </Col>
                </Row>
                <Table
                    columns={columns}
                    rowKey={record => record[primaryKey]}
                    dataSource={list[name]}
                    pagination={pagination}
                    loading={loading}
                    onChange={(pagination) => onPagination(name, pagination)}
                />
            </Page>
        )
    }

export default withDataContext(Resource, ['list', 'pagination', 'loading', 'getList', 'onPagination', 'deleteOne'])

import React, {useEffect} from 'react';
import withDataContext from "@/context/consumers/DataConsumer";
import {Page} from '@/components';
import _Form from "./_form";
import {useParams} from 'react-router-dom';

const Edit = ({getOne, current, update, loading}) => {
    const {id} = useParams();

    const onFinish = (values) => {
        update('galleries', current.id, values);
    }

    useEffect(() => {
        getOne('galleries', id);
    }, [id])
    console.log(loading)
    return (
        <Page title={'Gallery Edit'} className={'gallery-edit'} loading={loading}>
            <_Form current={current} onFinish={onFinish}/>
        </Page>
    )
}

export default withDataContext(Edit, ['getOne', 'current', 'update', 'loading']);

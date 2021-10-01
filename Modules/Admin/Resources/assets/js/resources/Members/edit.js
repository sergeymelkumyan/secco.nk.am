import React, {useEffect} from 'react';
import withDataContext from "@/context/consumers/DataConsumer";
import {useParams} from 'react-router-dom';
import {Page} from '@/components';
import _Form from "./_form";

const Edit = ({update, getOne, current, loading}) => {
    const {id} = useParams();

    const onFinish = (values) => {
        update('members', current.id, values);
    }

    useEffect(() => {
        getOne('members', id)
    }, [id])

    return current ? (
        <Page title={'Edit'}>
            <_Form current={current} onFinish={onFinish}/>
        </Page>
    ) : null
}

export default withDataContext(Edit, ['update', 'getOne', 'current']);

import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Page} from '@/components';
import withDataContext from "@/context/consumers/DataConsumer";
import _Form from "./_form";
import moment from 'moment';

const Edit = ({update, getOne, current}) => {
    const {id} = useParams();

    const onFinish = (values) => {
        values.date = moment(values.date).format('YYYY-MM-DD')
        update('posts', current.id, values);
    }

    useEffect(() => {
        getOne('posts', id);
    }, [id]);

    return current ? (
        <Page title={'Post Edit'} className={'post_edit'}>
            <_Form current={current} onFinish={onFinish}/>
        </Page>
    ) : null
}

export default withDataContext(Edit, ['update', 'getOne', 'current'])

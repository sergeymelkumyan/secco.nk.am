import React from 'react';
import {Page} from '@/components';
import withDataContext from "@/context/consumers/DataConsumer";
import _Form from "./_form";
import moment from 'moment';

const Create = ({create}) => {

    const onFinish = (values) => {
        values.date = moment(values.date).format('YYYY/MM/DD')
        create('posts', values);
    }

    return (
        <Page title={'Create'}>
            <_Form onFinish={onFinish}/>
        </Page>
    )
}

export default withDataContext(Create, ['create'])

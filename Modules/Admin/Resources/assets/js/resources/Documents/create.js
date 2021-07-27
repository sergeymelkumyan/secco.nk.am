import React from 'react';
import {Page} from '@/components';
import withDataContext from "@/context/consumers/DataConsumer";
import _Form from "./_form";

const Create = ({create}) => {

    const onFinish = (values) => {
        create('documents', values);
    }

    return (
        <Page title={'Create'}>
            <_Form onFinish={onFinish}/>
        </Page>
    )
}

export default withDataContext(Create, ['create'])

import React from 'react';
import withDataContext from "@/context/consumers/DataConsumer";
import {Page} from '@/components';
import _Form from "./_form";

const Create = ({create}) => {

    const onFinish = (values) => {
        create('members', values);
    }

    return (
        <Page title={' Create'}>
            <_Form onFinish={onFinish}/>
        </Page>
    )
}

export default withDataContext(Create, ['create']);

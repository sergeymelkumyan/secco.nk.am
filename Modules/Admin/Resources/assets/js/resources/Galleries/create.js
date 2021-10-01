import React from 'react';
import withDataContext from "@/context/consumers/DataConsumer";
import {Page} from '@/components';
import _Form from "./_form";

const Create = ({create}) => {

    const onFinish = (values) => {
        create('galleries', values);
    }
    return (
        <Page title={'Gallery Create'} className={'gallery_create'}>
            <_Form onFinish={onFinish}/>
        </Page>
    )
}

export default withDataContext(Create, ['create'])

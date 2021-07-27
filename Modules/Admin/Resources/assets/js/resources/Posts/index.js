import React from 'react';
import {Resource} from '@/components';


const Index = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: ['title', 'en'],
            key: 'title.en'
        },
        {
            title: 'Slug',
            dataIndex: 'slug',
            key: 'slug'
        }
    ]


    return (
        <Resource
            title={'Posts'}
            name={'posts'}
            columns={columns}
            primaryKey={'id'}
        />
    )
}

export default Index;

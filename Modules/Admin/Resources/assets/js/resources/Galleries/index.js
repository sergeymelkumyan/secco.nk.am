import React from 'react';
import {Resource} from '@/components';


const Index = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: ['title', 'en'],
            key: 'title.hy'
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type'
        }
    ]

    return (
        <Resource
            title={'Galleries'}
            name={'galleries'}
            columns={columns}
            primaryKey={'id'}
        />
    )
}

export default Index;

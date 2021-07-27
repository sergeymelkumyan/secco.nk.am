import React from 'react';
import {Resource} from '@/components';


const Index = () => {
    const columns = [
        {
            title: 'Full Name',
            dataIndex: ['full_name', 'en'],
            key: 'full_name.en'
        },
        {
            title: 'Title',
            dataIndex: ['title', 'en'],
            key: 'title.en'
        }
    ]

    return (
        <Resource
            title={'Members'}
            name={'members'}
            columns={columns}
            primaryKey={'id'}
        />
    )
}

export default Index;

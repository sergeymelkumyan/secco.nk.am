import React from 'react';
import {Resource} from '@/components';


const Index = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: ['title', 'en'],
            key: 'title.en'
        }
    ]
    return (
        <Resource
            title={'Documents'}
            name={'documents'}
            columns={columns}
            primaryKey={'id'}
        />
    )
}

export default Index;

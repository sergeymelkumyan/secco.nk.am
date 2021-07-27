import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Page} from '@/components';
import withDataContext from "@/context/consumers/DataConsumer";
import _Form from "./_form";

const Edit = ({update, getOne, current, loading}) => {
    const {id} = useParams();

    const onFinish = (values) => {
        update('documents', current.id, values);
    }

    useEffect(() => {
        getOne('documents', id);
    }, [id]);

    return current ? (
        <Page title={'Document Edit'} loading={loading}>
            <_Form
                current={current}
                onFinish={onFinish}
                fileList={[
                    {
                        uid: '-1',
                        name: 'Document',
                        status: 'done',
                        url: current.file,
                    }
                ]}
            />
        </Page>
    ) : null
}

export default withDataContext(Edit, ['update', 'getOne', 'current', 'loading'])

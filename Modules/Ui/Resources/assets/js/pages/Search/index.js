import React, {useEffect} from 'react';
import withDataContext from "@/context/consumers/DataConsumer";
import {Page, Loader} from '@/components';
import Result from "./components/Result";

const Search = ({getPage}) => {
    useEffect(() => {
        getPage('posts', {type: 'press'})
    }, []);

    return (
        <Page className={'search-result'} head={{title: translate('search_title') + ' | ' + translate('republic_of_artsakh')}}>
            <Result/>
        </Page>
    )
}
export default withDataContext(Search, ['getPage']);

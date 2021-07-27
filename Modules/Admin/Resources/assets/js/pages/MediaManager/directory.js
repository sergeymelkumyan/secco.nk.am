import React, {useEffect, useState} from 'react';
import withMediaContext from "@/context/consumers/MediaConsumer";

import {Page} from "@/components";
import NewFile from "./components/NewFile";
import FilterFiles from "./components/FilterFiles";
import PreviewFile from "./components/PreviewFile";
import GridList from './components/GridList';
import TableList from './components/TableList';
import {useParams} from "react-router-dom";

const Directory = ({fileList, visible, loading, getList, getOne, update, deleteOne}) => {
    const {directory} = useParams();
    const [listType, setListType] = useState(true);

    useEffect(() => {
        getList({directory: directory});
    }, [directory]);
    console.log(loading)
    return (
        <Page title={'Images ' + directory} className={'directory'} loading={loading}>
            <NewFile directory={directory}/>
            <FilterFiles getList={getList} setListType={setListType}/>
            {listType ?
                <GridList fileList={fileList} getOne={getOne} deleteOne={deleteOne}/> :
                <TableList fileList={fileList} getOne={getOne} deleteOne={deleteOne}/>
            }
            {visible && <PreviewFile/>}
        </Page>
    )
}

export default withMediaContext(Directory, ['fileList', 'visible', 'loading', 'getList', 'create', 'getOne', 'update', 'deleteOne']);

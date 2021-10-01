import React from 'react';
import {Page} from '@/components';
import Photos from "./components/Photos";
import withLanguageContext from "../../context/consumers/LanguageConsumer";


const Gallery = ({translate}) => {
    return (
        <Page className={'gallery'} head={{title: translate('Photos')}}>
            <Photos/>
        </Page>
    )
}
export default withLanguageContext(Gallery,['translate']);

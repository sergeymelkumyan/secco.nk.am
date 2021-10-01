import React from 'react';
import withDataContext from '@/context/consumers/DataConsumer';
import {Page} from '@/components';
import MainNews from "./components/MainNews";
import PressRelease from "./components/PressRelease";
import Speech from "./components/Speech";
import Announcement from "./components/Annoucement";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import withLanguageContext from "@/context/consumers/LanguageConsumer";


const Home = ({sliders, announcements, press, speeches, photos, videos, translate, loading}) => {
    return (
        <Page className={'home'}
              head={{title: translate('office_security_council') + ' | ' + translate('republic_of_artsakh')}}
              loading={loading}>
            <MainNews sliders={sliders}/>
            <PressRelease press={press}/>
            <Gallery photos={photos}/>
            <Video videos={videos}/>
            <Announcement announcements={announcements}/>
            <Speech speeches={speeches}/>
        </Page>
    )
}

export default withLanguageContext(withDataContext(Home, ['sliders', 'announcements', 'press', 'speeches','photos','videos', 'loading']), ['translate']);

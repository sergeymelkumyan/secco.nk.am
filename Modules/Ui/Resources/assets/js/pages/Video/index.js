import React from 'react';
import {Page} from '@/components';
import withDataContext from "@/context/consumers/DataConsumer";
import ReactPlayer from 'react-player/youtube'
import {Col, Container, Row} from "react-bootstrap";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import Loader from "@/components/Loader";


const Video = ({videos,translate}) => {

    return videos ? (
        <Page className={'video'} head={{title: translate('Videos') + ' | ' + translate('republic_of_artsakh')}}>
            <Container>
                <h3 className={'text-center py-5'}><span>{translate('Videos')}</span></h3>
                <Row>
                    {videos.map((video, key) => (
                    <Col md={4} key={key} className={'mb-4'}>
                        <ReactPlayer url={video.video_url} width='100%'/>
                        {/*<YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady}/>*/}
                    </Col>
                    ))}
                </Row>
            </Container>
        </Page>
    ) : <Loader/>
}
export default withLanguageContext(withDataContext(Video, ['videos']), ['translate']);

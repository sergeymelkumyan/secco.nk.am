import React from 'react';
import ReactPlayer from 'react-player/youtube'
import {Col, Container, Row} from "react-bootstrap";
import withLanguageContext from "@/context/consumers/LanguageConsumer";

const Video = ({translate,videos}) => {
    window.YTConfig = {
        host: 'https://youtube.com',
        origin: 'https://secco.nkr.am'
    }
    return (

            <Container className={'video mb-5'}>
                <h3 className={'text-center py-3'}><span>{translate('Videos')}</span></h3>
                <Row>
                    {videos?.map((video, key) => (
                        <Col md={4} key={key} className={'mb-4'}>
                            <ReactPlayer url={video.video_url} config={{youtube:{ playerVars: { origin: 'https://secco.nkr.am' }}}} width='100%'/>
                        </Col>
                    ))}
                </Row>
            </Container>
    )
}
export default withLanguageContext(Video, ['translate']);


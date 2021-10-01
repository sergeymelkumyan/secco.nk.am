import React, {useCallback, useEffect, useState} from 'react';
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {Page} from '@/components';
import Loader from "@/components/Loader";
import withDataContext from "../../context/consumers/DataConsumer";

const GalleyDetail = ({getPage, photo}) => {
    const {slug} = useParams();
    const photos = [];
    if(photo){
        for (let i = 0; i < photo.photos.length; i++) {
            let width,height;
            if(i%2 === 0){
                height = 3;
                width = 4
            } else {
                height = 2;
                width = 3
            }
            photos.push({
                src: photo.photos[i],
                width:width,
                height:height
            });
        }
    }

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        getPage(`photo/${slug}`)
    }, [slug]);

    return photo && photos ? (
        <Page className={'member-detail'} head={{title: photo.title}}>
            <Container className={'py-5'}>
                <h3 className={'text-center mb-5 title'}>{photo.title}</h3>
                <Row>
                    <Col sm={12}>
                        <Gallery photos={photos} onClick={openLightbox}/>
                    </Col>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </Row>
            </Container>
        </Page>
    ) : <Loader/>
}

export default withDataContext(GalleyDetail, ['getPage', 'photo']);

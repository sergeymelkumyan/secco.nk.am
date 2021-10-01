import React from "react";
import withDataContext from "@/context/consumers/DataConsumer";
import {Container, Row, Col, Card} from "react-bootstrap";
import {CustomLink} from '@/components';
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import Loader from "@/components/Loader";

const Photos = ({photos,translate}) => {

    return photos ?(
        // <div>
            <Container>
            <h3 className={'text-center py-5'}><span>{translate('Photos')}</span></h3>
                <Row>
                    {photos.map((photo, key) => (
                        <Col key={key} md={4} className={'mb-3'}>
                            <Card className={'h-100'}>
                                <Card.Img variant="top" src={photo.image} alt={photo.title}/>
                                <Card.Body>
                                    <Card.Title>{photo.title}</Card.Title>
                                    <CustomLink
                                        url={`/photo/${photo.slug}`}
                                        className={'stretched-link'}
                                        navlink={false}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        // </div>

    ) : <Loader/>
}

export default withLanguageContext(withDataContext(Photos, ['photos']), ['translate'])

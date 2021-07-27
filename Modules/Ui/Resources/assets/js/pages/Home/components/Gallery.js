import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import {CustomLink} from "@/components";

const Gallery = ({translate,photos}) => {
    return (
        <Container className={'gallery py-3 mb-3'}>
            <h3 className={'text-center mb-5'}><span>{translate('Photos')}</span></h3>
            <Row>
                {photos?.map(photo => (
                <Col md={4} key={photo.slug} className={'mb-3'}>
                    <Card className={'h-100'}>
                        <Card.Img variant="top" src={photo.image} alt={'gallery'}/>
                        <Card.Body className={'p-3'}>
                            <Card.Title className={'mb-0'}>
                                <CustomLink
                                    url={`/photo/${photo.slug}`}
                                    className={'stretched-link'}
                                    content={photo.title}
                                    navlink={false}
                                />
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default withLanguageContext(Gallery, ['translate']);

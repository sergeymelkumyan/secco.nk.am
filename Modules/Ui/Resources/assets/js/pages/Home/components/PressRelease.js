import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import {CustomLink} from "@/components";

const PressRelease = ({translate, press}) => {
    return (
        <Container className={'press-release pt-5 pb-3 mb-3'}>
            <h3 className={'text-center mb-5'}><span>{translate('press_releases')}</span></h3>
            <Row>
                {press?.map(press => (
                    <Col key={press.slug} md={4} className={'mb-3'}>
                        <Card className={'h-100'}>
                            <Card.Img
                                variant="top"
                                src={press.image}
                                alt={press.title}
                            />
                            <Card.Body>
                                <Card.Title>{press.title}</Card.Title>
                                <Card.Text>{press.short_description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <CustomLink
                                    url={`/post/${press.slug}`}
                                    className={'btn btn-more stretched-link'}
                                    content={translate('read_more')}
                                    navlink={false}/>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
                <Col sm={12} className={'text-center mt-3'}>
                    <CustomLink
                        url={'/press-release'}
                        className={'btn btn-all'}
                        content={translate('see_all')}
                        navlink={false}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default withLanguageContext(PressRelease, ['translate']);

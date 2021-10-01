import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import {CustomLink} from "@/components";

const Speech = ({translate, speeches}) => {
    return (
        <Container className={'speech announcement pt-4 pb-5'}>

            <h3 className={'text-center mb-5'}><span>{translate('speeches_and_messages')}</span></h3>
            <Row>
                <Col sm={12}>
                    {speeches?.map(speech => (
                        <Card key={speech.slug} className={'mb-3'}>
                            <div className="card-horizontal">
                                <Card.Img src={speech.image} alt={speech.title}/>
                                <Card.Body>
                                    <Card.Title>{speech.title}</Card.Title>
                                    <Card.Text>{speech.short_description}</Card.Text>
                                    <span>{speech.date}</span>
                                    <div className={'align-self-end text-right'}>
                                        <CustomLink
                                            url={`/post/${speech.slug}`}
                                            className={'btn btn-more stretched-link'}
                                            content={translate('read_more')}
                                            navlink={false}/>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    ))}
                </Col>

                <Col sm={12} className={'text-center mt-3'}>
                    <CustomLink
                        url={'/speeches'}
                        className={'btn btn-all'}
                        content={translate('see_all')}
                        navlink={false}/>
                </Col>
            </Row>
        </Container>
    )
}

export default withLanguageContext(Speech, ['translate']);

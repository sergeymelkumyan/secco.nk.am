import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import withLanguageContext from "@/context/consumers/LanguageConsumer";

const Result = ({translate}) => {
    const noResult = (
        /* no result */
        <h5 className={'text-center py-5'}><span>{translate('no_result')}</span></h5>
    )
    return (
        <Container>
            <h3 className={'text-center py-5'}><span>{translate('search_title')}</span></h3>
            {noResult}
            <Row>
                <Col md={12} className={'mb-3'}>
                    <Card className={'h-100'}>
                        <Card.Body>
                            <Card.Title>
                                Title
                            </Card.Title>
                            <Link to={'/'} className={'stretched-link'}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} className={'mb-3'}>
                    <Card className={'h-100'}>
                        <Card.Body>
                            <Card.Title>
                                Title
                            </Card.Title>
                            <Link to={'/'} className={'stretched-link'}/>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default withLanguageContext(Result, ['translate']);

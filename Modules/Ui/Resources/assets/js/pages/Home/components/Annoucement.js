import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import {CustomLink} from "@/components";

const Announcement = ({translate, announcements}) => {
    return (
        <Container className={'announcement py-4'}>
            <h3 className={'text-center mb-5'}><span>{translate('announcements')}</span></h3>
            <Row>
                <Col sm={12}>
                    {announcements?.map(announcement => (
                        <Card key={announcement.slug} className={'mb-3'}>
                            <div className="card-horizontal">
                                <Card.Img src={announcement.image} alt={announcement.title}/>
                                <Card.Body>
                                    <Card.Title>{announcement.title}</Card.Title>
                                    <Card.Text>{announcement.short_description}</Card.Text>
                                    <span>{announcement.date}</span>
                                    <div className={'align-self-end text-right'}>
                                        <CustomLink
                                            url={`/post/${announcement.slug}`}
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
                        url={'/announcements'}
                        className={'btn btn-all'}
                        content={translate('see_all')}
                        navlink={false}/>
                </Col>
            </Row>
        </Container>
    )
}

export default withLanguageContext(Announcement, ['translate']);

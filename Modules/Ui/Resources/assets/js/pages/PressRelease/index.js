import React from 'react';
import withDataContext from "@/context/consumers/DataConsumer";
import {Page, Loader} from '@/components';
import {CustomLink} from "@/components";
import {Card, Col, Container, Row} from "react-bootstrap";
import withLanguageContext from "../../context/consumers/LanguageConsumer";

const PressRelease = ({translate,posts}) => {
    return posts ?(
        <Page className={'press-release'} head={{title:translate('press_releases') + ' | ' + translate('republic_of_artsakh')}}>
            {
                <Container>
                    <h3 className={'text-center py-5'}><span>{translate('press_releases')}</span></h3>
                    <Row>
                        {posts.map(post => (
                            <Col md={4} className={'mb-3'} key={post.slug}>
                                <Card className={'h-100'}>
                                    <Card.Img variant="top" src={post.image}/>
                                    <Card.Body>
                                        <Card.Title>
                                            {post.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {post.short_description}
                                        </Card.Text>
                                        <CustomLink url={`/post/${post.slug}`} className={'stretched-link'}
                                                    navlink={false}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                }
        </Page>
    ): <Loader/>
}
export default withLanguageContext(withDataContext(PressRelease, ['posts']),['translate']);

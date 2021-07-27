import React, {useEffect} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import withDataContext from "@/context/consumers/DataConsumer";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import {Page, CustomLink} from '@/components';
import Loader from "@/components/Loader";

const Member = ({members, translate}) => {


    return members? (
        <Page className={'member'}
              head={{title: translate('members_of_the_SC') + ' | ' + translate('republic_of_artsakh')}}>
            <Container>
                <h3 className={'text-center py-5'}><span>{translate('members_of_the_SC')}</span></h3>
                <Row>
                    <Container>
                        <Row>
                            {members.map((member, key) => (
                                <Col key={key} md={4} className={'mb-3'}>
                                    <Card className={'h-100'}>
                                        <Card.Img variant="top" src={member.image} alt={member.title}/>
                                        <Card.Body>
                                            <Card.Title>{member.full_name}</Card.Title>
                                            <Card.Text>{member.title}</Card.Text>
                                            <CustomLink
                                                url={`/member/${member.slug}`}
                                                className={'stretched-link'}
                                                navlink={false}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Row>
            </Container>
        </Page>
    ) : <Loader/>
}
export default withLanguageContext(withDataContext(Member, ['members']), ['translate']);

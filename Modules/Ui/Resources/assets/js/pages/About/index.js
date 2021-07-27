import React from 'react';
import {Page} from '@/components';
import {Col, Container, Row} from "react-bootstrap";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import withDataContext from "@/context/consumers/DataConsumer";
import Loader from "../../components/Loader";


const About = ({data, translate}) => {
    return data ? (
        <Page className={'about'} head={{title: translate('about_the_office_of_the_sc') + ' | ' + translate('office_security_council')}}>
            <Container className={'py-5'}>
                <h3 className={'text-center mb-5 title'}><span>{data.title}</span></h3>
                <Row>
                    <Col>
                        <div dangerouslySetInnerHTML={{__html: data.description}}/>
                    </Col>
                </Row>
            </Container>
        </Page>
    ) : <Loader/>
}
export default withLanguageContext(withDataContext(About, ['data']), ['translate']);

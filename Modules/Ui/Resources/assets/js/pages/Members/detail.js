import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import withDataContext from "../../context/consumers/DataConsumer";
import {Page} from '@/components';
import Loader from "@/components/Loader";

const MemberDetail = ({getPage, member}) => {
    const {slug} = useParams();

    useEffect(() => {
        getPage(`member/${slug}`)
    }, [slug]);

    return member ? (
        <Page className={'member-detail'} head={{title: member.title}}>
            <Container className={'py-5'}>
                <h3 className={'text-center mb-5 title'}>{member.title}</h3>
                <Row>
                    <Col sm={12}>
                        <img src={member.image} className={'w-50 float-left mr-3 mb-2'} alt="name"/>
                        <h4>{member.full_name}</h4>
                        <div className={'text-justify description'} dangerouslySetInnerHTML={{__html: member.bio}}/>
                    </Col>
                </Row>
            </Container>
        </Page>
    ) : <Loader/>
}

export default withDataContext(MemberDetail, ['getPage', 'member']);

import React from 'react';
import {Page} from '@/components';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FaFileDownload} from "react-icons/fa/index";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import withDataContext from "@/context/consumers/DataConsumer";
import Loader from "@/components/Loader";

const Docs = ({documents,translate}) => {
    console.log(documents)

    return documents ?  (
        <Page className={'documents'} head={{title:translate('sc_foundamental_documents') + ' | ' + translate('republic_of_artsakh')}}>
            <Container className={'docs'}>
                <h3 className={'text-center py-5'}><span>{translate('sc_foundamental_documents')}</span></h3>
                <Row>
                    {documents.map((document, key) => (
                    <Col sm={12} key={key}>
                        <Card className={'mb-3'}>
                            <div className="card-horizontal">
                                <Card.Body>
                                    <Card.Title>
                                        {document.title}
                                        <a href={document.file} className={'btn btn-more float-right'} download><FaFileDownload/></a>
                                    </Card.Title>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </Page>
    ): <Loader/>
}
export default withLanguageContext(withDataContext(Docs, ['documents']), ['translate']);

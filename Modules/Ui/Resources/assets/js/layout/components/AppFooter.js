import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import withLanguageContext from "@/context/consumers/LanguageConsumer";

const AppFooter = ( { translate } ) => {
    return (
        <Container fluid className={ 'footer text-center py-2' }>
            <Row>
                <Col md={ 4 }>
                    <img src={ "/images/logo.png" } className={ 'footer-logo d-block mx-auto' } alt="footer logo"/>
                    <Link to={ '/' } className={ 'stretched-link' }/>
                </Col>
                <Col md={ 4 }>
                    <h3>{ translate( 'republic_of_artsakh' ) }</h3>
                    <h4>{ translate( 'office_security_council' ) }</h4>
                    <p>{ translate( 'office_address' ) }</p>
                </Col>
                <Col md={ 4 }>
                    <h4>{ translate( 'contact' ) }</h4>
                    <Row>
                        <Col md={ 6 }>
                            {/*<h5>{ translate( 'contact1' ) }</h5>*/ }
                            <h5>Քարտուղարություն</h5>
                            <p><a className={ 'text-white' }
                                  href="mailto:secretariat@secco.nk.am">secretariat@secco.nk.am</a>
                            </p>
                            <p><a className={ 'text-white' } href="tel:+374974464">+374 97 44 64</a></p>
                        </Col>
                        <Col md={ 6 }>
                            <h5>{ translate( 'contact2' ) }</h5>
                            <p><a className={ 'text-white' } href="mailto:press@secco.nk.am">press@secco.nk.am</a></p>
                            <p><a className={ 'text-white' } href="tel:+374974454">+374 97 44 54</a></p>
                        </Col>
                    </Row>
                </Col>
                <Col md={ 12 } className={ 'mt-2' }>
                    <p className={ 'text-center copyright' }>&copy; { translate( 'copyright' ) }</p>
                </Col>
            </Row>
        </Container>
    )
}

export default withLanguageContext( AppFooter, [ 'translate' ] );

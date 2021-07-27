import React from "react";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import withLanguageContext from "@/context/consumers/LanguageConsumer";
import {settings} from './settings'
import {CustomLink} from "@/components";

const MainNews = ({translate, sliders}) => {
    return (
        <Container>
            <Row>
                <div className={'main-carousel w-100'}>
                    <Slider {...settings}>
                        {
                            sliders?.map(slider => (
                                <div key={slider.slug}>
                                    <Row className={'h-100'}>
                                        <Col
                                            md={6}
                                            className={'backgrounded'}
                                            style={{backgroundImage: `url(${slider.image})`}}
                                        />
                                        <Col
                                            md={6}
                                            className={'my-5 text-col pl-5 align-self-center'}>
                                            <h5 className={'slide-title'}>{slider.title} <span
                                                className={'float-right'}><i>{slider.date}</i></span></h5>
                                            <p className={'slide-text'}>{slider.short_description}</p>
                                            <CustomLink url={`/post/${slider.slug}`} className={'btn btn-more'}
                                                        content={translate('read_more')}
                                                        navlink={false}/>
                                        </Col>
                                    </Row>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Row>
        </Container>
    )
}

export default withLanguageContext(MainNews, ['translate']);

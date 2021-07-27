import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import withDataContext from "@/context/consumers/DataConsumer";
import { Page, Loader } from '@/components';
import { Col, Container, Row } from "react-bootstrap";
import { StickyShareButtons } from "sharethis-reactjs";
import { shareConfig } from './config'
import CustomLink from "@/components/CustomLink";


const Post = ( { getPage, post, others } ) => {
    const { slug } = useParams();


    useEffect( () => {
        getPage( `post/${ slug }` );
    }, [ slug ] );


    return post ? (
        <Page
            className={ 'post' }
            head={ {
                "title": post.title,
                meta: {
                    "og:title": post.title,
                    "og:image": "http://secco.nk.am" + post.image,
                    "og:description": post.short_description,
                    "og:url": "http://secco.nk.am/hy/post/" + post.slug,
                    "og:type": "article",
                }

            } }>
            {/*<StickyShareButtons
                config={{
                    ...shareConfig,
                    // OPTIONAL PARAMETERS
                    image: "https://secco.nkr.am"+post.image,
                    description: post.short_description,
                    title: post.title,
                    message: post.description,
                    subject: post.title,
                }}
            />*/ }
            <Container className={ 'py-5' }>
                <h3 className={ 'text-center mb-5 title' }>{ post.title }</h3>
                <Row>
                    <Col sm={ 8 }>
                        <img src={ post.image } className={ 'w-100 mb-2' }
                             alt={ post.image ? post.image : post.title }/>
                        <p className={ 'date' }>{ post.date }</p>
                        <div className={ 'text-justify description' }
                             dangerouslySetInnerHTML={ { __html: post.description } }/>
                    </Col>
                    <Col md={ 4 }>
                        {
                            others?.map( ( other, key ) => (
                                <Row key={ key } className={ 'mb-3' }>
                                    <Col md={ 5 }>
                                        <CustomLink url={ `/post/${ other.slug }` } navlink={ false }
                                                    content={ <img src={ other.image } className={ 'w-100' }
                                                                   alt="other"/> }/>

                                    </Col>
                                    <Col md={ 7 }>
                                        <h6>
                                            <CustomLink url={ `/post/${ other.slug }` }
                                                        className={ 'text-dark stretched-link' } navlink={ false }
                                                        content={ other.title }/>
                                        </h6>
                                        <p>{ other.date }</p>
                                    </Col>
                                </Row>
                            ) )
                        }
                    </Col>
                </Row>
            </Container>
        </Page>
    ) : <Loader/>
}
export default withDataContext( Post, [ 'getPage', 'post', 'others' ] );

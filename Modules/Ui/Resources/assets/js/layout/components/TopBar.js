import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LanguageSwitcher } from '@/components';
import { FaSearch } from "react-icons/fa";
import withLanguageContext from "@/context/consumers/LanguageConsumer";

const TopBar = ( { translate } ) => {
    return (
        <Navbar expand="xl" className={ 'topbar py-0' }>
            <Navbar.Toggle aria-controls="topbar"/>
            <Navbar.Collapse id="topbar">
                <Nav className="mr-auto social">
                    {/*  <a className={'nav-link'} target={'_blank'} href="https://www.facebook.com/%D4%B1%D5%80-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6-%D5%AD%D5%B8%D6%80%D5%B0%D6%80%D5%A4%D5%AB-%D5%A3%D6%80%D5%A1%D5%BD%D5%A5%D5%B6%D5%B5%D5%A1%D5%AFThe-Office-of-the-Security-Council-of-RA-115473333587949"><FaFacebook fill={'white'}/></a>
                    <a target={'_blank'} href={'https://twitter.com/secco_artsakh'} className={'nav-link'}><FaTwitter fill={'white'}/></a>
                    <a target={'_blank'} href={'https://www.youtube.com/channel/UCVQw8wS80L6p4FmoiTH_3PA'} className={'nav-link'}><FaYoutube fill={'white'}/></a>*/ }
                </Nav>
                {/*<Nav className="ml-auto mr-3">*/ }
                <LanguageSwitcher/>
                {/*</Nav>*/ }
                <Form inline className={ 'position-relative' }>
                    <FormControl type="text" placeholder={ translate( 'Search' ) }/>
                    <Button variant="outline-none" className={ 'position-absolute search-button' }><FaSearch/></Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withLanguageContext( TopBar, [ 'translate' ] );

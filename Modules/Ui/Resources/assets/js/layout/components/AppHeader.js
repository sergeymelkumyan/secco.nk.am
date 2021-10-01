import React, {useState, useEffect} from 'react';
import {Container, Form, Button, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {CustomLink, LanguageSwitcher} from '@/components';
import {FaSearch} from "react-icons/fa";
import withDataContext from "@/context/consumers/DataConsumer";
import withLanguageContext from "@/context/consumers/LanguageConsumer";

const AppHeader = ({translate}) => {
    const [scrolled, setScrolled] = useState('');
    const [logo, setLogo] = useState('logo.png');
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = (e) => {
        setShow(false);
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled('sticky-top');
            setLogo('logo.png');
        } else {
            setScrolled('');
            setLogo('logo.png');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[])

    return (
        <Navbar expand="xl" className={'main-menu bg-white ' + scrolled} collapseOnSelect={true}>
            <NavLink to={'/'} className={'navbar-brand'}>
                <img src={"/images/" + logo} alt="logo" className={'logo'}/>
            </NavLink>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" onClick={e => e.preventDefault()} role={'button'} id="firstMenu"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {translate('security_council')}
                        </a>
                        <div className="dropdown-menu mt-0" aria-labelledby="firstMenu">
                            <CustomLink url={'/members'} className={'dropdown-item'}
                                        content={translate('members_of_the_SC')}
                                        navlink={true}/>
                            <CustomLink url={'/member/security-council-secretary-of-the-republic-of-artsakh'} className={'dropdown-item'}
                                        content={translate('sc_secretar')}
                                        navlink={true}/>
                            <CustomLink url={'/sessions'} className={'dropdown-item'} content={translate('sc_sessions')}
                                        navlink={true}/>
                            <CustomLink url={'/documents'} className={'dropdown-item'}
                                        content={translate('sc_foundamental_documents')}
                                        navlink={true}/>
                            <CustomLink url={'/history'} className={'dropdown-item'} content={translate('sc_history')}
                                        navlink={true}/>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" onClick={e => e.preventDefault()} role={'button'} id="secondMenu"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {translate('the_office_of_the_security_council')}
                        </a>
                        <div className="dropdown-menu mt-0" aria-labelledby="secondMenu">
                            <CustomLink url={'/about'} className={'dropdown-item'}
                                        content={translate('about_the_office_of_the_sc')}
                                        navlink={true}/>
                            <CustomLink url={'/member/arcakhi-hanrapetvouthyan-anvtangvouthyan-khvorhrdi-grasenyaki-ghekavar'} className={'dropdown-item'}
                                        content={translate('the_office_of_the_sc')}
                                        navlink={true}/>
                        </div>
                    </div>
                    <div className="nav-item dropdown right-drop">
                        <a className="nav-link dropdown-toggle" href="#" onClick={e => e.preventDefault()} role={'button'} id="thirdMenu"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {translate('Information')}
                        </a>
                        <div className="dropdown-menu mt-0" aria-labelledby="thirdMenu">
                            <CustomLink url={'/press-release'} className={'dropdown-item'}
                                        content={translate('press_releases')}
                                        navlink={true}/>
                            <CustomLink url={'/announcements'} className={'dropdown-item'}
                                        content={translate('announcements')}
                                        navlink={true}/>
                            <CustomLink url={'/speeches'} className={'dropdown-item'}
                                        content={translate('speeches_and_messages')}
                                        navlink={true}/>
                            <div className="submenu submenu-left dropdown nav-item">
                                <a aria-haspopup="true" aria-expanded="false" href="#" onClick={e => e.preventDefault()}
                                   className="dropdown-toggle dropdown-item p-0"
                                   role="button" id={'fourthMenu'}>{translate('Multimedia')}</a>
                                <div className="dropdown-menu" aria-labelledby="fourthMenu">
                                    <CustomLink url={'/videos'} className={'dropdown-item'}
                                                content={translate('Videos')}
                                                navlink={true}/>
                                    <CustomLink url={'/photos'} className={'dropdown-item'}
                                                content={translate('Photos')}
                                                navlink={true}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <LanguageSwitcher/>
                    <Form inline className={'position-relative'}>
                        <FormControl type="text" placeholder={translate('Search')} className=""/>
                        <Button variant="outline-none"
                                className={'position-absolute search-button'}><FaSearch/></Button>
                    </Form>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default withDataContext(withLanguageContext(AppHeader, ['translate']));

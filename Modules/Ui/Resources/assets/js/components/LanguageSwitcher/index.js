import React, {memo as Memo, useMemo} from 'react'
import {NavLink} from "react-router-dom";
import withLanguageContext from '../../context/consumers/LanguageConsumer';
import {withRouter} from 'react-router-dom';
import {Nav} from "react-bootstrap";


const LanguageSwitcher = Memo(({selectedLang, languages, cont, ...props}) => {
    const langs = useMemo(() => {
        return Object.keys(languages).map((lang, k) => {
            return (
                <NavLink key={k} onClick={props.onClick}
                         className={'nav-link'}
                         to={
                             props.location.pathname.indexOf(selectedLang) != -1 ?
                                 props.location.pathname.replace(selectedLang, lang) :
                                 `/${lang + props.location.pathname}`
                         }>
                    {/*<img src={languages[lang].params.flag} alt={languages[lang].params.code} height={25} width={30}/>*/}
                    {languages[lang].params.name}
                </NavLink>
            )
        })
    }, [selectedLang, languages, props.location.pathname]);

    return (
        // <div title={selectedLang} id="nav-dropdown" className={'p-0'}>
            <Nav title={selectedLang} className="ml-auto mr-3 language">
                {langs}
            </Nav>

        // </div>
    )
})

export default withRouter(withLanguageContext(LanguageSwitcher, ['selectedLang', 'languages']));

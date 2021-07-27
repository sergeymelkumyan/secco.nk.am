import React, {useImperativeHandle, useRef} from 'react';
import withLanguageContext from '../../context/consumers/LanguageConsumer';
import {Link,NavLink} from 'react-router-dom';


const CustomLink = React.forwardRef(({selectedLang, ...props}, ref) => {
    const prodRef = useRef();
    useImperativeHandle(ref, () => ({
        prodRefAll: prodRef
    }))

    return (
        props.navLink ? (
                <NavLink ref={prodRef} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onClick}
                      to={getMatchRoute(selectedLang, props.url)} className={props.className}>
                    {props.content}
                </NavLink>
            ) :
            <Link ref={prodRef} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onClick}
                  to={getMatchRoute(selectedLang, props.url)} className={props.className}>
                {props.content}
            </Link>
    );

    function getMatchRoute(language, routeKey) {
        return '/' + language + routeKey
    }

})

export default withLanguageContext(CustomLink, ['selectedLang']);

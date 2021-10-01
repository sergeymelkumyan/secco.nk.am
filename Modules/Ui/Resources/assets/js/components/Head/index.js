import React, {memo as Memo, useMemo} from 'react';
import {Helmet} from 'react-helmet';
import {withRouter} from 'react-router-dom'

const Head = Memo(props => {

    const metas = useMemo(() => {
        return props.meta && Object.entries(props.meta).map((m, k) => {
            return (
                <meta key={k} property={m[0]} content={m[1]} />
            )
        })
    }, [props.meta])

    return (
        <Helmet>
            <title>{props.title}</title>
            <link rel="canonical" href={window.location.href}/>
            <meta name="description" content={props.title || 'Rubicon'}/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="apple-mobile-web-app-title" content="Rubicon"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            {metas}
        </Helmet>
    )
})

export default withRouter(Head);

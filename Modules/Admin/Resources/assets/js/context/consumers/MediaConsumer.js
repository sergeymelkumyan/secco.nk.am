import React, {forwardRef} from 'react';
import {MediaConsumer} from "../providers/MediaProvider";
import {getContext} from '../../utils';

export default function withMediaContext(ConnectedComponent, properties = []) {
    return forwardRef((props, ref) => {
        return (
            <MediaConsumer>
                {context => {
                    let contextProps = properties.length ? getContext(context, properties) : {}
                    return <ConnectedComponent {...contextProps} {...props} ref={ref}/>
                }}
            </MediaConsumer>
        )
    });
}

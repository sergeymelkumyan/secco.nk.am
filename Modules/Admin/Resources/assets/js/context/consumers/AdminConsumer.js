import React, {forwardRef} from 'react';
import {AccountConsumer} from "../providers/AdminProvider";
import {getContext} from '../../utils';

export default function withAdminContext(ConnectedComponent, properties = []) {
    return forwardRef((props, ref) => {
        return (
            <AccountConsumer>
                {context => {
                    let contextProps = properties.length ? getContext(context, properties) : {}
                    return <ConnectedComponent {...contextProps} {...props} ref={ref}/>
                }}
            </AccountConsumer>
        )
    })
};

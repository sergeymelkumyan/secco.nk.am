import React from 'react';
import {LanguageConsumer} from '../providers/LanguageProvider';
import {getContext} from "../../utils";

export default function withLanguageContext(ConnectedComponent, properties = []) {
    return props => {
        return (
            <LanguageConsumer>
                {context => {
                    let contextProps = properties.length ? getContext(context, properties) : {};

                    return (
                        <ConnectedComponent {...contextProps} {...props} />
                    );
                }}
            </LanguageConsumer>
        )
    }

}

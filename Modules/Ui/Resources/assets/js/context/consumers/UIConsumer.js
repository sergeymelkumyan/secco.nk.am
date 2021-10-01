import React, {forwardRef} from "react";
import {UIConsumer} from "../providers/UIProvider";
import {getContext} from "../../utils";

export default function withUIContext(ConnectedComponent, properties = []) {
    return forwardRef((props, ref) => {
        return (
            <UIConsumer>
                {context => {
                    let contextProps = properties.length ? getContext(context, properties) : {};

                    return (
                        <ConnectedComponent {...contextProps} {...props} ref={ref}/>
                    );
                }}
            </UIConsumer>
        );
    });
}

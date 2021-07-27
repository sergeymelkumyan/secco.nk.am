import React, {memo as Memo, Fragment, useMemo} from "react";
import Head from '../Head'

const Page = Memo(props => {
    const head = useMemo(() => <Head {...props.head} />, [props.head]);

    return (
        <Fragment>
            {head}
            <main className={props.className}>
                {props.children}
            </main>
        </Fragment>
    )
});

export default Page;

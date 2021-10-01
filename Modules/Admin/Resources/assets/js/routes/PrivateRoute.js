import React, {memo as Memo} from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAdminContext from "@/context/consumers/AdminConsumer";
import {Loader} from "@/components";

const PrivateRoute = Memo(({component: Component, ...props}) => {
    return (
        <Route
            {...props}
            render={innerProps =>
                props.isLoggedIn ? <Component {...innerProps}/> :
                    props.isLoggedIn === false ? <Redirect to={'/admin/login'}/> : <Loader/>}/>
    )
});


export default withAdminContext(PrivateRoute, ['isLoggedIn']);

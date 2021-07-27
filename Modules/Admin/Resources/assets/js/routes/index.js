import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";

import {Loader} from "../components";
import PrivateRoute from "./PrivateRoute";


import AppLayout from '@/layout';

import {
    Dashboard, NotFound, Login, Forgot, Reset, MediaManager, Directory, Account
} from '@/pages';

import {
    Posts, PostsCreate, PostsEdit,
    Members, MembersCreate, MembersEdit,
    Galleries, GalleriesCreate, GalleriesEdit,
    Documents, DocumentsCreate, DocumentsEdit,
    About, History
} from '../resources'


const Routes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Switch>
                <Route path={'/admin/login'} component={Login}/>
                <Route path={'/admin/forgot-password'} component={Forgot}/>
                <Route path={'/admin/reset-password'} component={Reset}/>
                <AppLayout>
                    <PrivateRoute exact path="/admin" component={Dashboard}/>
                    <PrivateRoute path={"/admin/media-managers"} component={MediaManager}/>
                    <PrivateRoute path={"/admin/media-manager/:directory"} component={Directory}/>
                    <PrivateRoute path={'/admin/account'} component={Account}/>

                    <PrivateRoute exact path={"/admin/posts"} component={Posts}/>
                    <PrivateRoute exact path={"/admin/posts/create"} component={PostsCreate}/>
                    <PrivateRoute exact path={"/admin/posts/edit/:id"} component={PostsEdit}/>

                    <PrivateRoute exact path={"/admin/members"} component={Members}/>
                    <PrivateRoute exact path={"/admin/members/create"} component={MembersCreate}/>
                    <PrivateRoute exact path={"/admin/members/edit/:id"} component={MembersEdit}/>

                    <PrivateRoute exact path={"/admin/galleries"} component={Galleries}/>
                    <PrivateRoute exact path={"/admin/galleries/create"} component={GalleriesCreate}/>
                    <PrivateRoute exact path={"/admin/galleries/edit/:id"} component={GalleriesEdit}/>

                    <PrivateRoute exact path={"/admin/documents"} component={Documents}/>
                    <PrivateRoute exact path={"/admin/documents/create"} component={DocumentsCreate}/>
                    <PrivateRoute exact path={"/admin/documents/edit/:id"} component={DocumentsEdit}/>

                    <PrivateRoute path={"/admin/about"} component={About}/>
                    <PrivateRoute path={"/admin/history"} component={History}/>
                </AppLayout>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Suspense>
    )
}

export default withRouter(Routes);

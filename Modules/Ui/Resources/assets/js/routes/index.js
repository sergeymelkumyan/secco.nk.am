import React, {memo as Memo, Suspense, lazy, useMemo, useEffect} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';


import withLanguageContext from "@/context/consumers/LanguageConsumer";
import {withLastLocation} from 'react-router-last-location';

import {config, scrollTo} from '@/utils';
import {Loader} from "@/components";

const Home = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Home'));
const Members = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Members'));
const MemberDetail = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Members/detail'));
const About = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/About'));
const History = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/History'));
const PressRelease = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/PressRelease'));
const Announcements = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Announcements'));
const Speeches = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Speeches'));
const Sessions = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Sessions'));
const Gallery = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Gallery'));
const GalleyDetail = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Gallery/detail'));
const Video = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Video'));
const Search = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Search'));
const Post = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Post'));
const Docs = lazy(() => import(/* webpackChunkName: "js/ui-routes" */'@/pages/Docs'));


const Routes = Memo(props => {

    const mainComponents = {
        Home,
        Members,
        MemberDetail,
        About,
        History,
        PressRelease,
        Announcements,
        Speeches,
        Sessions,
        Gallery,
        GalleyDetail,
        Video,
        Search,
        Post,
        Docs
    }

    useEffect(() => {
        scrollTo(0, 400);
    }, [props.location.pathname])

    const createRoutes = useMemo(() => {
        return Object.values(config.routes.default).map((route, k) => {
            let Comp = mainComponents[route.component];

            return (
                <Route exact path={props.match.path + route.path}
                       component={compProps => <Comp {...compProps} config={config.routes.default}
                                                     selectedLang={props.selectedLang}/>} key={k}/>
            )
        })
    }, [props.match.path, props.selectedLang]);

    return (
        <Suspense fallback={<Loader/>}>
            <Switch>
                {createRoutes}
                <Redirect from='*' to='/'/>
            </Switch>
        </Suspense>
    )
})

export default withLanguageContext(withRouter(withLastLocation(Routes)), ['languages', 'selectedLang', 'selectLanguage']);


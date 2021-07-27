import React, {Fragment} from 'react';

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import TopBar from "./components/TopBar";
import Routes from "../routes";

const Main = () => {
    return (
        <Fragment>
            <TopBar/>
            <AppHeader/>
            <Routes/>
            <AppFooter/>
        </Fragment>
    )
}

export default Main;

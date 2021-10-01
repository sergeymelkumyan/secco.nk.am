import React from "react";
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LanguageProvider from "./context/providers/LanguageProvider";
import UIProvider from "./context/providers/UIProvider";
import DataProvider from "./context/providers/DataProvider";
import AppLayout from "./layout";
import languages from './translations';


render(
    <Router>
        <Route path={`/:locale(${_.join(Object.keys(languages), '|')}|)?`} render={() => (
            <LanguageProvider>
                <UIProvider>
                    <DataProvider>
                        <AppLayout/>
                    </DataProvider>
                </UIProvider>
            </LanguageProvider>
        )}/>
    </Router>,
    document.getElementById('app')
);

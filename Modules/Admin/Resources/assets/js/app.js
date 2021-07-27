import React from "react";
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConfigProvider} from "antd";
import AdminProvider from "./context/providers/AdminProvider";
import DataProvider from "./context/providers/DataProvider";
import MediaProvider from "./context/providers/MediaProvider";
import Routes from "./routes";

render(
    <Router>
        <ConfigProvider>
            <AdminProvider>
                <DataProvider>
                    <MediaProvider>
                        <Routes/>
                    </MediaProvider>
                </DataProvider>
            </AdminProvider>
        </ConfigProvider>
    </Router>,
    document.getElementById('admin')
);


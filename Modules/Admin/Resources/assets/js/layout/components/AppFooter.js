import React from "react";
import {Layout} from "antd";
import {config} from '@/utils';

const {Footer} = Layout;

const AppFooter = () => {
    return (
        <Footer>
            {config.copyright}
        </Footer>
    )
};

export default AppFooter

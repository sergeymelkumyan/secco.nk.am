import React, {useEffect} from 'react';
import {FolderOutlined} from '@ant-design/icons';
import withMediaContext from "@/context/consumers/MediaConsumer";
import {Page} from "@/components";
import {Link} from "react-router-dom";
import {Row, Col, Card} from "antd";

const {Meta} = Card;

const MediaManager = ({directories, getDirectories}) => {

    useEffect(() => {
        getDirectories();
    }, []);
    console.log(directories)
    return (
        <Page title={'Media Manager'} className={'media-manager'}>
            <Row gutter={[20, 20]}>
                {
                    Object.values(directories).map((directory, key) => (
                        <Col key={key} md={6}>
                            <Link to={'/admin/media-manager/' + directory}>
                                <Card
                                    hoverable
                                    className={'folder'}
                                    // style={{ width: 240 }}
                                    cover={<FolderOutlined/>}
                                >
                                    <Meta title={directory}/>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </Page>
    )
}

export default withMediaContext(MediaManager, ['directories', 'getDirectories']);

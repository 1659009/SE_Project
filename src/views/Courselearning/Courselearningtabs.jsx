
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs, Radio } from 'antd';
import { Grid, Container, Button } from '@material-ui/core';
import './style.css';
import { Api } from 'constants/api';
let id;

const { TabPane } = Tabs;

export default class Courselearningtabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };

    render() {
        const { mode } = this.state;
        // const { content } = props;
        return (
            <div>
                <Tabs className="tabSection" defaultActiveKey="1" tabPosition={mode} style={{ height: '70vh' }}>
                    <TabPane tab="Overview" key={1}>
                        <Container>
                            <div className="text-center overview" >
                                <iframe width="80%" height="500px" src="https://www.youtube.com/embed/kkmmDJD7QAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Container>
                    </TabPane>
                    <TabPane tab="Week 1" key={2}>
                        Hi world
                    </TabPane>
                    <TabPane tab="Week 2" key={3}>
                        Guten tag
                    </TabPane>
                    <TabPane tab="Week 3" key={4}>
                        Guten tag
                    </TabPane>
                    <TabPane tab="Week 4" key={5}>
                        Guten tag
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}



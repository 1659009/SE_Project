
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Tabs, Radio } from 'antd';
import { AccountDetails, AccountProfile } from 'views/Account/components';
import { Grid } from '@material-ui/core';

const { TabPane } = Tabs;

export default class SlidingTabsDemo extends React.Component {
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
        return (
            <div>
                <Tabs className="tabSection" defaultActiveKey="1" tabPosition={mode} style={{ height: '70vh' }}>
                    <TabPane tab="Profile" key={1}>
                        <Grid
                            container
                            spacing={4}
                            style={{ height: '70vh', padding: '50px 100px' }}>
                            <Grid item lg={4} md={6} xl={4} xs={12}>
                                <AccountProfile />
                            </Grid>
                            <Grid item lg={8} md={6} xl={8} xs={12}>
                                <AccountDetails />
                            </Grid>
                        </Grid>
                    </TabPane>
                    <TabPane tab="Enrolled" key={2}>
                        Content of tab 2
                    </TabPane>
                    <TabPane tab="Saved" key={3}>
                        Content of tab 3
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}



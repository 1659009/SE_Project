import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

class AccountTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
        };
    }



    render() {
        const classes = useStyles();

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Fab color="secondary" aria-label="edit" className={classes.fab}>
                            <Icon>edit_icon</Icon>
                        </Fab>
                        <Divider type="vertical" />
                        <a href="javascript:;">Delete</a>
                    </span>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        return (
            <Table
                style={{ boxShadow: "1px 0px 9px 0px rgba(122,110,122,1)" }}
                dataSource={data}
                columns={columns} />
        );
    }
}

export default (AccountTable);
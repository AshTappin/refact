import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: any) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
    },
});

const App = (props: any) => {
    const {classes} = props;
    return (
        <div className="App">
            <Paper className={classes.root} elevation={1}>
                <div className='heading'>
                    <h1>Refact</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>

                <p>Test your react knowledge!</p>

                <Button>Take Test</Button>

            </Paper>


        </div>
    );
};


export default withStyles(styles)(App);

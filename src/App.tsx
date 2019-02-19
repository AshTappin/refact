import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Question from './components/Question/Question';
import NotFound from './components/NotFound/NotFound';
import logo from './logo.svg';
import {Paper} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import FinalScore from './components/FinalScore/FinalScore';
import QuizProgress from './components/QuizProgress/QuizProgress';
import {inject} from 'mobx-react';

const styles = (theme: any) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 600
    },
});

const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Paper className={props.classes.root} elevation={1}>
                    <div className='heading'>
                        <h1>Refact</h1>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <QuizProgress/>
                    </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/question' component={Question}/>
                    <Route exact path='/finalScore' component={FinalScore}/>
                    <NotFound/>
                </Switch>
                </Paper>
            </div>
        </BrowserRouter>
    );
};


export default withStyles(styles)(App);

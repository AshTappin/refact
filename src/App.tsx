import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Question from './components/Question/Question';
import NotFound from './components/NotFound/NotFound';
import logo from './logo.svg';
import {Paper} from '@material-ui/core';
import FinalScore from './components/FinalScore/FinalScore';
import QuizProgress from './components/QuizProgress/QuizProgress';
import {useStyles} from "./Paper/Paper.styles";

const App = () => {

    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className="App">
                <Paper className={classes.root} elevation={1}>
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


export default App;

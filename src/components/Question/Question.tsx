import * as React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './Question.css';
import { RouterProps, withRouter } from 'react-router';

const Question = (props: RouterProps) => {

    const [checkedAnswer, setCheckedAnswer] = useState('');
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const answers = ['state', 'props', 'history', 'none of the above'];

    return (
        <div className='Question'>
            <div className='QuestionText'>What can you use to pass data into a component?</div>
            <List className='AnswerChoices'>
                {answers.map((answer) => (
                    <ListItem className='AnswerChoice RightAnswer' button onClick={() => {
                        setCheckedAnswer(answer);
                    }}>
                        <ListItemText primary={answer}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                onChange={() => {
                                    setCheckedAnswer(answer);
                                }}
                                checked={checkedAnswer === answer}/>
                        </ListItemSecondaryAction>
                    </ListItem>))}
            </List>

            <div className='QuestionFooter'>
                {questionAnsweredCorrectly && <div className='Success'>Correct!</div>}
                <Button
                    style={{marginLeft: 'auto'}}
                    className='SubmitAnswerButton'
                    variant='contained'
                    color='primary'
                    onClick={questionAnswered ? () => props.history.push('/finalScore') : () => {
                        setQuestionAnswered(true);
                        setQuestionAnsweredCorrectly(true);
                    }}
                >{questionAnswered ? 'Next Question' : 'Submit Answer'}</Button>
            </div>

        </div>
    );
};

export default withRouter(Question);
  
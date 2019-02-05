import * as React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './Question.css';
import { RouterProps, withRouter } from 'react-router';
import { Answer } from '../../Interfaces/Answer';

const Question = (props: RouterProps) => {

    const [checkedAnswer, setCheckedAnswer] = useState({} as Answer);
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const answers = [
        {name: 'state'}, {name: 'props', isCorrect: true}, {name: 'history'}, {name: 'none of the above'}] as Answer[];

    return (
        <div className='Question'>
            <div className='QuestionText'>What can you use to pass data into a component?</div>
            <List className='AnswerChoices'>
                {answers.map((answer) => (
                    <ListItem className='AnswerChoice RightAnswer' button onClick={() => {
                        setCheckedAnswer(answer);
                    }}>
                        <ListItemText primary={answer.name}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                onChange={() => {
                                    setCheckedAnswer(answer);
                                }}
                                checked={checkedAnswer.name === answer.name}/>
                        </ListItemSecondaryAction>
                    </ListItem>))}
            </List>

            <div className='QuestionFooter'>
                {questionAnsweredCorrectly && <div className='Success Notification'>Correct! <i className="material-icons">check_circle</i></div>}
                {(questionAnswered && !questionAnsweredCorrectly) && <div className='Incorrect Notification'>Incorrect! <i className="material-icons">cancel</i></div>}
                <Button
                    className='SubmitAnswerButton'
                    variant='contained'
                    color='primary'
                    onClick={questionAnswered ? () => props.history.push('/finalScore') : () => {

                        setQuestionAnswered(true);
                        setQuestionAnsweredCorrectly(checkedAnswer.isCorrect);
                    }}
                >{questionAnswered ? 'Next Question' : 'Submit Answer'}</Button>
            </div>

        </div>
    );
};

export default withRouter(Question);
  
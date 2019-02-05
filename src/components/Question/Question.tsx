import * as React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './Question.css';
import { RouteComponentProps, withRouter } from 'react-router';
import { Answer } from '../../Interfaces/Answer';
import { inject, Observer } from 'mobx-react';
import { QuizStore } from '../../Stores/QuizStore';


interface QuestionProps extends RouteComponentProps {
    quizStore: QuizStore
}

const Question = (props: QuestionProps) => {

    const [checkedAnswer, setCheckedAnswer] = useState({} as Answer);
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const answers = [
        {name: 'state'}, {name: 'props', isCorrect: true}, {name: 'history'}, {name: 'none of the above'}] as Answer[];

    return (

        <Observer>{() =>
            <div className='Question'>
                <div className='QuestionText'>What can you use to pass data into a component?</div>
                <List className='AnswerChoices'>
                    {answers.map((answer) => (
                        <ListItem key={answer.name} className='AnswerChoice RightAnswer' button disabled={questionAnswered} onClick={() => {
                            setCheckedAnswer(answer);
                        }}>
                            <ListItemText primary={answer.name}/>
                            <ListItemSecondaryAction>
                                <Checkbox
                                    disabled={questionAnswered}
                                    onChange={() => {
                                        setCheckedAnswer(answer);
                                    }}
                                    checked={checkedAnswer.name === answer.name}/>
                            </ListItemSecondaryAction>
                        </ListItem>))}
                </List>

                <div className='QuestionFooter'>
                    {questionAnsweredCorrectly &&
                    <div className='Success Notification'>Correct! <i className="material-icons">check_circle</i></div>}
                    {(questionAnswered && !questionAnsweredCorrectly) &&
                    <div className='Incorrect Notification'>Incorrect! <i className="material-icons">cancel</i></div>}
                    <Button
                        className='SubmitAnswerButton'
                        disabled={Object.keys(checkedAnswer).length === 0}
                        variant='contained'
                        color='primary'
                        onClick={questionAnswered ? () => props.history.push('/finalScore') : () => {

                            setQuestionAnswered(true);
                            setQuestionAnsweredCorrectly(checkedAnswer.isCorrect);

                            if (checkedAnswer.isCorrect) {
                                props.quizStore.incrementNumberOfRightAnswers();
                            }
                        }}
                    >{questionAnswered ? 'Next Question' : 'Submit Answer'}</Button>
                </div>

            </div>}

        </Observer>
    );
};

export default inject("quizStore")(withRouter(Question));
  
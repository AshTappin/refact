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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark, dark } from 'react-syntax-highlighter/dist/styles/prism';

interface QuestionProps extends RouteComponentProps {
    quizStore: QuizStore
}

const Question = (props: QuestionProps) => {

    const [checkedAnswer, setCheckedAnswer] = useState({} as Answer);
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState(false);

    return (
        <Observer>{() => {
            const {quizStore} = props;
            const questionAndAnswers = props.quizStore.getCurrentQuestion();
            const answers = questionAndAnswers.answers;

            return (
                <div className='Question'>
                    {questionAndAnswers.code &&
                    <div>
                        Look at the following code...
                        <SyntaxHighlighter language='jsx' showLineNumbers style={atomDark}>{questionAndAnswers.code}</SyntaxHighlighter>
                    </div>
                    }

                    <div className='QuestionText'>{questionAndAnswers.question}</div>


                    <List className='AnswerChoices'>
                        {answers.map((answer) => (
                            <ListItem key={answer.name} className='AnswerChoice RightAnswer' button
                                      disabled={questionAnswered} onClick={() => {
                                setCheckedAnswer(answer);
                            }}>
                                <ListItemText primary={answer.name} style={{whiteSpace: 'pre-wrap'}}/>
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
                        <div className='Success Notification'>Correct! <i className="material-icons">check_circle</i>
                        </div>}
                        {(questionAnswered && !questionAnsweredCorrectly) &&
                        <div className='Incorrect Notification'>Incorrect! <i className="material-icons">cancel</i>
                        </div>}
                        <Button
                            className='SubmitAnswerButton'
                            disabled={Object.keys(checkedAnswer).length === 0}
                            variant='contained'
                            color='primary'
                            onClick={questionAnswered ? () => {
                                    if (quizStore.isAtEndOfQuiz()) {
                                        props.quizStore.setQuizInProgress(false);
                                        props.history.push('/finalScore');
                                    } else {
                                        quizStore.incrementCurrentQuestion();
                                        setQuestionAnsweredCorrectly(false);
                                        setQuestionAnswered(false);
                                    }
                                    setCheckedAnswer({} as Answer);
                                }
                                : () => {

                                    setQuestionAnswered(true);
                                    setQuestionAnsweredCorrectly(checkedAnswer.isCorrect);

                                    if (checkedAnswer.isCorrect) {
                                        quizStore.incrementNumberOfRightAnswers();
                                    }

                                }}
                        >{questionAnswered ? 'Next Question' : 'Submit Answer'}</Button>
                    </div>
                </div>)
        }}

        </Observer>
    );
};

export default inject("quizStore")(withRouter(Question));

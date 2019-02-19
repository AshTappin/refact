import React, {useState} from 'react';
import {QuestionAndAnswers} from "../../Interfaces/QuestionAndAnswers";
import {List, ListItem, ListItemText} from "@material-ui/core";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Radio from "@material-ui/core/Radio";
import {Answer} from "../../Interfaces/Answer";

interface MultipleChoiceQuestionProps {
    questionAndAnswers: QuestionAndAnswers,
    questionAnswered?: boolean,
    setCheckedAnswer(answer: Answer) : void,
    checkedAnswer?: Answer
}

const MultipleChoiceQuestion = (props: MultipleChoiceQuestionProps) => {
    const {questionAndAnswers, questionAnswered, checkedAnswer, setCheckedAnswer} = props;

    return (
        <div className='MultipleChoiceQuestion'>
            <div className='QuestionText'>{questionAndAnswers.question}</div>
            <List className='AnswerChoices'>
                {questionAndAnswers.answers.map((answer) => (
                    <ListItem key={answer.name} className='AnswerChoice RightAnswer' button
                              disabled={questionAnswered} onClick={() => {
                        setCheckedAnswer!(answer);
                    }}>
                        <ListItemText primary={answer.name} style={{whiteSpace: 'pre-wrap'}}/>
                        <ListItemSecondaryAction>
                            <Radio
                                disabled={questionAnswered}
                                onChange={() => {
                                    setCheckedAnswer!(answer);
                                }}
                                checked={checkedAnswer && (checkedAnswer.name === answer.name)}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>))}
            </List>
        </div>
    );
};

export default MultipleChoiceQuestion;
  
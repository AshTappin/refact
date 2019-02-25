import React, {FunctionComponent} from 'react';
import {QuizStore} from "../../Stores/QuizStore";
import {Button} from "@material-ui/core";

type QuizButtonProps = {
    disabled?: boolean,
    children?: string,
    quizStore?: QuizStore,
    onClick(): void
}
type QuizButtonType = 'NEXT_QUESTION' | 'SUBMIT_ANSWER';

const QuizButton: FunctionComponent<{ type: QuizButtonType, onClick(): void, disabled: boolean }> = (props) => {
    return props.type === 'NEXT_QUESTION' ?
        (<NextButton onClick={props.onClick} disabled={props.disabled} />) :
        (<SubmitAnswerButton onClick={props.onClick} disabled={props.disabled}/>)
};

const NextButton: FunctionComponent<QuizButtonProps> = (props) =>
    <Button
        className='SubmitAnswerButton'
        disabled={props.disabled}
        variant='contained'
        color='primary'
        onClick={props.onClick}
    >Next Question</Button>;

const SubmitAnswerButton: FunctionComponent<QuizButtonProps> = (props) =>
    <Button
        className='SubmitAnswerButton'
        disabled={props.disabled}
        variant='contained'
        color='primary'
        onClick={props.onClick}
    >Submit Answer</Button>;

export default QuizButton;
  
import * as React from 'react';
import {FunctionComponent, useState} from 'react';
import Button from '@material-ui/core/Button';
import './Question.css';
import {Answer} from '../../Interfaces/Answer';
import {inject, Observer} from 'mobx-react';
import {QuizStore} from '../../Stores/QuizStore';
import MultipleChoiceQuestion from "../MultipleChoiceQuestion/MultipleChoiceQuestion";
import {CodeDisplay} from "../CodeDisplay/CodeDisplay";
import useRouter from "use-react-router/use-react-router";

const Question: FunctionComponent<{ quizStore: QuizStore }> = (props) => {

    const [checkedAnswer, setCheckedAnswer] = useState<Answer>({} as Answer);
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const {history} = useRouter();

    return (
        <Observer>{() => {
            const {quizStore} = props;
            const questionAndAnswers = props.quizStore.getCurrentQuestion();

            return (
                <div className='Question'>
                    {questionAndAnswers.code && <CodeDisplay code={questionAndAnswers.code}/>}

                    <MultipleChoiceQuestion
                        questionAndAnswers={questionAndAnswers}
                        setCheckedAnswer={setCheckedAnswer}
                        checkedAnswer={checkedAnswer}
                    />

                    <div className='QuestionFooter'>
                        {questionAnsweredCorrectly &&
                        <div className='Success Notification'>Correct! <i className="material-icons">check_circle</i>
                        </div>}
                        {(questionAnswered && !questionAnsweredCorrectly) &&
                        <div className='Incorrect Notification'>Incorrect! <i className="material-icons">cancel</i>
                        </div>}

                        {questionAnswered ? <NextButton
                            quizStore={props.quizStore}
                            disabled={Object.keys(checkedAnswer).length === 0}
                            onClick={() => {
                                if (quizStore.isAtEndOfQuiz()) {
                                    props.quizStore.setQuizInProgress(false);
                                    history.push('/finalScore');
                                } else {
                                    quizStore.incrementCurrentQuestion();
                                    setQuestionAnsweredCorrectly(false);
                                    setQuestionAnswered(false);
                                }
                                setCheckedAnswer({} as Answer);
                            }}
                        /> : <SubmitAnswerButton
                            quizStore={props.quizStore}
                            disabled={Object.keys(checkedAnswer).length === 0}
                            onClick={() => {

                                setQuestionAnswered(true);
                                setQuestionAnsweredCorrectly(checkedAnswer.isCorrect);

                                if (checkedAnswer.isCorrect) {
                                    quizStore.incrementNumberOfRightAnswers();
                                }

                            }}
                        />}
                    </div>
                </div>)
        }}

        </Observer>
    );
};

type QuizButtonProps = {
    children: string,
    disabled?: boolean,
    onClick(): void
}

const QuizButton = (props: QuizButtonProps) =>
    <Button
        className='SubmitAnswerButton'
        disabled={props.disabled}
        variant='contained'
        color='primary'
        onClick={props.onClick}
    >{props.children}</Button>;

type NextQuestionButtonProps = {
    disabled?: boolean,
    quizStore: QuizStore,
    onClick(): void
}

const NextButton = (props: NextQuestionButtonProps) =>
    <QuizButton onClick={props.onClick} disabled={props.disabled}>Next Question</QuizButton>;


const SubmitAnswerButton = (props: NextQuestionButtonProps) =>
    <QuizButton onClick={props.onClick} disabled={props.disabled}>Submit Answer</QuizButton>;

export default inject("quizStore")(Question);

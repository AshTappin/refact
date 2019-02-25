import * as React from 'react';
import {FunctionComponent, useState} from 'react';
import './Question.css';
import {Answer} from '../../Interfaces/Answer';
import {inject, Observer} from 'mobx-react';
import {QuizStore} from '../../Stores/QuizStore';
import MultipleChoiceQuestion from "../MultipleChoiceQuestion/MultipleChoiceQuestion";
import {CodeDisplay} from "../CodeDisplay/CodeDisplay";
import useRouter from "use-react-router/use-react-router";
import QuizButton from "../QuizButton/QuizButton";

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

                        <QuizButton
                            type={questionAnswered ? 'NEXT_QUESTION' : 'SUBMIT_ANSWER'}
                            onClick={questionAnswered
                                ? () => {
                                    if (quizStore.isAtEndOfQuiz()) {
                                        finishQuiz(props.quizStore);
                                    } else {
                                        quizStore.incrementCurrentQuestion();
                                    }
                                    resetState();
                                } : () => {

                                    setQuestionAnswered(true);
                                    setQuestionAnsweredCorrectly(checkedAnswer.isCorrect);

                                    if (checkedAnswer.isCorrect) {
                                        quizStore.incrementNumberOfRightAnswers();
                                    }

                                }}

                            disabled={Object.keys(checkedAnswer).length === 0}
                        />
                    </div>
                </div>)
        }}

        </Observer>
    );

    function finishQuiz(quizStore: QuizStore) {
        quizStore.setQuizInProgress(false);
        history.push('/finalScore');
    }

    function resetState() {
        setQuestionAnsweredCorrectly(false);
        setQuestionAnswered(false);
        setCheckedAnswer({} as Answer);
    }

};

export default inject("quizStore")(Question);

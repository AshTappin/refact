import React from 'react';
import './FinalScore.css'
import {Button} from '@material-ui/core';
import {RouteComponentProps} from 'react-router';
import {inject, Observer} from 'mobx-react';
import {QuizStore} from '../../Stores/QuizStore';
import useRouter from "use-react-router/use-react-router";

interface FinalScoreProps extends RouteComponentProps {
    quizStore: QuizStore
}

const FinalScore = (props: FinalScoreProps) => {
    const {history} = useRouter();
    return (
        <Observer>{() => (
            <div>
                <div>You scored:
                    <div className='FinalScoreText'>{props.quizStore.getFinalScore()}%</div>
                </div>
                <Button
                    style={{marginTop: 10}}
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        props.quizStore.resetQuiz();
                        props.quizStore.setQuizInProgress(true);
                        history.push('/question');
                    }}
                >Take Test Again</Button>
            </div>)
        }
        </Observer>
    );
};

export default inject("quizStore")(FinalScore);
  
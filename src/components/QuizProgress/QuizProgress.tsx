import React from 'react';
import { inject, Observer } from 'mobx-react';
import { QuizStore } from '../../Stores/QuizStore';

interface QuizProgressProps {
    quizStore?: QuizStore
}

const QuizProgress = (props: QuizProgressProps) => {
    const {quizStore} = props;
    return <Observer>{() =>
        quizStore!.sessionStoredQuizState.isInProgress?
            <div className='QuestionProgressText'>
                <b>{quizStore!.currentQuestionIndex + 1}</b> of <b>{quizStore!.questionsAndAnswers.length}</b> questions
            </div>
            : null
    }
    </Observer>;
};

export default inject('quizStore')(QuizProgress);
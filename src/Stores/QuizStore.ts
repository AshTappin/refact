import { observable } from 'mobx';
import { QuestionAndAnswers } from '../Interfaces/QuestionAndAnswers';

export class QuizStore {
    @observable
    numberOfRightAnswers: number = 0;

    @observable
    currentQuestionIndex: number = 0;

    @observable
    quizInProgress: boolean = false;

    questionsAndAnswers: QuestionAndAnswers[] = [
        {
            question: 'What can you use to pass data into a component?',
            answers: [
                {name: 'state', isCorrect: false},
                {name: 'props', isCorrect: true},
                {name: 'history', isCorrect: false},
                {name: 'none of the above', isCorrect: false}]
        }, {
            question: 'All react components have to be classes.',
            answers: [
                {name: 'true', isCorrect: false},
                {name: 'false', isCorrect: true}
            ]
        }];

    public getFinalScore() {
        return (this.numberOfRightAnswers / this.questionsAndAnswers.length) * 100;
    }

    public incrementNumberOfRightAnswers() {
        this.numberOfRightAnswers++;
    }

    public resetQuiz() {
        this.numberOfRightAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    public getCurrentQuestion() {
        return this.questionsAndAnswers[this.currentQuestionIndex];
    }

    public incrementCurrentQuestion() {
        this.currentQuestionIndex++;
    }

    public isAtEndOfQuiz(): boolean {
        return (this.currentQuestionIndex + 1) === this.questionsAndAnswers.length
    }

    public setQuizInProgress(isInProgress: boolean) {
        this.quizInProgress = isInProgress;
    }


}
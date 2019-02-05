import { observable } from 'mobx';

export class QuizStore {
    @observable
    numberOfRightAnswers: number = 0;

    numberOfQuestions: number = 1;

    public getFinalScore() {
        return (this.numberOfRightAnswers/this.numberOfQuestions) * 100;
    }


    public incrementNumberOfRightAnswers() {
        this.numberOfRightAnswers++;
    }

    public resetQuiz() {
        this.numberOfRightAnswers = 0;
    }
}
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
            question: 'What can you use to pass data into another component?',
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
        }, {
            question: 'When the Greeting component is rendered, what is the outcome?',
            code: "import React from \"react\";\n" +
                "\n" +
                "class Greeting extends React.Component {\n" +
                "    componentDidMount() {\n" +
                "        this.setState({user: 'Spock'});\n" +
                "    }\n" +
                "\n" +
                "    render() {\n" +
                "        return (\n" +
                "            <div>\n" +
                "                <Hello inGerman={true}/>\n" +
                "            </div>);\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "class Hello extends React.Component {\n" +
                "    render() {\n" +
                "        return (\n" +
                "            <div>\n" +
                "                {this.props.inGerman " +
                "\n                  ? `Hallo ${this.state.user}` " +
                "\n                  : `Hello ${this.state.user}`}\n" +
                "            </div>);\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "\n" +
                "export default Greeting;",
            answers: [
                {name: '"Hello Spock" is displayed', isCorrect: false},
                {name: '"Hallo Spock" is displayed', isCorrect: false},
                {name: 'The component cannot render successfully', isCorrect: true},
                {name: '"Hallo null" is displayed', isCorrect: false},
                {name: '"Hallo undefined" is displayed', isCorrect: false},
            ]
        }, {
            question: "What causes a react component to re-render?",
            answers: [
                {name: 'When any variable in the component changes', isCorrect: false},
                {name: 'Only after a page refresh ', isCorrect: false},
                {name: 'When the component\'s state changes', isCorrect: true},
            ]
        }, {
            question: "Is the setState() function synchronous or asynchronous?",
            answers: [
                {name: 'Synchronous', isCorrect: false},
                {name: 'Asynchronous', isCorrect: true},
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
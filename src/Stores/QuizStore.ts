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
                {name: '"Hallo null" is displayed', isCorrect: false},
                {name: '"Hallo undefined" is displayed', isCorrect: false},
                {name: 'The component cannot render successfully', isCorrect: true},
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
        }, {
            question: "When the \"Switch Language\" button is clicked, what is the console output?",
            code: "import React from \"react\";\n" +
                "\n" +
                "class Greeting extends React.Component {\n" +
                "\n" +
                "    constructor(props) {\n" +
                "        super(props);\n" +
                "        this.state = {};\n" +
                "        console.log('Constructing Greeting component');\n" +
                "    }\n" +
                "\n" +
                "    componentDidMount() {\n" +
                "        console.log('greeting component did mount');\n" +
                "    }\n" +
                "\n" +
                "    componentDidUpdate() {\n" +
                "        console.log('greeting component did update');\n" +
                "    }\n" +
                "\n" +
                "    render() {\n" +
                "        console.log('rendering greeting');\n" +
                "        return (\n" +
                "            <div>\n" +
                "                <Hello inGerman={this.state.inGerman}/>\n" +
                "                <button onClick={() => {\n" +
                "                   this.setState((prevState) => ({inGerman: !prevState.inGerman}));\n" +
                "                }}>Switch Language</button>\n" +
                "            </div>);\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "class Hello extends React.Component {\n" +
                "\n" +
                "    constructor(props) {\n" +
                "        super(props);\n" +
                "        this.state = {};\n" +
                "        console.log('Constructing Hello component');\n" +
                "    }\n" +
                "\n" +
                "    render() {\n" +
                "        console.log('rendering hello');\n" +
                "        return (\n" +
                "            <div>\n" +
                "                {this.props.inGerman ? 'Hallo' : 'Hello'}\n" +
                "            </div>);\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "\n" +
                "export default Greeting;",
            answers: [
                {name: "rendering greeting\nrendering hello\ngreetingcomponent did update", isCorrect: true},
                {
                    name: "Constructing Greeting component\nrendering greeting\nConstructing Hello component\nrendering hello\ngreeting component did mount\ngreetingcomponent did update",
                    isCorrect: false
                },
                {
                    name: "rendering greeting\nrendering hello\ngreeting component did mount\ngreetingcomponent did update",
                    isCorrect: false
                },
                {name: "rendering greeting\nrendering hello", isCorrect: false}
            ]
        }, {
            question: 'React is not compatible with Typescript.',
            answers: [
                {name: "true", isCorrect: false},
                {name: "false", isCorrect: true}
            ]
        }, {
            question: 'What can be used to modify state of a function component?',
            answers: [
                {name: 'You can\'t because function components are stateless', isCorrect: false},
                {name: 'this.setState()', isCorrect: false},
                {name: 'Hooks', isCorrect: true},
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
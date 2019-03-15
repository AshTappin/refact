import React from 'react';
import {storiesOf} from '@storybook/react';
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion/MultipleChoiceQuestion";
import {Paper} from "@material-ui/core";
import {CodeDisplay} from "../components/CodeDisplay/CodeDisplay";
import {Answer} from "../Interfaces/Answer";


storiesOf('Multiple choice question', module)
    .addDecorator(story => <Paper elevation={1}> {story()}</Paper>)
    .add('Unanswered multiple choice question', () => {

        return (
            <MultipleChoiceQuestion
                questionAndAnswers={{
                    question: 'What... is your favourite color?',
                    answers: [{
                        name: 'Blue',
                        isCorrect: false
                    }, {
                        name: 'NO!',
                        isCorrect: false
                    }, {
                        name: 'YELLOW!',
                        isCorrect: true
                    }]
                }}
                setCheckedAnswer={() => console.log('Selected on check')}

            />)
    })
    .add('Multiple choice question with answer selected', () =>
        <MultipleChoiceQuestion
            questionAndAnswers={{
                question: 'What... is your favourite color?',
                answers: [{
                    name: 'Blue',
                    isCorrect: false
                }, {
                    name: 'NO!',
                    isCorrect: false
                }, {
                    name: 'YELLOW!',
                    isCorrect: true
                }]
            }}
            checkedAnswer={{
                name: 'YELLOW!',
                isCorrect: true
            }}
            setCheckedAnswer={() => console.log('Selected on check')}
        />
    )
    .add('Answered multiple choice question', () =>
        <MultipleChoiceQuestion
            questionAndAnswers={{
                question: 'What... is your favourite color?',
                answers: [{
                    name: 'Blue',
                    isCorrect: false
                }, {
                    name: 'NO!',
                    isCorrect: false
                }, {
                    name: 'YELLOW!',
                    isCorrect: true
                }]
            }}
            checkedAnswer={{
                name: 'YELLOW!',
                isCorrect: true
            }}
            questionAnswered={true}
            setCheckedAnswer={(answer:Answer) => console.log('Selected on check')}
        />);

storiesOf('Code display', module)
    .add('Code displayed in syntaxhighter', () => {
            const code = "import React from \"react\";\n" +
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
                "export default Greeting;";

            return <CodeDisplay code={code}/>
        }
    );

import React from 'react';
import {storiesOf} from '@storybook/react';
import NotFound from "../components/NotFound/NotFound";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion/MultipleChoiceQuestion";

storiesOf('not found page', module)
    .addWithJSX('not found page', () => <NotFound/>);


storiesOf('Multiple choice question', module)
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
            setCheckedAnswer={console.log('Selected on check')}
        />);

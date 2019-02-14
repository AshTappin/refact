import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import NotFound from "../components/NotFound/NotFound";
import AnswerOption from "../components/Answer/Answer";

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));

storiesOf('not found page', module)
    .addWithJSX('not found page', () => <NotFound/>);

storiesOf('answer', module)
    .add('answer to select', () => <AnswerOption
        answer={{name: 'The Right One'}}
        onSelect={() => alert('Answer selected!')}
    />);
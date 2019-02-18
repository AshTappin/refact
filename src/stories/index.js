import React from 'react';
import {storiesOf} from '@storybook/react';
import NotFound from "../components/NotFound/NotFound";
import AnswerOption from "../components/Answer/Answer";

storiesOf('not found page', module)
    .addWithJSX('not found page', () => <NotFound/>);

storiesOf('answer', module)
    .add('answer to select', () => <AnswerOption
        answer={{name: 'The Right One'}}
        onSelect={() => alert('Answer selected!')}
    />);
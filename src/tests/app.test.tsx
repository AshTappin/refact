import ''
import {render} from "react-testing-library";
import App from '../App';
import * as React from "react";
import {QuizStore} from "../Stores/QuizStore";
import {Provider} from "mobx-react";

describe( 'App integration tests', () => {

    test('Get feedbadck on correct answer', () => {
        const {getByTestId, getByText, queryByTestId} = render(<Provider quizStore={new QuizStore()}><App/></Provider>);
        getByTestId('TakeQuizButton').click();

        expect(getByTestId('QuestionText').textContent).toBe('What can you use to pass data into another component?');

        getByText('props').click();
        getByTestId('SubmitAnswerButton').click();

        expect(queryByTestId('CorrectAnswerNotification')).not.toBeNull();

    });

});
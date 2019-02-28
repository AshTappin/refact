import React, {ReactElement} from 'react';
import {cleanup, render} from "react-testing-library";
import FinalScore from './FinalScore';
import {QuizStore} from "../../Stores/QuizStore";
import {BrowserRouter} from 'react-router-dom';

afterEach(cleanup);

test("Final score displays final score from test score", () => {
    const mockStore = {} as QuizStore;

    Object.defineProperty(mockStore, "finalScore", {
        get: () => 4
    });

    const {getByTestId} = renderWithBrowserComponent(<FinalScore quizStore={mockStore}/>);
    expect(getByTestId('FinalScoreText').textContent).toBe('4%');
});

function renderWithBrowserComponent(component:  ReactElement) {
    return render(<BrowserRouter>{component}</BrowserRouter>);
}
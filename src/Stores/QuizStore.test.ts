import {QuizStore} from "./QuizStore";

describe('final Score calculations', () => {

    test("Final score is initialised to zero", () => {
        const store = new QuizStore();
        expect(store.finalScore).toBe(0);
    });

    test("Final score is calculated correctly", () => {
        const store = new QuizStore();
        store.numberOfRightAnswers = 1;
        expect(store.finalScore).toBe(10);

        store.numberOfRightAnswers = 2;
        expect(store.finalScore).toBe(20);


        store.numberOfRightAnswers = 3;
        expect(store.finalScore).toBe(30);

        store.numberOfRightAnswers = 4;
        expect(store.finalScore).toBe(40);

        store.numberOfRightAnswers = 10;
        expect(store.finalScore).toBe(100);
    });

});



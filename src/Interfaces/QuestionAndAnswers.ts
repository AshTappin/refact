import { Answer } from './Answer';

export interface QuestionAndAnswers {
    question: string;
    answers: Answer[]
    code? : string;
}
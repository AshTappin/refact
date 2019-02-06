package com.refact.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class QuestionPage extends Page {

    public QuestionPage() {
        super("/question");
    }

    public SelenideWidget questionText() {
        return new SelenideWidget(By.className("QuestionText"), this);
    }

    public AnswerChoices answers() {
        return new AnswerChoices(By.className("AnswerChoices"), this);
    }

    public SelenideWidget submitAnswerButton() {
        return new SelenideWidget(By.className("SubmitAnswerButton"), this);
    }

    public void selectAnswer(String answer) {
        AnswerChoice answerToSelect = this.answers().findFirst(answerChoice -> answer.equals(answerChoice.getStringValue()));
        answerToSelect.click();
    }

    public SelenideWidget successNotification() {
        return new SelenideWidget(By.className("Success"), this);
    }

    public SelenideWidget nextQuestionButton() {
        return new SelenideWidget(By.className("SubmitAnswerButton"), this);
    }

    public SelenideWidget incorrectNotification() {
        return new SelenideWidget(By.className("Incorrect"), this);
    }

    public SelenideWidget questionProgressText() {
        return new SelenideWidget(By.className("QuestionProgressText"), this);
    }
}

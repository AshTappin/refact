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
}

package com.refact.components;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideAbstractListWidget;

public class AnswerChoices extends SelenideAbstractListWidget<AnswerChoice> {
    public AnswerChoices(By selector, Component parent) {
        super(selector, parent);
    }

    @Override
    public By itemsSelector() {
        return By.className("AnswerChoice");
    }

    @Override
    protected AnswerChoice createItem(SelenideElement e) {
        return new AnswerChoice(e, this);
    }
}

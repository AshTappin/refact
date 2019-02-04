package com.refact.components;

import com.codeborne.selenide.SelenideElement;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class AnswerChoice extends SelenideWidget {
    public AnswerChoice(SelenideElement peer, Component parent) {
        super(peer, parent);
    }
}

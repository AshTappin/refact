package com.refact.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class RefactPage extends Page {
    public RefactPage() {
        super("");
    }
    public SelenideWidget questionProgressText() {
        return new SelenideWidget(By.className("QuestionProgressText"), this);
    }
}

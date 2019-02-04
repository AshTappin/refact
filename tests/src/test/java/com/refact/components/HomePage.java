package com.refact.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class HomePage extends Page {
    public HomePage() {
        super("/");
    }

    public SelenideWidget takeQuizButton() {
        return new SelenideWidget(By.className("TakeQuizButton"), this);
    }
}


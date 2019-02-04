package com.refact.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class FinalScorePage extends Page {
    public FinalScorePage() {
        super("/finalScore");
    }

    public SelenideWidget finalScoreText() {
        return new SelenideWidget(By.className("FinalScoreText"), this);
    }
}

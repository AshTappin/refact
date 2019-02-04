package com.refact.steps;

import com.refact.components.HomePage;
import com.refact.components.QuestionPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class QuizSteps {

    public HomePage homePage = new HomePage();
    public QuestionPage questionPage = new QuestionPage();

    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() {
        homePage.launch();
    }

    @When("^I start to take the quiz$")
    public void iTakeTheQuiz() {
        homePage.takeQuizButton().click();
    }

    @Then("^the question '([^\"]*)' has the following answers$")
    public void theQuestionHasTheFollowingAnswers(String question, List<String> answers) {
        questionPage.questionText().matches(question);
        questionPage.answers().matches(answers);
    }
}

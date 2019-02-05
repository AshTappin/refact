package com.refact.steps;

import com.refact.components.AnswerChoice;
import com.refact.components.FinalScorePage;
import com.refact.components.HomePage;
import com.refact.components.QuestionPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.blackpepper.relish.core.TableRow;

import java.util.List;

public class QuizSteps {

    public HomePage homePage = new HomePage();
    public QuestionPage questionPage = new QuestionPage();
    private FinalScorePage finalScorePage = new FinalScorePage();

    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() {
        homePage.launch();
    }

    @When("^I start to take the quiz$")
    public void iTakeTheQuiz() {
        homePage.takeQuizButton().click();
    }

    @When("^I give the following answers to the following questions$")
    public void iGiveTheFollowingAnswersToTheFollowingQuestions(List<TableRow> questionsAndAnswers) {
        questionsAndAnswers.forEach(questionAndAnswer -> {
            String question = questionAndAnswer.get("question");
            String answer = questionAndAnswer.get("answer");
            questionPage.questionText().matches(question);
            questionPage.selectAnswer(answer);
            questionPage.submitAnswerButton().click();
            questionPage.nextQuestionButton().click();
        });
    }

    @Then("^the question '([^\"]*)' has the following answers$")
    public void theQuestionHasTheFollowingAnswers(String question, List<String> answers) {
        questionPage.questionText().matches(question);
        questionPage.answers().matches(answers);
    }


    @Then("^the final score page will say I scored '([^\"]*)'$")
    public void theFinalScorePageWillSayIScored(String score) {
        finalScorePage.finalScoreText().matches(score);
    }

    @When("I answer '([^\"]*)' to '([^\"]*)'")
    public void iAnswerPropsToWhatCanYouUseToPassDataIntoAComponent(String answer, String question) {
        questionPage.questionText().matches(question);
        questionPage.selectAnswer(answer);
        questionPage.submitAnswerButton().click();
    }

    @Then("^I am notified that I got the correct answer$")
    public void iAmNotifiedThatIGotTheCorrectAnswer() {
        questionPage.successNotification().assertVisible();
    }
}

package fmi;
import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import screenmodels.SearchScreenModel;

public class SearchSteps {

	public SearchScreenModel ssm = new SearchScreenModel();
	
	@Given("^Потребителят се намира в прозореца за търсене на герои$")
	public void потребителят_се_намира_в_прозореца_за_търсене_на_герои() throws Throwable 
	{
		ssm.navigateToMe();
	}

	@When("^Потребителят въведе име на герой \"([^\"]*)\"$")
	public void потребителят_въведе_име_на_герой(String arg1) throws Throwable
	{
		ssm.setName(arg1);
	}

	@When("^Натиска бутона за търсене$")
	public void натиска_бутона_за_търсене() throws Throwable 
	{
		ssm.clickSearchButton();
	}
	
	@Then("^Излиза съобщение \"([^\"]*)\"$")
	public void излиза_съобщение(String arg1) throws Throwable
	{
		final String resultMessage = ssm.getSearchMessage();
		assertEquals(arg1, resultMessage);
	}
}

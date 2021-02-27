package fmi;
import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import screenmodels.CreateScreenModel;

public class CreateCharSteps 
{

	public CreateScreenModel csm = new CreateScreenModel();
	
	@Given("^Потребителят се намира на прозореца за създаване на герой$")
	public void потребителят_се_намира_на_прозореца_за_създаване_на_герой() throws Throwable 
	{
		csm.navigateToMe();
	}

	@When("^Потребителят въведе име на героя \"([^\"]*)\"$")
	public void потребителят_въведе_име_на_героя(String arg1) throws Throwable 
	{
		csm.setName(arg1);
	}

	@When("^Потребителят въведе роля на героя \"([^\"]*)\"$")
	public void потребителят_въведе_роля_на_героя(String arg1) throws Throwable 
	{
		csm.setRole(arg1);
	}

	@When("^Потребителят въведе раса на героя \"([^\"]*)\"$")
	public void потребителят_въведе_раса_на_героя(String arg1) throws Throwable 
	{
		csm.setRace(arg1);
	}

	@When("^Потребителят въведе ниво на героя \"([^\"]*)\"$")
	public void потребителят_въведе_ниво_на_героя(String arg1) throws Throwable 
	{
		csm.setLevel(arg1);
	}

	@When("^Потребителят натиска бутона за създаване на героя$")
	public void потребителят_натиска_бутона_за_създаване_на_героя() throws Throwable 
	{
		csm.clickCreateButton();
	}

	@Then("^Подскача съобщение \"([^\"]*)\"$")
	public void подскача_съобщение(String arg1) throws Throwable 
	{
		final String resultMessage = csm.getCreateMessage();
		assertEquals(arg1, resultMessage);
	}
}

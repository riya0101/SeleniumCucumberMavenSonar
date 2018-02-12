package StepDef;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDef {
	
	
	@Given("^browser launched and hit the application URL$")
	public void browser_launched_and_hit_the_application_URL() throws Throwable {

		LoginPageStepDef lg= new LoginPageStepDef();
		lg.invoke_site();
	}

	@Given("^user logs in with valid credentials \"(.*?)\" and \"(.*?)\"$")
	public void user_logs_in_with_valid_credentials_and(String un, String pwd) throws Throwable {

		LoginPageStepDef lg= new LoginPageStepDef();
		lg.doLogin(un, pwd);
	   
	}

	@Then("^user should see success message$")
	public void user_should_see_success_message() throws Throwable {
		
		LoginPageStepDef lg= new LoginPageStepDef();
		lg.verify_text();
	}

	@Given("^user enters credentials to login$")
	public void user_enters_credentials_to_login(DataTable usercredentials) throws Throwable {
	    
		LoginPageStepDef lg= new LoginPageStepDef();
		lg.datatable_login(usercredentials);
	}
	
	
   @After

   public void afterScenario(Scenario s)
   {
	   LoginPageStepDef lg= new LoginPageStepDef();
	   lg.takeScreenShot(s);
	  
	   lg.closeDriver();
   }

}

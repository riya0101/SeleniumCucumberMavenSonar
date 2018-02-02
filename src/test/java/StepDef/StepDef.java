package StepDef;

import java.io.File;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDef {
	
	WebDriver driver;
	@Given("^browser launched and hit the application URL$")
	public void browser_launched_and_hit_the_application_URL() throws Throwable {
	  
		System.setProperty("webdriver.chrome.driver", "D:\\Automation\\selenium_workspace\\SeleniumCucumberMaven\\src\\test\\java\\drivers\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://newtours.demoaut.com/");
	}

	@Given("^user logs in with valid credentials \"(.*?)\" and \"(.*?)\"$")
	public void user_logs_in_with_valid_credentials_and(String un, String pwd) throws Throwable {
	   driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(un);
	   driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
	   driver.findElement(By.xpath("//input[@name='login']")).click();
	   
	}

	@Then("^user should see success message$")
	public void user_should_see_success_message() throws Throwable {
		
		boolean isPresent=true;
		
		try
		{
			driver.findElement(By.xpath("//a[text()='SIGN-OFF']"));
			
		}catch(NoSuchElementException ex)
		{
			isPresent=false;
		}
		
	   Assert.assertTrue(isPresent);
	    
	}

   @After

   public void afterScenario(Scenario s)
   {
     if(s.isFailed())
     {
     	try
     	{
             byte[] screenshot =((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
             s.embed(screenshot,"new File(\"./ScreenShots/\"+Scenario+\".png\"");
             s.write("URL at failure"+ driver.getCurrentUrl());
     	}catch(WebDriverException wde){
             s.write("Embed Failed"+wde.getMessage());
        }catch (ClassCastException cce){
                cce.printStackTrace();
        }
     }
	   driver.quit();
   }

}

package StepDef;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import com.sun.jna.platform.win32.Netapi32Util.User;

import cucumber.api.DataTable;
import cucumber.api.Scenario;

public class LoginPageStepDef {
	
	public static WebDriver driver;
	public void invoke_site()
	{
		System.setProperty("webdriver.chrome.driver", "D:\\Automation\\selenium_workspace\\SeleniumCucumberMaven\\src\\test\\java\\drivers\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://newtours.demoaut.com/");
		//
	}

	public void doLogin(String un,String pwd)
	{
		   driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(un);
		   driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
		   driver.findElement(By.xpath("//input[@name='login']")).click();
		   ///
	}
	
	public void verify_text()
	{
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
	
	public void takeScreenShot(Scenario s)
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
	}
	
	public void closeDriver()
	{
		driver.quit();
	}
	
	public void datatable_login(DataTable table)
	{
		List<List<String>> data = table.raw();
		driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(data.get(0).get(0));
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(data.get(0).get(1));
		driver.findElement(By.xpath("//input[@name='login']")).click();
	}
		
		
}

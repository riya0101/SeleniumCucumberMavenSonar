package TestRunner;

import java.io.File;
import java.io.FileReader;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;




@RunWith(Cucumber.class)
@CucumberOptions(
				 features="features",
				 glue= {"StepDef"},
				 plugin= {"html:target/cucumber-html-report",
						  "json:target/cucumber.json",
						  "pretty:target/cucumber-pretty.text",
						  "junit:target/cucumber-results.xml",
						  "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/SeleniumCucumberMaven.html"
						  },
				  tags={"@Regression"}
		
		)
public class testrunner {
	
	  @AfterClass
	    public static void teardown() {
	        Reporter.loadXMLConfig(new File("D:\\Automation\\selenium_workspace\\SeleniumCucumberMaven\\extent-config.xml"));
	        Reporter.setSystemInfo("user", System.getProperty("user.name"));
	        Reporter.setSystemInfo("os", "Mac OSX");
	        Reporter.setTestRunnerOutput("Sample test runner output message");
	    }

}

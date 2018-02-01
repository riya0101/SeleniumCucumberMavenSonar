package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
				 features="features",
				 glue= {"StepDef"},
				 plugin= {"html:target/cucumber-html-report",
						  "json:target/cucumber.json",
						  "pretty:target/cucumber-pretty.text",
						  "junit:target/cucumber-results.xml"
						  }
		
		)
public class testrunner {

}

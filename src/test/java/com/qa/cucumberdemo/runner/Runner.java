package com.qa.cucumberdemo.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "C:\\Users\\Sivaram\\eclipse-workspace\\CucumberDemo\\src\\Features",
		glue = {"com.qa.cucumberdemo.stepdefinitions"},
		plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		monochrome = true,
		tags = {"@Smoke"}
		
		
		)

public class Runner {
	


}

package com.qa.cucumberdemo.stepdefinitions;


import org.junit.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefinition {

	@Before
    public void before()
    {
		System.out.println("Sivaram");
    }

	@After
	public void after()
	{
		System.out.println("End");
	}
	
	@Given("^User is on the search page$")
	public void user_is_on_the_search_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("Sairam");
	   
	   System.out.println("Siva");
	}

	
	@When("^user entered source and destination$")
	public void user_entered_source_and_destination() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 System.out.println("Siva");
	}

	@When("^user clicked on search button$")
	public void user_clicked_on_search_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 System.out.println("Siva");
	}

	@Then("^user able to see search details$")
	public void user_able_to_see_search_details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue(false);
	}


}

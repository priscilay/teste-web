package br.sp.runners;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue = { "br.sp.steps"}, features = {
		"src/main/java/br/sp/feature/" }, monochrome = true, plugin = { "pretty","html:Reports/cucumber" }, tags = { "~@ignore", "@geral" })

public class Runner {


}
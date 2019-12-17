package br.sp.core;

import static br.sp.core.DriverFactory.getDriver;

import org.openqa.selenium.By;

public class BasePage {
	
	public void click(By by) {
		getDriver().findElement(by).click();
	}
	
	public void click(String id) {
		this.click(By.id(id));
	}
	
	public void write(By by, String keysToSend) {
		getDriver().findElement(by).sendKeys(keysToSend);
	}
	
	public void write(String id, String keysToSend) {
		this.write(By.id(id), keysToSend);
	}
	
	public String getTextField(By by) {
		return getDriver().findElement(by).getText();
	}
	
	public String getTextField(String id) {
		return this.getTextField(By.id(id));
	}
	
	public void submitField(By by) {
		getDriver().findElement(by).submit();
	}
	
	public void submitField(String id) {
		this.submitField(By.id(id));
	}
}

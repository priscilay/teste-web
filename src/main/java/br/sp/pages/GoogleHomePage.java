package br.sp.pages;

import org.openqa.selenium.By;

import br.sp.core.BasePage;

public class GoogleHomePage extends BasePage {
	
	public void setCampoPesquisa(String pesquisar) {
		super.write(By.name("q"), pesquisar);
	}
	
	public void subtmit() {
		super.submitField(By.name("q"));
	}
}

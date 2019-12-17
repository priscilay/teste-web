package br.sp.pages;

import br.sp.core.BasePage;

public class GooglePesquisaPage extends BasePage{
	public String getResultadoAproximadamente() {
		return super.getTextField("resultStats");
	}
}

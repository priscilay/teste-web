package br.sp.steps;

import static br.sp.core.DriverFactory.getDriver;

import br.sp.core.Diretor;
import br.sp.core.Filme;
import br.sp.pages.GoogleHomePage;
import br.sp.pages.GooglePesquisaPage;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class PesquisaFilmesGoogleSteps {
	GoogleHomePage googleHome = new GoogleHomePage();
	GooglePesquisaPage googlePesquisa = new GooglePesquisaPage();
	Diretor diretor = new Diretor();
	Filme filme = new Filme();
	
	@Dado("^que informo o diretor \"([^\"]*)\" e o ano de nascimento \"([^\"]*)\"$")
	public void que_informo_o_diretor_e_o_ano_de_nascimento(String nome, String nascimento) throws Exception {
		getDriver().get("https://www.google.com/");
//		diretor.addDiretor(nome, nascimento);
		googleHome.setCampoPesquisa(nome + " ");
	}

	@E("^informo o filme \"([^\"]*)\" e ano de lancamento \"([^\"]*)\"$")
	public void informo_o_filme_e_ano_de_lancamento(String nome, String anoDeLancamento) throws Exception {
//		filme.addFilme(nome, anoDeLancamento);
		googleHome.setCampoPesquisa(nome);
	}
	
	@Quando("^clico em pesquisar$")
	public void clico_em_pesquisar() throws Exception {
		googleHome.subtmit();
	}

	@Entao("^recebo o total de resultados para a pesquisa$")
	public void recebo_o_total_de_resultados_para_a_pesquisa() throws Exception {
		System.out.println(googlePesquisa.getResultadoAproximadamente());
	}
}


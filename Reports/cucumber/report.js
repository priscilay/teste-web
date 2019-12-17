$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PesquisaFilmesGoogle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Pesquisa de diretores e filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@geral"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 7,
  "name": "que informo o diretor \"\u003cdiretor\u003e\" e o ano de nascimento \"\u003cnascimento\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "informo o filme \"\u003cfilme\u003e\" e ano de lançamento \"\u003cano\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;",
  "rows": [
    {
      "cells": [
        "diretor",
        "nascimento",
        "filme",
        "ano"
      ],
      "line": 13,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;1"
    },
    {
      "cells": [
        "James Cameron",
        "16 de agosto de 1954",
        "Avatar",
        "2009"
      ],
      "line": 14,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;2"
    },
    {
      "cells": [
        "James Cameron",
        "16 de agosto de 1954",
        "Titanic",
        "1997"
      ],
      "line": 15,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;3"
    },
    {
      "cells": [
        "Stan Lee",
        "28 de dezembro de 1922",
        "Vingadores: Ultimato",
        "2019"
      ],
      "line": 16,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;4"
    },
    {
      "cells": [
        "Stan Lee",
        "28 de dezembro de 1922",
        "Homem de Ferro 1",
        "2002"
      ],
      "line": 17,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 14,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que informo o diretor \"James Cameron\" e o ano de nascimento \"16 de agosto de 1954\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "informo o filme \"Avatar\" e ano de lançamento \"2009\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "James Cameron",
      "offset": 23
    },
    {
      "val": "16 de agosto de 1954",
      "offset": 61
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 7993485064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avatar",
      "offset": 17
    },
    {
      "val": "2009",
      "offset": 46
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 72456976,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 1558361322,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 32713257,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que informo o diretor \"James Cameron\" e o ano de nascimento \"16 de agosto de 1954\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "informo o filme \"Titanic\" e ano de lançamento \"1997\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "James Cameron",
      "offset": 23
    },
    {
      "val": "16 de agosto de 1954",
      "offset": 61
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 520763273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Titanic",
      "offset": 17
    },
    {
      "val": "1997",
      "offset": 47
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 93167885,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 1085482969,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 122696315,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que informo o diretor \"Stan Lee\" e o ano de nascimento \"28 de dezembro de 1922\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "informo o filme \"Vingadores: Ultimato\" e ano de lançamento \"2019\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Stan Lee",
      "offset": 23
    },
    {
      "val": "28 de dezembro de 1922",
      "offset": 56
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 438151304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vingadores: Ultimato",
      "offset": 17
    },
    {
      "val": "2019",
      "offset": 60
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 126212603,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 1247137021,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 29129620,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que informo o diretor \"Stan Lee\" e o ano de nascimento \"28 de dezembro de 1922\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "informo o filme \"Homem de Ferro 1\" e ano de lançamento \"2002\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Stan Lee",
      "offset": 23
    },
    {
      "val": "28 de dezembro de 1922",
      "offset": 56
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 361180489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Homem de Ferro 1",
      "offset": 17
    },
    {
      "val": "2002",
      "offset": 56
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 139182177,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 2552472632,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 31131070,
  "status": "passed"
});
});
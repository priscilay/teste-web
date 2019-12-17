$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PesquisaFilmesGoogle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
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
  "name": "informo o filme \"\u003cfilme\u003e\" e ano de lancamento \"\u003cano\u003e\"",
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
  "name": "informo o filme \"Avatar\" e ano de lancamento \"2009\"",
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
  "duration": 11206367600,
  "error_message": "org.openqa.selenium.WebDriverException: Unrecognized platform: windows nt\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027LAPTOP-9VR82EJD\u0027, ip: \u0027192.168.15.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.Platform.fromString(Platform.java:300)\r\n\tat org.openqa.selenium.Capabilities.getPlatform(Capabilities.java:46)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.toString(RemoteWebDriver.java:1100)\r\n\tat java.util.Formatter$FormatSpecifier.printString(Unknown Source)\r\n\tat java.util.Formatter$FormatSpecifier.print(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.lang.String.format(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.setFoundBy(RemoteWebElement.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.setFoundBy(RemoteWebDriver.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:423)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:489)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat br.sp.core.BasePage.write(BasePage.java:18)\r\n\tat br.sp.pages.GoogleHomePage.setCampoPesquisa(GoogleHomePage.java:10)\r\n\tat br.sp.steps.PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(PesquisaFilmesGoogleSteps.java:24)\r\n\tat ✽.Dado que informo o diretor \"James Cameron\" e o ano de nascimento \"16 de agosto de 1954\"(PesquisaFilmesGoogle.feature:7)\r\n",
  "status": "failed"
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
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "status": "skipped"
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
  "name": "informo o filme \"Titanic\" e ano de lancamento \"1997\"",
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
  "duration": 361408361,
  "error_message": "org.openqa.selenium.WebDriverException: Unrecognized platform: windows nt\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027LAPTOP-9VR82EJD\u0027, ip: \u0027192.168.15.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.Platform.fromString(Platform.java:300)\r\n\tat org.openqa.selenium.Capabilities.getPlatform(Capabilities.java:46)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.toString(RemoteWebDriver.java:1100)\r\n\tat java.util.Formatter$FormatSpecifier.printString(Unknown Source)\r\n\tat java.util.Formatter$FormatSpecifier.print(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.lang.String.format(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.setFoundBy(RemoteWebElement.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.setFoundBy(RemoteWebDriver.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:423)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:489)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat br.sp.core.BasePage.write(BasePage.java:18)\r\n\tat br.sp.pages.GoogleHomePage.setCampoPesquisa(GoogleHomePage.java:10)\r\n\tat br.sp.steps.PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(PesquisaFilmesGoogleSteps.java:24)\r\n\tat ✽.Dado que informo o diretor \"James Cameron\" e o ano de nascimento \"16 de agosto de 1954\"(PesquisaFilmesGoogle.feature:7)\r\n",
  "status": "failed"
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
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "status": "skipped"
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
  "name": "informo o filme \"Vingadores: Ultimato\" e ano de lancamento \"2019\"",
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
  "duration": 283477928,
  "error_message": "org.openqa.selenium.WebDriverException: Unrecognized platform: windows nt\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027LAPTOP-9VR82EJD\u0027, ip: \u0027192.168.15.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.Platform.fromString(Platform.java:300)\r\n\tat org.openqa.selenium.Capabilities.getPlatform(Capabilities.java:46)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.toString(RemoteWebDriver.java:1100)\r\n\tat java.util.Formatter$FormatSpecifier.printString(Unknown Source)\r\n\tat java.util.Formatter$FormatSpecifier.print(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.lang.String.format(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.setFoundBy(RemoteWebElement.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.setFoundBy(RemoteWebDriver.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:423)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:489)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat br.sp.core.BasePage.write(BasePage.java:18)\r\n\tat br.sp.pages.GoogleHomePage.setCampoPesquisa(GoogleHomePage.java:10)\r\n\tat br.sp.steps.PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(PesquisaFilmesGoogleSteps.java:24)\r\n\tat ✽.Dado que informo o diretor \"Stan Lee\" e o ano de nascimento \"28 de dezembro de 1922\"(PesquisaFilmesGoogle.feature:7)\r\n",
  "status": "failed"
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
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "status": "skipped"
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
  "name": "informo o filme \"Homem de Ferro 1\" e ano de lancamento \"2002\"",
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
  "duration": 346876406,
  "error_message": "org.openqa.selenium.WebDriverException: Unrecognized platform: windows nt\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027LAPTOP-9VR82EJD\u0027, ip: \u0027192.168.15.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.Platform.fromString(Platform.java:300)\r\n\tat org.openqa.selenium.Capabilities.getPlatform(Capabilities.java:46)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.toString(RemoteWebDriver.java:1100)\r\n\tat java.util.Formatter$FormatSpecifier.printString(Unknown Source)\r\n\tat java.util.Formatter$FormatSpecifier.print(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.util.Formatter.format(Unknown Source)\r\n\tat java.lang.String.format(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.setFoundBy(RemoteWebElement.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.setFoundBy(RemoteWebDriver.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:423)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:489)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat br.sp.core.BasePage.write(BasePage.java:18)\r\n\tat br.sp.pages.GoogleHomePage.setCampoPesquisa(GoogleHomePage.java:10)\r\n\tat br.sp.steps.PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(PesquisaFilmesGoogleSteps.java:24)\r\n\tat ✽.Dado que informo o diretor \"Stan Lee\" e o ano de nascimento \"28 de dezembro de 1922\"(PesquisaFilmesGoogle.feature:7)\r\n",
  "status": "failed"
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
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "status": "skipped"
});
});
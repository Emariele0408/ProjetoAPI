ProjetoautomacaoAPI

Projeto  de testes de API usando Playwright + playwright-bdd + TypeScript, testando a API pública FakeRestAPI.

A arquitetura usa features Gherkin em português (keywords em inglês) como única fonte de teste, sobre uma camada genérica de steps parametrizados e um wrapper HTTP fino em cima do APIRequestContext do Playwright.

Stack
Categoria	Ferramenta	Versão
Linguagem	TypeScript	^5.8.3
Runtime	@playwright/test	1.58.2
Camada BDD	playwright-bdd	8.5.1
HTTP client	APIRequestContext (Playwright)	—
Relatórios	line, html, junit (results.xml)	—
As versões de @playwright/test e playwright-bdd estão fixas (sem ^): o playwright-bdd 8.5.1 não é compatível com Playwright >= 1.60.

Estrutura
ProjetoautomacaoAPI/
├── Tests/Features/<Recurso>/<Recurso>.feature   # Gherkin (fonte única de teste)
├── stepgen/Config/
│   ├── fixtures.ts        # ScenarioContext (jar + driver + última resposta) como fixture
│   ├── CookieJar.ts       # variáveis do cenário + placeholders {var}, {timestamp}, {uuid}, {year}
│   ├── TestBase.ts        # step definitions genéricas (When/Then parametrizados)
│   └── Drivers/Driver.ts  # wrapper HTTP GET/POST/PUT/PATCH/DELETE
├── playwright.config.ts   # defineBddConfig + reporters + baseURL
├── tsconfig.json
└── package.json
Como rodar
npm install
npx playwright install        # baixa os browsers (o script pretest só roda o bddgen)

npm test                      # gera os specs (bddgen) e roda tudo
npm run test:smoke            # apenas cenários @Smoke
npm run report                # abre o relatório HTML
Para apontar para outro host:

BASE_URL=https://outro-host.exemplo npm test
WORKERS=4 npm test
Como escrever um teste
Cada Scenario cobre o contrato de um endpoint. Os steps disponíveis:

Step	Uso
Envio uma requisição GET para o endpoint '{path}'	GET
Envio uma requisição DELETE para o endpoint '{path}'	DELETE
Envio uma requisição POST para o endpoint '{path}' + tabela BODY	POST
Envio uma requisição PUT para o endpoint '{path}' + tabela BODY	PUT
A resposta deve retornar o código '{status}'	valida status HTTP
A resposta deve conter uma lista não vazia	valida array não vazio
Armazeno o campo '{path}' da resposta em uma variável chamada '{nome}'	captura valor
O campo '{path}' da resposta deve ser igual a '{valor}'	assert de valor
O campo '{path}' da resposta deve existir	assert de presença
A resposta deve conter os campos: + tabela CAMPO/VALOR	assert campo a campo
Caminhos de campo suportam índices: items[0].groupId, author.lastName.

Placeholders resolvidos em runtime dentro de paths, bodies e valores esperados: {minhaVar} (capturada antes), {timestamp}, {uuid}, {year}.

Exemplo (Tests/Features/Books/Books.feature):

@Smoke
Scenario: GET 200 - api/v1/Books/{id}
  When Envio uma requisição GET para o endpoint '/api/v1/Books/1'
  Then A resposta deve retornar o código '200'
  And A resposta deve conter os campos:
    | CAMPO | VALOR |
    | id    | 1     |
    | title |       |
Convenções
.feature em PascalCase, nome do arquivo = nome da Feature:.
Gherkin com keywords em inglês e conteúdo em português; aspas simples nos parâmetros.
Tags combináveis: @Smoke, mais o nome do recurso (@Books, @Authors, @Activities).
Observação sobre a FakeRestAPI
É uma API mock: escritas não persistem. POST retorna 200 (não 201) com o objeto ecoado, e GET de id inexistente retorna 404. Os cenários refletem esse comportamento real.

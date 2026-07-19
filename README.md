# ProjetoautomacaoAPI

Projeto  de testes de API usando Playwright + playwright-bdd + TypeScript, testando a API pública FakeRestAPI.

# Estrutura

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

# Como rodar

npm install
npx playwright install        # baixa os browsers (o script pretest só roda o bddgen)

npm test                      # gera os specs (bddgen) e roda tudo
npm run test:smoke            # apenas cenários @Smoke
npm run report                # abre o relatório HTML

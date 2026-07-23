# ProjetoAutomacaoAPI

Projeto de testes de API usando **Playwright** + **playwright-bdd** + **TypeScript**, testando a API pública [FakeRestAPI](https://fakerestapi.azurewebsites.net/).

## Estrutura

ProjetoAutomacaoAPI/
├── Tests/Features/**/*.feature # Gherkin (fonte única de teste)
├── Stepgen/Config/
│ ├── Fixture.ts # ScenarioContext (jar + driver + última resposta) como fixture
│ ├── CookieJar.ts # variáveis do cenário + placeholders {var}, {timestamp}, {uuid}, {year}
│ ├── TestBase.ts # step definitions genéricas (When/Then parametrizados)
│ └── Drivers/Driver.ts # wrapper HTTP GET/POST/PUT/PATCH/DELETE
├── .features-gen/ # specs gerados automaticamente pelo bddgen (não versionado)
├── playwright.config.ts # defineBddConfig + reporters + baseURL
├── tsconfig.json
└── package.json

## Como rodar

```bash
npm install
npx playwright install   # baixa os browsers (necessário apenas na primeira vez ou após atualizar o Playwright)
```

```bash
npm test           # roda o bddgen (via pretest) e executa todos os testes
npm run test:smoke # roda o bddgen e executa apenas cenários marcados com @Smoke
npm run report      # abre o relatório HTML da última execução
```

> O `bddgen` gera os arquivos de teste (`.spec.js`) a partir dos `.feature` automaticamente antes de cada execução — não é necessário rodá-lo manualmente, a menos que queira apenas regenerar os specs sem rodar os testes (`npm run bddgen`).

## Escrevendo novos testes

1. Crie ou edite um arquivo `.feature` em `Tests/Features/<Recurso>/`, seguindo a sintaxe Gherkin.
2. Se precisar de um novo step, adicione-o em `Stepgen/Config/TestBase.ts`.
3. Rode `npm test` — o `bddgen` gera os specs automaticamente a partir dos `.feature`.

## Placeholders disponíveis

O `CookieJar` resolve os seguintes placeholders dinâmicos dentro dos textos dos steps (endpoints, bodies, valores esperados):

| Placeholder      | Resolve para                          |
|-------------------|------------------------------------------|
| `{year}`          | Ano corrente (ex.: `2026`)               |
| `{timestamp}`     | `Date.now()` em milissegundos            |
| `{uuid}`          | UUID v4 aleatório                        |
| `{nomeQualquer}`  | Valor armazenado via `ctx.jar.set()`     |

## Tecnologias

- [Playwright](https://playwright.dev/) `^1.61.1`
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) `^9.2.0`
- TypeScript `^5.8.3`

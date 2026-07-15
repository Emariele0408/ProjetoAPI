import { createBdd, DataTable } from 'playwright-bdd';
import { test, expect, ScenarioContext } from './fixtures';

const { When, Then } = createBdd(test);

/**
 * Lê um valor de um objeto por caminho pontilhado, com suporte a índices de array.
 * Ex.: 'items[0].groupId', 'author.lastName', '[2].title'
 */
function getByPath(source: unknown, path: string): unknown {
  const segments = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter((s) => s.length > 0);

  let current: unknown = source;
  for (const segment of segments) {
    if (current == null) return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
}

/** Extrai o JSON da coluna BODY de uma DataTable e resolve placeholders. */
function resolveBody(ctx: ScenarioContext, table: DataTable): unknown {
  const raw = table.hashes()[0]?.BODY;
  if (raw === undefined) {
    throw new Error("A tabela deve ter uma coluna 'BODY' com o JSON do corpo.");
  }
  return JSON.parse(ctx.jar.resolve(raw));
}

// ---------------------------------------------------------------------------
// Requisições
// ---------------------------------------------------------------------------

When(
  'Envio uma requisição GET para o endpoint {string}',
  async ({ ctx }, endpoint: string) => {
    ctx.setResponse(await ctx.driver.get(ctx.jar.resolve(endpoint)));
  },
);

When(
  'Envio uma requisição DELETE para o endpoint {string}',
  async ({ ctx }, endpoint: string) => {
    ctx.setResponse(await ctx.driver.delete(ctx.jar.resolve(endpoint)));
  },
);

When(
  'Envio uma requisição POST para o endpoint {string}',
  async ({ ctx }, endpoint: string, table: DataTable) => {
    const body = resolveBody(ctx, table);
    ctx.setResponse(await ctx.driver.post(ctx.jar.resolve(endpoint), body));
  },
);

When(
  'Envio uma requisição PUT para o endpoint {string}',
  async ({ ctx }, endpoint: string, table: DataTable) => {
    const body = resolveBody(ctx, table);
    ctx.setResponse(await ctx.driver.put(ctx.jar.resolve(endpoint), body));
  },
);

// ---------------------------------------------------------------------------
// Asserções e captura
// ---------------------------------------------------------------------------

Then(
  'A resposta deve retornar o código {string}',
  async ({ ctx }, expected: string) => {
    const response = ctx.requireResponse();
    expect(
      response.status(),
      `Corpo da resposta: ${await response.text()}`,
    ).toBe(Number(expected));
  },
);

Then(
  'Armazeno o campo {string} da resposta em uma variável chamada {string}',
  async ({ ctx }, field: string, varName: string) => {
    const value = getByPath(await ctx.body(), field);
    expect(value, `Campo '${field}' não encontrado na resposta`).toBeDefined();
    ctx.jar.set(varName, value);
  },
);

Then(
  'O campo {string} da resposta deve ser igual a {string}',
  async ({ ctx }, field: string, expected: string) => {
    const value = getByPath(await ctx.body(), field);
    expect(String(value)).toBe(ctx.jar.resolve(expected));
  },
);

Then(
  'O campo {string} da resposta deve existir',
  async ({ ctx }, field: string) => {
    const value = getByPath(await ctx.body(), field);
    expect(value, `Campo '${field}' não encontrado na resposta`).toBeDefined();
  },
);

Then('A resposta deve conter uma lista não vazia', async ({ ctx }) => {
  const body = await ctx.body();
  expect(Array.isArray(body), 'A resposta não é uma lista').toBe(true);
  expect((body as unknown[]).length).toBeGreaterThan(0);
});

Then(
  'A resposta deve conter os campos:',
  async ({ ctx }, table: DataTable) => {
    const body = await ctx.body();
    for (const { CAMPO, VALOR } of table.hashes()) {
      const value = getByPath(body, CAMPO);
      if (VALOR === undefined || VALOR === '') {
        expect(value, `Campo '${CAMPO}' não encontrado`).toBeDefined();
      } else {
        expect(String(value)).toBe(ctx.jar.resolve(VALOR));
      }
    }
  },
);
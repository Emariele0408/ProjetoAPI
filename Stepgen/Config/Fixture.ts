import { test as base } from 'playwright-bdd';
import { APIResponse } from '@playwright/test';
import { CookieJar } from './CookieJar';
import { Driver } from './Drivers/Driver';

/**
 * Estado compartilhado entre os steps de um mesmo cenário.
 * Cada cenário recebe uma instância nova (fixtures são recriadas por teste).
 */
export class ScenarioContext {
  readonly jar = new CookieJar();
  readonly driver: Driver;

  lastResponse?: APIResponse;
  private lastBodyCache?: unknown;

  constructor(driver: Driver) {
    this.driver = driver;
  }

  setResponse(response: APIResponse): void {
    this.lastResponse = response;
    this.lastBodyCache = undefined;
  }

  requireResponse(): APIResponse {
    if (!this.lastResponse) {
      throw new Error('Nenhuma requisição foi enviada ainda neste cenário.');
    }
    return this.lastResponse;
  }

  /** Faz o parse do corpo da última resposta como JSON (com cache). */
  async body<T = unknown>(): Promise<T> {
    if (this.lastBodyCache === undefined) {
      const response = this.requireResponse();
      const text = await response.text();
      this.lastBodyCache = text ? JSON.parse(text) : null;
    }
    return this.lastBodyCache as T;
  }
}

type Fixtures = {
  ctx: ScenarioContext;
};

export const test = base.extend<Fixtures>({
  ctx: async ({ request }, use) => {
    const context = new ScenarioContext(new Driver(request));
    await use(context);
  },
});

export { expect } from '@playwright/test';
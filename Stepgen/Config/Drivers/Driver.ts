import { APIRequestContext, APIResponse } from '@playwright/test';

/**
 * Wrapper fino sobre o APIRequestContext nativo do Playwright.
 * Centraliza os verbos HTTP para os steps não dependerem diretamente da API do Playwright.
 *
 * A baseURL e os headers padrão vêm da config (use.baseURL / use.extraHTTPHeaders),
 * então aqui só passamos o path relativo (ex.: '/api/v1/Books').
 */
export class Driver {
  constructor(private readonly request: APIRequestContext) {}

  async get(endpoint: string): Promise<APIResponse> {
    return this.request.get(endpoint);
  }

  async post(endpoint: string, body?: unknown): Promise<APIResponse> {
    return this.request.post(endpoint, { data: body });
  }

  async put(endpoint: string, body?: unknown): Promise<APIResponse> {
    return this.request.put(endpoint, { data: body });
  }

  async patch(endpoint: string, body?: unknown): Promise<APIResponse> {
    return this.request.patch(endpoint, { data: body });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(endpoint);
  }
}
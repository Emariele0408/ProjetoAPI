import { APIRequestContext, APIResponse } from '@playwright/test';

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
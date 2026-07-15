import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

/**
 * Gera os arquivos .spec.js a partir dos .feature (Gherkin) usando playwright-bdd.
 * - features: fonte única de teste, em português com keywords Gherkin em inglês.
 * - steps: step definitions genéricas e parametrizadas.
 */
const testDir = defineBddConfig({
  features: 'Tests/Features/**/*.feature',
  steps: 'stepgen/Config/**/*.ts',
});

const BASE_URL =
  process.env.BASE_URL ?? 'https://fakerestapi.azurewebsites.net';

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.WORKERS ? Number(process.env.WORKERS) : undefined,
  reporter: [
    ['line'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results.xml' }],
  ],
  use: {
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    trace: 'retain-on-failure',
  },
});
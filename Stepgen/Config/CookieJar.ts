/**
 * Guarda variáveis dentro do escopo de um cenário e resolve placeholders {var}.
 *
 * Placeholders dinâmicos suportados (não precisam ser armazenados antes):
 *   {year}       -> ano corrente (ex.: 2026)
 *   {timestamp}  -> Date.now() em milissegundos
 *   {uuid}       -> UUID v4 aleatório
 *
 * Qualquer outro {nome} é resolvido a partir das variáveis armazenadas via set().
 */
export class CookieJar {
  private readonly vars = new Map<string, string>();

  // ---------------------------------------------------------------------
  // Armazenamento
  // ---------------------------------------------------------------------

  set(name: string, value: unknown): void {
    this.vars.set(name, String(value));
  }

  get(name: string): string | undefined {
    return this.vars.get(name);
  }

  // ---------------------------------------------------------------------
  // Resolução de placeholders
  // ---------------------------------------------------------------------

  /**
   * Substitui todas as ocorrências de {nome} no texto.
   * Lança erro se um placeholder não-dinâmico não tiver valor armazenado.
   */
  resolve(text: string): string {
    return text.replace(/\{([a-zA-Z0-9_]+)\}/g, (_match, key: string) => {
      const dynamic = this.dynamic(key);
      if (dynamic !== undefined) return dynamic;

      const stored = this.vars.get(key);
      if (stored === undefined) {
        throw new Error(
          `Placeholder '{${key}}' não encontrado. Armazene o valor antes de usá-lo.`,
        );
      }
      return stored;
    });
  }

  private dynamic(key: string): string | undefined {
    switch (key) {
      case 'year':
        return String(new Date().getFullYear());
      case 'timestamp':
        return String(Date.now());
      case 'uuid':
        return CookieJar.uuid();
      default:
        return undefined;
    }
  }

  // ---------------------------------------------------------------------
  // Utilitários
  // ---------------------------------------------------------------------

  private static uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
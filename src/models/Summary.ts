import { ISummary } from "../interfaces/ISummary";

/**
 * Representação do Sumário
 */
export class Summary implements ISummary {
  constructor(readonly resourceURI: string, readonly name: string) {}
}

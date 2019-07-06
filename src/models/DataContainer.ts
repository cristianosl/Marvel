/**
 * Interface para o container de <T>
 * @typeparam M models
 */
export class DataContainer<M> {
  /**
   *
   * @param offset Registro inicial
   * @param limit Limite de registros da consulta
   * @param total Total dos registros retornados
   * @param count Total da página
   * @param results Resultados
   */
  constructor(
    readonly offset: number = 0,
    readonly limit: number = 20,
    readonly total: number,
    readonly count: number,
    readonly results: M[]
  ) {}
}

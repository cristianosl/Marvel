/**
 * Retorno JSON dos parâmetros para formar uma consulta
 */
export interface ICharacterParametersJSON {
  /**
   * Limite máximo dos resultados que devem ser retornados na página
   */
  limit: number;
  /**
   * Inicio da listagem dos registros
   */
  offset: number;
  /**
   * Ordenação de acordo com o item marcado. ex.: -title
   */
  orderBy?: string;
  /**
   * Ids dos personagens. Podem estar separados por vírgula
   */
  comics?: number | string;
  /**
   * Ids das séries
   */
  series?: number | string;
  /**
   * Ids dos eventos
   */
  events?: number | string;
  /**
   * Ids das estórias
   */
  stories?: number | string;
}
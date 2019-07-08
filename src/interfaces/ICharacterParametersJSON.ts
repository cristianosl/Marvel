/**
 * Retorno JSON dos parâmetros para formar uma consulta
 */
export interface ICharacterParametersJSON {
  limit: number;
  offset: number;
  orderBy?: string;
  comics?: number | string;
  series?: number | string;
  events?: number | string;
  stories?: number | string;
}
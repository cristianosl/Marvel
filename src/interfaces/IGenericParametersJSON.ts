/**
 * Retorno JSON dos parâmetros para formar uma consulta
 */
export interface IGenericParametersJSON {
  limit: number;
  offset: number;
  orderBy?: string;
}
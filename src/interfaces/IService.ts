import { AxiosInstance, AxiosResponse } from "axios";
import { DataWrapper } from '../models/DataWrapper'
import { IParamsQuery } from "./IParamsQuery";

/**
 * Interface de serviços
 * @typeparam T Model
 * @typeparam J Interface para o json que será retornado
 */
export interface IService<T, J> {
  /**
   * Instancia Axios
   */
  _service: AxiosInstance;
  /**
   * Endpoint que será consumido
   */
  endpoint: string;

  /**
   * Parametros da consulta
   */
  queryParams?: IParamsQuery<J>;
  /**
   * Formato do wrapper que deverá ser retornado
   */
  getDataWrapper(): Promise<AxiosResponse<DataWrapper<T>>>
}

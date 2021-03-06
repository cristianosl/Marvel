import { MarvelService } from "./MarvelService";
import { DataWrapper } from "../models";
import { IService, IErrorService } from "../interfaces";
import { AxiosResponse } from "axios";
import { IGenericParametersJSON } from "../interfaces/IGenericParametersJSON";
import { GenericParameters } from "../models/GenericParameters";

/**
 * Service generico para marvel
 * @typeparam M model
 */
export class GenericService<M> extends MarvelService
  implements IService<M, IGenericParametersJSON> {
  /**
   * Armazena a requição da instancia para não precisar chamar novamente
   */
  private _res?: AxiosResponse<DataWrapper<M>>;

  /**
   * Deve ser informado o caminho do endpoint
   * @param endpoint Endpoint. Ex.: /comics
   */
  constructor(
    readonly endpoint: string,
    public queryParams?: GenericParameters
  ) {
    super();
  }

  /**
   * Retorna um DataWrapper com o modelo informado
   * @returns DataWrapper com o modelo
   */
  getDataWrapper(): Promise<AxiosResponse<DataWrapper<M>>> {
    // Caso não exista uma requição
    if (!this._res) {
      // Mescla os parametros defaults com os novos recebidos
      let merged = {};
      if (this.queryParams) {
        merged = { ...this.queryJSONAuth, ...this.queryParams.toJSON() };
      } else {
        merged = { ...this.queryJSONAuth };
      }
      return this._service
        .get<DataWrapper<M>>(this.endpoint, {
          params: merged
        })
        .then(res => {
          this._res = res;
          return res;
        })
        .catch((error: IErrorService) => {
          console.log("ERROR", error.response.data);
          throw new Error("ERRO: Não foi possível obter os dados selecionados");
        });
    } else {
      return new Promise((resolve, reject) => {
        resolve(this._res);
      });
    }
  }

  /**
   * Obtem uma listagem dos models
   * @returns Retorna uma promisse com os modelos
   */
  getModels(): Promise<M[]> {
    // Retorna uma promisse com os personagens encontrados
    return this.getDataWrapper().then(res => {
      let models: M[] = [];
      models = res.data.data.results;
      return models;
    });
  }
}

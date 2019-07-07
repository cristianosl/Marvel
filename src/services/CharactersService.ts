import { MarvelService } from "./MarvelService";
import { Character, CharacterParameters } from "../models/characters/index";
import { AxiosResponse } from "axios";
import { DataWrapper } from "../models";
import { IService, ICharacterParametersJSON, IErrorService } from "../interfaces";

/**
 * Realiza uma consulta de personagens
 */
export class CharactersService extends MarvelService
  implements IService<Character, ICharacterParametersJSON> {
  // Armazena a requição da instancia para não precisar chamar novamente
  private _res?: AxiosResponse<DataWrapper<Character>>;

  public endpoint = "/characters";
  /**
   * Construtor
   * @param endpoint Endpoint destas consultas
   * @param queryParams Argumentos da consulta (opcional)
   */
  constructor(public queryParams?: CharacterParameters) {
    super();
  }

  public getDataWrapper(): Promise<AxiosResponse<DataWrapper<Character>>> {
    // Mescla os parametros defaults com os novos recebidos
    let merged = {};
    if (this.queryParams) {
      merged = { ...this.queryJSONAuth, ...this.queryParams.toJSON() };
    } else {
      merged = { ...this.queryJSONAuth };
    }

    // Caso não exista uma requição
    if (!this._res) {
      // Retorna uma promisse com os personagens encontrados
      return this._service
        .get<DataWrapper<Character>>(this.endpoint, {
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

      // Caso já exista uma requisição retorna ela novamente
    } else {
      return new Promise((resolve, reject) => {
        resolve(this._res);
      });
    }
  }

  /**
   * Obtem uma listagem de personagens
   * @param args Listagem dos parametros que podem ser utilizadas para consulta
   */
  getCharacters(): Promise<Character[]> {
    // Retorna uma promisse com os personagens encontrados
    return this.getDataWrapper().then(res => {
      let characters: Character[] = [];
      if (res.data && res.data.data && res.data.data.results) {
        characters = res.data.data.results;
      }
      return characters;
    });
  }
}

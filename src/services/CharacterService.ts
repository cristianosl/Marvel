import { MarvelService } from "./MarvelService";
import {
  Character,
  CharacterDataWrapper,
  CharacterParameters
} from "../models/characters/index";
import { AxiosResponse } from "axios";

/**
 * Realiza uma consulta de personagens
 */
export class CharacterService extends MarvelService {

  // Argumentos da consulta
  private _args?: CharacterParameters;

  // Armazena a requição da instancia para não precisar chamar novamente
  private _res?: AxiosResponse<CharacterDataWrapper>;

  /**
   * Construtor
   * @param args Argumentos da consulta (opcional)
   */
  constructor(args?: CharacterParameters) {
    super();
    this._args = args;
  }

  public getConsulta(): Promise<AxiosResponse<CharacterDataWrapper>> {
    // Mescla os parametros defaults com os novos recebidos
    let merged = {};
    if (this._args) {
      merged = { ...this.queryJSONAuth, ...this._args.toJSON() };
    } else {
      merged = { ...this.queryJSONAuth };
    }

    // Caso não exista uma requição
    if (!this._res) {
      // Retorna uma promisse com os personagens encontrados
      return this._service
        .get<CharacterDataWrapper>("/characters", {
          params: merged
        })
        .then(res => {
          this._res = res;
          return res;
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
    return this.getConsulta().then(res => {
      let characters: Character[] = [];
      if (res.data && res.data.data && res.data.data.results) {
        characters = res.data.data.results;
      }
      return characters;
    });
  }
}

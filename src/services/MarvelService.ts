import { IService } from "./IService";
import axios, { AxiosInstance } from "axios";
import { Md5 } from "ts-md5/dist/md5";

/**
 * Formato de retorno JSON dos parâmetros padrão
 */
interface IQueryJSON {
  ts: number;
  apikey: string;
  hash: string;
}

/**
 * Define os padrões para todos os serviços que serão consumidos pelas classes de serviços da Marvel
 */
export abstract class MarvelService implements IService {
  // Instancia axios
  _service: AxiosInstance;
  // timestamp
  private _ts: number;
  // chave privada
  private _prk: string;
  // chave publica
  protected _puk: string;
  // hash = md5(_ts + _prk + _puk)
  private _hash: string;

  constructor() {
    // Inicia os padrões de consumo para o axios
    this._service = axios.create({
      baseURL: "http://gateway.marvel.com/v1/public",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    });

    this._ts = new Date().getTime();
    this._prk = process.env.REACT_APP_PRIVATE_KEY as string;
    this._puk = process.env.REACT_APP_PUBLIC_KEY as string;
    this._hash = Md5.hashStr(this._ts + this._prk + this._puk) as string;
  }

  /**
   * Retorna os parametros padrões
   */
  protected get queryJSON(): IQueryJSON {
    return {
      ts: this._ts,
      apikey: this._puk,
      hash: this._hash
    };
  }
}

import { IModel } from "../IModel";

/**
 * Retorno JSON dos parâmetros para formar uma consulta
 */
export interface ICharacterParametersJSON {
  limit: number;
  offset: number;
  comics?: number | string;
  series?: number | string;
  events?: number | string;
}

/**
 * Define os parametros de entradas permitidos para realizar uma busca por personagens
 */
export class CharacterParameters implements IModel {
  constructor(
    public limit: number = 20,
    public offset: number = 0,
    public comics: number[] = [],
    public events: number[] = [],
    public series: number[] = []
  ) {}

  /**
   * Retorna um json para ser utilizado nas buscas
   */
  toJSON(): ICharacterParametersJSON {
    let r: any = {};
    r.limit = this.limit;
    r.offset = this.offset;
    if (this.comics.length > 0) {
      r.comics = this.comics.join(",");
    }
    if (this.events.length > 0) {
      r.events = this.events.join(",");
    }
    if (this.series.length > 0) {
      r.series = this.series.join(",");
    }
    return r;
  }
}

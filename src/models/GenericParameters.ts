import { IGenericParametersJSON, IParamsQuery } from "../interfaces";


/**
 * Define os parametros de entradas permitidos para realizar uma busca por personagens
 */
export class GenericParameters implements IParamsQuery<IGenericParametersJSON> {
  constructor(
    public limit: number = 18,
    public offset: number = 0,
    public orderBy: string[] = [],
    public comics: number[] = [],
    public events: number[] = [],
    public series: number[] = []
  ) { }

  /**
   * Retorna um json para ser utilizado nas buscas
   */
  toJSON(): IGenericParametersJSON {
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
    if (this.orderBy.length > 0) {
      r.orderBy = this.orderBy.join(",");
    }
    return r;
  }
}

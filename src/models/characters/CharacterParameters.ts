import { IParamsQuery, ICharacterParametersJSON } from "../../interfaces";

/**
 * Define os parametros de entradas permitidos para realizar uma busca por personagens
 */
export class CharacterParameters
  implements IParamsQuery<ICharacterParametersJSON> {
  constructor(
    public limit: number = 18,
    public offset: number = 0,
    public orderBy: string[] = [],
    public comics: number[] = [],
    public events: number[] = [],
    public series: number[] = [],
    public stories: number[] = []
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
    if (this.stories.length > 0) {
      r.stories = this.stories.join(",");
    }
    if (this.orderBy.length > 0) {
      r.orderBy = this.orderBy.join(",");
    }
    return r;
  }

  toQueryString(): string {
    const j = this.toJSON();
    let a: string[] = [];
    if (j.comics) a.push("comics=" + j.comics);
    if (j.events) a.push("events=" + j.events);
    if (j.series) a.push("series=" + j.series);
    if (j.stories) a.push("stories=" + j.stories);
    // if (j.limit) a.push("limit=" + j.limit);
    if (j.offset) a.push("offset=" + j.offset);
    return a.join("&");
  }
}

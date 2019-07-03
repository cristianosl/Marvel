import { IList } from "./IList";
import { Summary } from "./Summary";
import { IModel } from "./IModel";

export class List implements IList<Summary>, IModel {
  constructor(
    readonly available: number,
    readonly returned: number,
    readonly collectionURI: string,
    readonly items: Summary[]
  ) {}
}

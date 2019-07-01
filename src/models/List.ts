import { IList } from "./IList";
import { Summary } from "./Summary";

export class List implements IList<Summary> {
  constructor(
    readonly available: number,
    readonly returned: number,
    readonly collectionURI: string,
    readonly items: Summary[]
  ) {}
}

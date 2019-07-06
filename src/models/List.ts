import { IList } from "../interfaces/IList";
import { Summary } from "./Summary";

/**
 * Listam dos registros
 */
export class List implements IList<Summary> {
  constructor(
    readonly available: number,
    readonly returned: number,
    readonly collectionURI: string,
    readonly items: Summary[]
  ) {}
}

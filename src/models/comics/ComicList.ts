import { IList } from "../IList";
import { ComicsSummary } from "./ComicsSummary";

export class ComicList implements IList<ComicsSummary> {
  constructor(
    readonly available: number,
    readonly returned: number,
    readonly collectionURI: string,
    readonly items:[]
  ) {}
}

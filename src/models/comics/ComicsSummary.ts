import { ISummary } from "../ISummary";

export class ComicsSummary implements ISummary {
  constructor(readonly resourceURI: string, readonly name: string) {}
}

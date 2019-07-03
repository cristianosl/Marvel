import { ISummary } from "./ISummary";
import { IModel } from "./IModel";

export class Summary implements ISummary, IModel {
  constructor(readonly resourceURI: string, readonly name: string) {}
}

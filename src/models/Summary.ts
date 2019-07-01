import { ISummary } from "./ISummary";

export class Summary implements ISummary {
  constructor(readonly resourceURI: string, readonly name: string) {}
}

import { IModel } from "../IModel";
/**
 * Model de personagens
 */
export class Character implements IModel {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly modified: Date,
    readonly resourceURI: string
  ) {}
}

import { IModel } from "../IModel";
import Image from "../Image";
/**
 * Model de personagens
 */
export class Character implements IModel {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly modified: Date,
    readonly thumbnail: Image,
    readonly resourceURI: string
  ) {}
}

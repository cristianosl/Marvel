import { IModel } from "../../interfaces/IModel";
import { Image } from "../Image";
import { List } from "../List";
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
    readonly resourceURI: string,
    readonly comics?: List,
    readonly stories?: List,
    readonly events?: List,
    readonly series?: List
  ) {}
}

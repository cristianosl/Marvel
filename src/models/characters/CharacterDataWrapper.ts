import { CharacterDataContainer } from "./CharacterDataContainer";
import { IModel } from "../IModel";

/**
 * Wrapper dos dados dos personagens
 */
export class CharacterDataWrapper implements IModel {
  constructor(
    readonly code?: number,
    readonly status?: string,
    readonly data?: CharacterDataContainer
  ) {}
}

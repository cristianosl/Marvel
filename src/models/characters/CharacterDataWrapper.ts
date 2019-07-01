import { CharacterDataContainer } from "./CharacterDataContainer";

/**
 * Wrapper dos dados dos personagens
 */
export class CharacterDataWrapper {
  constructor(
    readonly code?: number,
    readonly status?: string,
    readonly data?: CharacterDataContainer
  ) {}
}

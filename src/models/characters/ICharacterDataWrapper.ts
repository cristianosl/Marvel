import { ICharacterDataContainer } from "./ICharacterDataContainer";

/**
 * Wrapper dos dados dos personagens
 */
export interface ICharacterDataWrapper {
  code?: number;
  status?: string;
  data?: ICharacterDataContainer;
}

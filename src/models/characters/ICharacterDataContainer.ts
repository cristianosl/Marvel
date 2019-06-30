import { Character } from "./Character";

/**
 * Interface para o container de personagens
 */
export interface ICharacterDataContainer {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Character[];
}

import { Character } from "./Character";

export interface ICharacterDataContainer {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Character[];
}

import { Character } from "./Character";
import { IModel } from "..";

/**
 * Interface para o container de personagens
 */
export class CharacterDataContainer implements IModel {
  constructor(
    readonly offset: number = 0,
    readonly limit: number = 20,
    readonly total?: number,
    readonly count?: number,
    readonly results?: Character[]
  ) {}
}

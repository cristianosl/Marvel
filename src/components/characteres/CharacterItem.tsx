import * as React from "react";
import { Character } from "../../models/index";

export const CharacterItem: React.FC<Character> = (character) => (
  <div className="character-item">
    <div className="character-item__id">{character.id}</div>
    <div className="character-item__name">{character.name}</div>
    <div className="character-item__resourceURI">{character.resourceURI}</div>
  </div>
);

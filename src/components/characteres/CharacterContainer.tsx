import * as React from "react";
import { ICharacterDataContainer, Character } from "../../models/characters";
import { CharacterItem } from "./CharacterItem";
import Image from "../../models/Image";

export const CharacterContainer: React.FC<ICharacterDataContainer> = props => {
  let character = new Character(
    1,
    "nome",
    "descricao",
    new Date(),
    new Image("jpg", ""),
    ""
  );
  return (
    <div className="character-container">
      <CharacterItem {...character} />
    </div>
  );
};

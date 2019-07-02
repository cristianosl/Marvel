import React from "react";
import { CharacterItem } from "../CharacterItem";
import { shallow } from "enzyme";
import { Character, Image } from "../../../models";

it("Renderizar o <CharacterItem /> corretamente", () => {
  let character = new Character(
    1,
    "nome",
    "descricao",
    new Date(),
    new Image("imagem", "jpg"),
    "http://www.1.com"
  );
  shallow(<CharacterItem character={character} />);
});

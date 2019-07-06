import React, { useDebugValue } from "react";
import { CharacterContainer } from "../CharacterContainer";
import { CharacterItem } from "../CharacterItem";
import { shallow } from "enzyme";
import { Character } from "../../../models/characters";
import { DataContainer, Image } from "../../../models";

it("Renderizar o <CharacterContainer /> corretamente", () => {
  let c1 = new Character(
    1,
    "nome",
    "descricao",
    new Date(),
    new Image("imagem", "jpg"),
    "http://www.1.com"
  );
  let c2 = new Character(
    2,
    "nome2",
    "descricao2",
    new Date(),
    new Image("imagem 2", "jpg"),
    "http://www.2.com"
  );
  let characters: Character[] = [];
  characters.push(c1);
  characters.push(c2);
  let cdc = new DataContainer<Character>(
    undefined,
    undefined,
    undefined,
    undefined,
    characters
  );
  const wrapper = shallow(<CharacterContainer {...cdc} />);
  const item1 = <CharacterItem character={c1} />;
  const item2 = <CharacterItem character={c2} />;
  expect(wrapper.contains(item1)).toEqual(true);
  expect(wrapper.contains(item2)).toEqual(true);
});

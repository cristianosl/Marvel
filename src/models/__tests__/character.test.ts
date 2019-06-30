import { Character } from "../index";

it("instancia um novo personagem", () => {
  let id = 1;
  let name = "NOME";
  let modified = new Date();
  let resourceURI = "https://www.marvel.com/";
  let character = new Character(id, name, modified, resourceURI);

  expect(character.id).toBe(id);
  expect(character.name).toBe(name);
  expect(character.modified).toBe(modified);
  expect(character.resourceURI).toBe(resourceURI);
});

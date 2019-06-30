import { Character } from "../index";
import Image from "../Image";

it("instancia um novo personagem", () => {
  let id = 1;
  let name = "NOME";
  let description = "Descrição";
  let thumbnail = new Image("jpg", "http://www.google.com.br/logo.jpg");
  let modified = new Date();
  let resourceURI = "https://www.marvel.com/";
  let character = new Character(id, name, description, modified, thumbnail, resourceURI);

  expect(character.id).toBe(id);
  expect(character.name).toBe(name);
  expect(character.description).toBe(description);
  expect(character.modified).toBe(modified);
  expect(character.thumbnail).toBe(thumbnail);
  expect(character.resourceURI).toBe(resourceURI);
});

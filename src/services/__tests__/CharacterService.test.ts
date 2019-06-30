import { CharacterService } from "../CharacterService";
import { Character } from "../../models";
import { CharacterParameters } from "../../models/characters";

describe("Testando consumo de serviços referente aos personagens", () => {
  xit("Deve retornar uma lista de 20 personagens", async () => {
    expect.assertions(1);
    let service = new CharacterService();
    const characters: Character[] = await service.getCharacters();
    expect(characters.length).toBe(20);
  });

  xit("Deve retornar apenas 1 registro quando especificado limit=1", async () => {
    expect.assertions(1);
    let params = new CharacterParameters(1);
    let service = new CharacterService();
    const characters: Character[] = await service.getCharacters(params);
    expect(characters.length).toBe(1);
  });

  it("Deve retornar apenas personagens onde comics=21366 (Avengers: The Initiative (2007) #14)", async () => {
    expect.assertions(1);
    let params = new CharacterParameters();
    params.comics = [21366];
    let service = new CharacterService();
    const characters: Character[] = await service.getCharacters(params);
    expect(characters.length).toBeGreaterThan(0);
  });
});

import { CharacterService } from "../CharacterService";
import { Character } from "../../models";
import { CharacterParameters } from "../../models/characters";

describe("Testando consumo de serviços referente aos personagens", () => {
  let _service: CharacterService;
  let _characters: Character[];

  beforeAll(() => {
    _service = new CharacterService();
  });

  xit("Deve retornar uma lista de 20 personagens", async () => {
    expect.assertions(1);
    _characters = await _service.getCharacters();
    expect(_characters.length).toBe(20);
  });

  xit("Deve retornar apenas 1 registro quando especificado limit=1", async () => {
    expect.assertions(1);
    let params = new CharacterParameters(1);
    _characters = await _service.getCharacters(params);
    expect(_characters.length).toBe(1);
  });

  xit("Deve retornar apenas personagens onde comics=21366 (Avengers: The Initiative (2007) #14)", async () => {
    expect.assertions(1);
    let params = new CharacterParameters();
    params.comics = [21366];
    _characters = await _service.getCharacters(params);
    expect(_characters.length).toBeGreaterThan(0);
  });

  xit("Deve retornar apenas personagens onde series=1945 (Avengers: The Initiative (2007 - 2010))", async () => {
    expect.assertions(1);
    let params = new CharacterParameters();
    params.series = [1945];
    _characters = await _service.getCharacters(params);
    expect(_characters.length).toBeGreaterThan(0);
  });

  it("Deve retornar apenas personagens onde events=269 (Secret Invasion)", async () => {
    expect.assertions(1);
    let params = new CharacterParameters();
    params.events = [269];
    _characters = await _service.getCharacters(params);
    expect(_characters.length).toBeGreaterThan(0);
  });

  xit("Não deve retornar resultados para a consulta ", async () => {
    expect.assertions(1);
    let params = new CharacterParameters();
    params.comics = [21366];
    params.series = [3374];
    params.events = [269];
    _characters = await _service.getCharacters(params);
    expect(_characters.length).toBe(0);
  });
});

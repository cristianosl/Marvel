import { CharacterService } from "../../services/CharacterService";
import { Character } from "../../models";

describe('Examinando consultas dos personagens', () => {

    test("Deve retornar uma lista de personagens", () => {
        expect.assertions(1);
        let service = new CharacterService();
        return service.getCharacters()
            .then((characters: Character[]) => expect(characters.length).toBeGreaterThan(0))
            .catch(error => {
                console.log(error);
            });
    });


    // test("Deve retornar uma lista de personagens", () => {
    //     expect.assertions(1);
    //     let service = new CharacterService();
    //     return service.getCharacters()
    //         .then((characters: Character[]) => expect(characters.length).toBeGreaterThan(0))
    //         .catch(error => {
    //             console.log(error);
    //         });
    // });

});

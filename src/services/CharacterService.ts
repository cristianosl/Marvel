import { MarvelService } from "./MarvelService";
import { Character, ICharacterDataWrapper, ICharacterParameters } from "../models/characters/index";
import moment from 'moment';


export class CharacterService extends MarvelService {
    getCharacters(args?: ICharacterParameters): Promise<Character[]> {
        return this._service.get<ICharacterDataWrapper>("/characters", {
            params: this.jsonQuery
        })
            .then(res => {
                let characters: Character[] = [];
                if (res.data.data) {
                    let results = res.data.data.results;
                    if (results) {
                        results.forEach((character) => {
                            characters.push(new Character(character.id, character.name, moment(character.modified).toDate(), character.resourceURI));
                        });
                    }
                }
                return characters;
            });
    }

}
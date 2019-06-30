import { MarvelService } from "./MarvelService";
import {
  Character,
  ICharacterDataWrapper,
  CharacterParameters
} from "../models/characters/index";
import moment from "moment";
import Image from "../models/Image";

/**
 * Realiza uma consulta de personagens
 */
export class CharacterService extends MarvelService {
  /**
   * Obtem uma listagem de personagens
   * @param args Listagem dos parametros que podem ser utilizadas para consulta
   */
  getCharacters(args?: CharacterParameters): Promise<Character[]> {
    // Mescla os parametros defaults com os novos recebidos
    let merged = {};
    if (args) {
      merged = { ...this.queryJSON, ...args.toJSON() };
    } else {
      merged = { ...this.queryJSON };
    }

    // Retorna uma promisse com os personagens encontrados
    return this._service
      .get<ICharacterDataWrapper>("/characters", {
        params: merged
      })
      .then(res => {
        let characters: Character[] = [];
        if (res.data.data) {
          let results = res.data.data.results;
          if (results) {
            results.forEach(character => {
              characters.push(
                new Character(
                  character.id,
                  character.name,
                  character.description,
                  moment(character.modified).toDate(),
                  new Image(character.thumbnail.type, character.thumbnail.url),
                  character.resourceURI
                )
              );
            });
          }
        }
        return characters;
      });
  }
}

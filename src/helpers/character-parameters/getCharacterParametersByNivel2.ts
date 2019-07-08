import { CharacterParameters } from "../../models/characters";
import { NivelOption } from "../../models";
export const getCharacterParametersByNivel2 = (
  params: CharacterParameters,
  nivel2: NivelOption[]
): CharacterParameters => {
  let paramsNovo = params;
  paramsNovo.offset = 0;
  paramsNovo.comics = [];
  paramsNovo.series = [];
  paramsNovo.events = [];
  paramsNovo.stories = [];
  nivel2.forEach(itemNivel => {
    if (
      itemNivel.endpoint &&
      itemNivel.endpoint === "/comics" &&
      itemNivel.resource
    ) {
      paramsNovo.comics.push(itemNivel.resource.id);
    }
    if (
      itemNivel.endpoint &&
      itemNivel.endpoint === "/series" &&
      itemNivel.resource
    ) {
      paramsNovo.series.push(itemNivel.resource.id);
    }
    if (
      itemNivel.endpoint &&
      itemNivel.endpoint === "/events" &&
      itemNivel.resource
    ) {
      paramsNovo.events.push(itemNivel.resource.id);
    }
    if (
      itemNivel.endpoint &&
      itemNivel.endpoint === "/stories" &&
      itemNivel.resource
    ) {
      paramsNovo.stories.push(itemNivel.resource.id);
    }
  });
  return paramsNovo;
};

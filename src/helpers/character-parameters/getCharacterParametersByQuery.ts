import { CharacterParameters } from "../../models/characters";

/**
 * Retorna os parametros do personagem de acordo com a URL
 */
export const getCharacterParametersByQuery = () => {
  const params = new CharacterParameters();
  const paramsQuery = new URLSearchParams(window.location.search);
  const comics = paramsQuery.get("comics");
  const series = paramsQuery.get("series");
  const events = paramsQuery.get("events");
  const offset = paramsQuery.get("offset");
  if (comics) {
    const a = comics.split(",");
    params.comics = a.map(item => parseInt(item));
  }
  if (series) {
    const a = series.split(",");
    params.series = a.map(item => parseInt(item));
  }
  if (events) {
    const a = events.split(",");
    params.events = a.map(item => parseInt(item));
  }
  if (offset) {
    params.offset = parseInt(offset);
  }
  return params;
};

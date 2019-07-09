/**
 * Obtem os valores selecionados para o nível 2 de acordo com a URL
 */
export function getNivel2ValuesByQuery(): string[] {
  const paramsQuery = new URLSearchParams(window.location.search);
  const comics = paramsQuery.get("comics");
  const series = paramsQuery.get("series");
  const events = paramsQuery.get("events");
  let r: string[] = [];
  if (comics) r.push(...comics.split(","));
  if (series) r.push(...series.split(","));
  if (events) r.push(...events.split(","));
  return r;
}

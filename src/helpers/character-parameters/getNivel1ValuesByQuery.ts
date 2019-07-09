/**
 * Retorna os valores selecionados para o nível 1 de acordo com a URL
 */
export function getNivel1ValuesByQuery(): string[] {
  const paramsQuery = new URLSearchParams(window.location.search);
  const comics = paramsQuery.get("comics");
  const series = paramsQuery.get("series");
  const events = paramsQuery.get("events");
  let r: string[] = [];
  if (comics) r.push("/comics");
  if (series) r.push("/series");
  if (events) r.push("/events");
  return r;
}

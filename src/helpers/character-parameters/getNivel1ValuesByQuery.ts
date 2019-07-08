const paramsQuery = new URLSearchParams(window.location.search);
const comics = paramsQuery.get("comics");
const series = paramsQuery.get("series");
const events = paramsQuery.get("events");

export function getNivel1ValuesByQuery(): string[] {
  let r: string[] = [];
  if (comics) r.push("/comics");
  if (series) r.push("/series");
  if (events) r.push("/events");
  return r;
}

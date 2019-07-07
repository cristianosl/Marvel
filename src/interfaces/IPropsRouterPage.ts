import { match } from "react-router";

/**
 * Interface padrão para classes que são components chamados pelo react-router
 * @typeparam P Interface dos parâmetros que poderão ser chamados na URL
 */
export interface IPropsRouterPage<P> {
  history: History;
  location: Location;
  match: match<P>;
}

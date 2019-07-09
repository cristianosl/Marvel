import { createBrowserHistory } from "history";
import { CharacterParameters } from "../../models/characters/CharacterParameters";
const history = createBrowserHistory();
/**
 * Altera a URL de acordo com a consulta que está sendo executada
 * @param params Parâmetros utilizados na busca atual
 */
export const atualizarUrlByParams = (params: CharacterParameters) => {
  history.push({
    pathname: "/",
    search: params.toQueryString()
  });
};

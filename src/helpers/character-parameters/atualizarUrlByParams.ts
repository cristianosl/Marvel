import { createBrowserHistory } from "history";
import { CharacterParameters } from "../../models/characters/CharacterParameters";
const history = createBrowserHistory();
export const atualizarUrlByParams = (params: CharacterParameters) => {
  history.push({
    pathname: "/",
    search: params.toQueryString()
  });
};

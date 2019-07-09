import { IErrorServiceDetails } from "./IErrorServiceDetails";
import { AxiosResponse } from "axios";

/**
 * Interface para os erros retornados das consultas do axios
 */
export interface IErrorService {
  /**
   * Resposta do axios
   */
  response: AxiosResponse<IErrorServiceDetails>;
}

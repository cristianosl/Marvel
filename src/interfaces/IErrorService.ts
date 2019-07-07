import { IErrorServiceDetails } from "./IErrorServiceDetails";
import { AxiosResponse } from "axios";

export interface IErrorService {
  response: AxiosResponse<IErrorServiceDetails>;
}

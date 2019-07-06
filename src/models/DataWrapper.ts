import { DataContainer } from "./DataContainer";

/**
 * Wrapper dos dados de <M>
 * @typeparam M Modelo dos dados
 */
export class DataWrapper<M> {
  constructor(
    readonly code: number,
    readonly status: string,
    readonly data: DataContainer<M>
  ) {}
}

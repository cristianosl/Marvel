import { IResource } from "../interfaces";

export class NivelOption {
  constructor(
    readonly value: string,
    readonly text: string,
    readonly resource?: IResource,
    readonly endpoint?: string
  ) {}
}

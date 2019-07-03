import { IModel } from ".";

/**
 * Representação de uma URL
 */
export class Url implements IModel{
  constructor(readonly type: string, readonly url: string) {}
}

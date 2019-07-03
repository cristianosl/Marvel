import { IModel } from "./IModel";

/**
 * Representação de uma imagem
 */
export class Image implements IModel {
  constructor(readonly path: string, readonly extension: string) {}

  public getFullPath() {
    return `${this.path}.${this.extension}`;
  }
}

/**
 * Representação de uma imagem
 */
export class Image {
  constructor(readonly path: string, readonly extension: string) {}

  public getFullPath() {
    return `${this.path}.${this.extension}`;
  }
}

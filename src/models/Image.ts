/**
 * Representação de uma imagem
 */
export class Image {
  /**
   *
   * @param path Caminho da imagem
   * @param extension Extensão da imagem
   */
  constructor(readonly path: string, readonly extension: string) {}

  /**
   * Caminho completo da imagem
   */
  public getFullPath() {
    return `${this.path}.${this.extension}`;
  }
}

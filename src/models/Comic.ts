import { IModel, IResource } from "../interfaces";
/**
 * Modelo para Comic
 */
export class Comic implements IModel, IResource {
  /**
   *
   * @param id Id
   * @param title Título
   * @param description Descrição
   */
  constructor(
    readonly id: number,
    readonly title: string,
    readonly description: string
  ) {}
}

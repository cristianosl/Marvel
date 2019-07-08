import { IModel, IResource } from "../interfaces";
/**
 * Modelo para Serie
 */
export class Serie implements IModel, IResource {
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

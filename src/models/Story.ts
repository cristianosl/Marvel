import { IModel, IResource } from "../interfaces/index";
/**
 * Modelo para Story
 */
export class Story implements IModel, IResource {
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

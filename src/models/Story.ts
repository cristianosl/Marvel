import { IModel } from '../interfaces/IModel'
/**
 * Modelo para Story
 */
export class Story implements IModel {
    /**
     *
     * @param id Id
     * @param title Título
     * @param description Descrição
     */
    constructor(readonly id: number, readonly title: string, readonly description: string) {

    }
}
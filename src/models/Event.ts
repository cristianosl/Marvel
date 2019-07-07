import { IModel } from '../interfaces/IModel'
/**
 * Modelo para Event
 */
export class Event implements IModel {
    /**
     *
     * @param id Id
     * @param title Título
     * @param description Descrição
     */
    constructor(readonly id: number, readonly title: string, readonly description: string) {

    }
}
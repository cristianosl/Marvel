import { IModel } from '../interfaces/IModel'
/**
 * Modelo para Serie
 */
export class Serie implements IModel {
    /**
     *
     * @param id Id
     * @param title Título
     * @param description Descrição
     */
    constructor(readonly id: number, readonly title: string, readonly description: string) {

    }
}
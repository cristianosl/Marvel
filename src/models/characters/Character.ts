import { IModel } from "../IModel";

export class Character implements IModel {
    constructor(readonly id: number, readonly name: string, readonly modified: Date, readonly resourceURI: string){

    }
}
import { ICharacterDataContainer } from "./ICharacterDataContainer";

export interface ICharacterDataWrapper {
    code?: number;
    status?: string;
    data?: ICharacterDataContainer;
}
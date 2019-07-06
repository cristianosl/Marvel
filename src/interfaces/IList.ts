/**
 * Interface para listagem de registros
 * @typeparam M modelo dos dados
 */
export interface IList<M> {
    available: number;
    returned: number;
    collectionURI: string;
    items: M[]
}
export interface IList<T> {
    available: number;
    returned: number;
    collectionURI: string;
    items: T[]
}
/**
 * Parâmetros da consulta
 * @typeparam J Formato json, deve receber uma interface
 */
export interface IParamsQuery<J> {
    orderBy: string[];
    limit: number;
    offset: number;
    toJSON(): J;
}
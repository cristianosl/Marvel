import { IService } from "./IService";
import axios from 'axios';
import { Md5 } from 'ts-md5/dist/md5';

export abstract class MarvelService implements IService {
    _service: import("axios").AxiosInstance;
    private _ts: number;
    private _prk: string;
    protected _puk: string;
    private _hash: string | Int32Array;
    constructor() {
        this._service = axios.create({
            baseURL: "http://gateway.marvel.com/v1/public",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
            }
        });
        this._ts = new Date().getTime();
        this._prk = process.env.REACT_APP_PRIVATE_KEY as string;
        this._puk = process.env.REACT_APP_PUBLIC_KEY as string;

        this._hash = Md5.hashStr(this._ts + this._prk + this._puk);
    }

    protected get jsonQuery() {
        return {
            ts: this._ts,
            apikey: this._puk,
            hash: this._hash
        }
    }
}
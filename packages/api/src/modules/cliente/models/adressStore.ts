import { v4 as uuidv4 } from 'uuid';

interface AdressStore {
  id?: string;
  rua: string;
  numero: string | null;
  bairro: string;
  cidade: string;
  estado: string;
  creation_date: string;
}

export interface AdressStoreDB {
  id: string;
  rua: string;
  numero: string | null;
  bairro: string;
  cidade: string;
  estado: string;
  lat: string | null;
  lon: string | null;
  creation_date: string;
}

export class AdressStoreModel {
  private _id: string;
  private _rua: string;
  private _numero: string | null;
  private _bairro: string;
  private _cidade: string;
  private _estado: string;
  private _lat: string | null;
  private _lon: string | null;
  private _creation_date: string;

  constructor(
    id:string,
    rua: string,
    numero: string | null,
    bairro: string,
    cidade: string,
    estado: string,
    lat: string | null,
    lon: string | null,
    creation_date: string
  ) {
    this._id = id; // Gera um ID único
    this._rua = rua;
    this._numero = numero;
    this._bairro = bairro;
    this._cidade = cidade;
    this._estado = estado;
    this._lat = lat;
    this._lon = lon;
    this._creation_date = creation_date;
  }

  // Métodos getter
  public getid(): string {
    return this._id;
  }
  public getLon(): string | null  {
    return this._lon;
  }
  public getLat(): string | null  {
    return this._lat;
  }
  public getRua(): string   {
    return this._rua;
  }

  public getnumero(): string | null {
    return this._numero;
  }

  public getbairro(): string {
    return this._bairro;
  }

  public getcidade(): string {
    return this._cidade;
  }

  public getestado(): string {
    return this._estado;
  }

  public getcreation_date(): string {
    return this._creation_date;
  }



  public setrua(rua: string) {
    this._rua = rua;
  }

  public setnumero(numero: string | null) {
    this._numero = numero;
  }

  public setbairro(bairro: string) {
    this._bairro = bairro;
  }

  public setcidade(cidade: string) {
    this._cidade = cidade;
  }

  public setestado(estado: string) {
    this._estado = estado;
  }

  public setcreation_date(creation_date: string) {
    this._creation_date = creation_date;
  }
  public setLat(lat: string | null) {
    this._lat = lat;
  }
  
  public setLon(lon: string | null) {
    this._lon = lon;
  }

  public AdressStoreModel(): AdressStore {
    return {
    
      rua: this._rua,
      numero: this.getnumero(),
      bairro: this.getbairro(),
      cidade: this.getcidade(),
      estado: this.getestado(),
      creation_date: this.getcreation_date(),
    };
  }

  public AdressStoreDB(): AdressStoreDB {
    return {
      id: this.getid(),
      rua: this.getRua(),
      numero: this.getnumero(),
      bairro: this.getbairro(),
      cidade: this.getcidade(),
      estado: this.getestado(),
      lon: this.getLon(),
      lat: this.getLat(),
      creation_date: this.getcreation_date(),
    };
  }
}

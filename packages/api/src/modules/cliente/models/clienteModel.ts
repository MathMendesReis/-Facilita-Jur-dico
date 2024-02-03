import { v4 as uuidv4 } from 'uuid';

interface Cliente {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  rua: string;
  numero: string | null;
  bairro: string;
  cidade: string;
  estado: string;
  creation_date: string;
}

export interface ClienteDB {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  rua: string;
  numero: string | null;
  bairro: string;
  cidade: string;
  estado: string;
  lat: string | null;
  lon: string | null;
  creation_date: string;
}

export class ClienteModel {
  private _id: string;
  private _nome: string;
  private _email: string;
  private _telefone: string;
  private _rua: string;
  private _numero: string | null;
  private _bairro: string;
  private _cidade: string;
  private _estado: string;
  private _lat: string | null;
  private _lon: string | null;
  private _creation_date: string;

  constructor(
    nome: string,
    email: string,
    telefone: string,
    rua: string,
    numero: string | null,
    bairro: string,
    cidade: string,
    estado: string,
    lat: string | null,
    lon: string | null,
    creation_date: string
  ) {
    this._id = uuidv4(); // Gera um ID único
    this._nome = nome;
    this._email = email;
    this._telefone = telefone;
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

  public getnome(): string {
    return this._nome;
  }

  public getemail(): string {
    return this._email;
  }

  public gettelefone(): string {
    return this._telefone;
  }

  public getrua(): string {
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

  // Métodos setter
  public setnome(nome: string) {
    this._nome = nome;
  }

  public setemail(email: string) {
    this._email = email;
  }

  public settelefone(telefone: string) {
    this._telefone = telefone;
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

  public clienteModel(): Cliente {
    return {
      id: this.getid(),
      nome: this.getnome(),
      email: this.getemail(),
      telefone: this.gettelefone(),
      rua: this.getrua(),
      numero: this.getnumero(),
      bairro: this.getbairro(),
      cidade: this.getcidade(),
      estado: this.getestado(),
      creation_date: this.getcreation_date(),
    };
  }

  public clienteDB(): ClienteDB {
    return {
      id: this.getid(),
      nome: this.getnome(),
      email: this.getemail(),
      telefone: this.gettelefone(),
      rua: this.getrua(),
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

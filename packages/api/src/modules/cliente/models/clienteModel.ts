import { v4 as uuidv4 } from 'uuid';

interface Cliente {
  id?: string;
  nome: string;
  coordenada_x: number;
  coordenada_y: number;
  creation_date: string;
}


export interface ClienteDB {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  coordenada_x: number;
  coordenada_y: number;
  creation_date: string;
}

export class ClienteModel {
  private _id: string;
  private _nome: string;
  private _email: string;
  private _telefone: string;
  private _coordenada_x: number;
  private _coordenada_y: number;
  private _creation_date: string;

  constructor(
    nome: string,
    email: string,
    telefone: string,
    coordenada_x: number,
    coordenada_y: number,
    creation_date: string
  ) {
    this._id = uuidv4(); // Gera um ID único
    this._nome = nome;
    this._email = email;
    this._telefone = telefone;
    this._coordenada_x = coordenada_x;
    this._coordenada_y = coordenada_y;
    this._creation_date = creation_date;
  }

  // Métodos getter
  public getid(): string {
    return this._id;
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

  public getcoordenada_x(): number {
    return this._coordenada_x;
  }

  public getcoordenada_y(): number {
    return this._coordenada_y;
  }

  public getcreation_date(): string {
    return this._creation_date;
  }

  
  public setnome(nome: string) {
    this._nome = nome;
  }

  public setemail(email: string) {
    this._email = email;
  }

  public settelefone(telefone: string) {
    this._telefone = telefone;
  }

  public setcoordenada_x(coordenada_x: number) {
    this._coordenada_x = coordenada_x;
  }

  public setcoordenada_y(coordenada_y: number) {
    this._coordenada_y = coordenada_y;
  }

  public setcreation_date(creation_date: string) {
    this._creation_date = creation_date;
  }

  public clienteModel(): Cliente {
    return {
      id: this.getid(),
      nome: this.getnome(),
      coordenada_x: this.getcoordenada_x(),
      coordenada_y: this.getcoordenada_y(),
      creation_date: this.getcreation_date(),
    };
  }
  public clienteDB(): ClienteDB {
    return {
      id: this.getid(),
      nome: this.getnome(),
      email:this.getemail(),
      telefone:this.gettelefone(),
      coordenada_x: this.getcoordenada_x(),
      coordenada_y: this.getcoordenada_y(),
      creation_date: this.getcreation_date(),
    };
  }
}

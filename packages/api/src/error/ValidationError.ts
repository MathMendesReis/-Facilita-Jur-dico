import { BaseError } from "./BaseError";

export class ValidationError extends BaseError {
    constructor(
      message: string = "Erro de validação" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
      super(422, message);
    }
  }
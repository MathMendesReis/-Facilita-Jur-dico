import { BaseError } from "./BaseError";

export class InternalServerError extends BaseError {
    constructor(
      message: string = "Erro interno do servidor" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
      super(500, message);
    }
  }
  
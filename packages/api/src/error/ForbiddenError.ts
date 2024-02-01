import { BaseError } from "./BaseError";

export class ForbiddenError extends BaseError {
    constructor(
      message: string = "Acesso proibido" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
      super(403, message);
    }
  }
  
import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
    constructor(
      message: string = "Acesso não autorizado" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
      super(401, message);
    }
  }
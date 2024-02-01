import { ClienteDB } from "../repositories/cliente-repositori";

export class GetAllClienteUseCase {
    constructor(private clienteDB:ClienteDB) {}

    public getAll = async () => {
        const response = await this.clienteDB.getAll();
        return response
    }
}
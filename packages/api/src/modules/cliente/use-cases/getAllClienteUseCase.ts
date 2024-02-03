
import { CreateDB } from "../../../database/createTables";
import { ClienteDB } from "../models/clienteModel";
import { ClienteDB as ClienteDatabase } from "../repositories/cliente-repositori";

// Interface que representa a estrutura da resposta que retorna os clientes cadastrados
export class GetAllClienteUseCase {
    constructor(
        private clienteDB:ClienteDatabase,
        private createDB:CreateDB,
        ) {}

    public getAll = async () => {
        await this.createDB.createTablecliente_tb();
        await this.createDB.createTableadress_tb();
        const response = await this.clienteDB.findAllClients();
        const responseFormat: ClienteDB[] = response.map((item) => {
            return {
                id: item.id,
                nome: item.nome,
                email: item.email,
                telefone: item.telefone,
                rua: item.rua,
                numero: item.numero || null,
                bairro: item.bairro,
                cidade: item.cidade,
                estado: item.estado,
                lat: item.latitude || null,
                lon: item.longitude || null,
                creation_date: item.creation_date
            };
        });
        return responseFormat;
    }
}
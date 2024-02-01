import { ClienteRegisterRequest } from "../controllers/registerCliente";
import { ClienteModel } from "../models/clienteModel";
import { RegisterClienteDB } from "../repositories/register-client-repsitorie";

export class RegisterClientUseCase {
     constructor(private clienteDB:RegisterClienteDB) {}

    public register = async (req:ClienteRegisterRequest) => {
        
        const newCliente = new ClienteModel(
             req.nome ,
             req.email,
             req.telefone ,
             req.coordenada_x? req.coordenada_x:  0,
             req.coordenada_y? req.coordenada_y:  0,
             new Date().toISOString() ,
             )

        const clientDB = newCliente.clienteDB()
        const response = await this.clienteDB.register(clientDB);
        return response
    }
}
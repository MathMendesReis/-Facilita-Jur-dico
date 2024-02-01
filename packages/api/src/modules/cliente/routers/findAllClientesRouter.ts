import { Router } from 'express';
import { FindAllClientesController } from '../controllers/findAllClientes';
import { GetAllClienteUseCase } from '../use-cases/getAllClienteUseCase';
import { ClienteDB } from '../repositories/cliente-repositori';


export const clientRouter = Router();
const findAllClientes = new FindAllClientesController(
    new GetAllClienteUseCase(
    new ClienteDB()
    ),
)

clientRouter.get('/', findAllClientes.findAllClientes);

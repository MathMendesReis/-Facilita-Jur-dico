import { Router } from 'express';
import { FindAllClientesController } from '../controllers/findAllClientes';
import { GetAllClienteUseCase } from '../use-cases/getAllClienteUseCase';
import { ClienteDB } from '../repositories/cliente-repositori';
import { RegisterClienteController } from '../controllers/registerCliente';
import { RegisterClientUseCase } from '../use-cases/registerClient';
import { RegisterClienteDB } from '../repositories/register-client-repsitorie';


export const clientRouter = Router();
const findAllClientes = new FindAllClientesController(
    new GetAllClienteUseCase(
    new ClienteDB()
    ),
)

const registerClienteController = new RegisterClienteController(
    new RegisterClientUseCase(
         new RegisterClienteDB()
    )
)

clientRouter.get('/', findAllClientes.findAllClientes);
clientRouter.post('/register', registerClienteController.registerCliente);

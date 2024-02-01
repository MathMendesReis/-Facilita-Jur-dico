import { Router } from 'express';
import { FindAllClientesController } from '../controllers/findAllClientes';


export const clientRouter = Router();
const findAllClientes = new FindAllClientesController()

clientRouter.get('/', findAllClientes.findAllClientes);

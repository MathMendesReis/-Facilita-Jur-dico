import { Router } from 'express';
import { FindAllClientesController } from '../controllers/findAllClientes';
import { GetAllClienteUseCase } from '../use-cases/getAllClienteUseCase';
import { ClienteDB } from '../repositories/cliente-repositori';
import { RegisterClienteController } from '../controllers/registerCliente';
import { RegisterClientUseCase } from '../use-cases/registerClient';
import { RegisterClienteDB } from '../repositories/register-client-repsitorie';
import { AdressStoreRegisterController } from '../controllers/registerAdressStoreController';
import { RegisterAdressStoreUseCase } from '../use-cases/registerAdressStoreUseCase';
import { AdressStoreDataBase } from '../repositories/registerAdressStore';
import { FindAdressStoreController } from '../controllers/getAdressStore';
import { SorteClientsByAdressController } from '../controllers/sorteClientsByAdressController';
import { SortClientsByAddressUseCase } from '../use-cases/sorteClientsByAdressUseCase';
import { FindAdressStoreUseCase } from '../use-cases/getAdressStore';
import { FindAdressDB } from '../repositories/getAdressStore';


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

const adressStoreRegisterController= new AdressStoreRegisterController(
    new RegisterAdressStoreUseCase(
        new AdressStoreDataBase(),
        new FindAdressStoreUseCase(new FindAdressDB())
    )
)
const findAdressStoreController= new FindAdressStoreController(
    new FindAdressStoreUseCase(
        new FindAdressDB()
    )
)
const sorteClientsByAdressController = new SorteClientsByAdressController(
    new SortClientsByAddressUseCase(
        new GetAllClienteUseCase(new ClienteDB()),
        new FindAdressStoreUseCase(new FindAdressDB())
    )
)
clientRouter.get('/', findAllClientes.findAllClientes);
clientRouter.get('/adress',findAdressStoreController.findAdressStore)
clientRouter.get('/sort',sorteClientsByAdressController.sorteClientsByAdress)
clientRouter.post('/register', registerClienteController.registerCliente);
clientRouter.post('/register/adress',adressStoreRegisterController.registerAdressStore)

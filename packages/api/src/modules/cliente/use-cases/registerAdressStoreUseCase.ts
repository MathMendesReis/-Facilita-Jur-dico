import { AxiosResponse } from "axios";
import { ClienteRegisterRequest } from "../controllers/registerCliente";
import { RegisterClienteDB } from "../repositories/register-client-repsitorie";
import { GeocodingService } from "./GeocodingService";
import { AdressStoreModel } from "../models/adressStore";
import { AdressStoreRegisterRequest } from "../controllers/registerAdressStoreController";
import { AdressStoreDataBase } from "../repositories/registerAdressStore";

export class RegisterAdressStoreUseCase {
     constructor(private DB:AdressStoreDataBase) {}

    public register = async (req:AdressStoreRegisterRequest) => {
        const rua = req.rua
        const cidade = req.cidade
        const estado = req.estado

        const endereco = `Rua ${rua}, ${cidade}, ${estado}`;
        const coordinates = await GeocodingService.getCoordinatesFromAddress(endereco);

       
        const newAdress = new AdressStoreModel(
            'b4bd6b9e-58a9-43a6-9e96-179faf3113cf',
            req.rua,
            req.numero || null,
            req.bairro,
            req.cidade,
            req.estado,
            coordinates?.latitude.substring(1) || null,
            coordinates?.longitude.substring(1) || null,
            new Date().toISOString()
             )

        const AdressStoreDb = newAdress.AdressStoreDB()
         await this.DB.update(AdressStoreDb);
        return AdressStoreDb
    }

    
    
}
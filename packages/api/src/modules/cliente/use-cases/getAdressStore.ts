import { AdressStoreDB } from "../models/adressStore";
import { FindAdressDB } from "../repositories/getAdressStore";

export class FindAdressStoreUseCase {
    constructor(private getAllRegisterDB:FindAdressDB) {}

    public findAdressStore = async ():Promise<AdressStoreDB[]> => {
        const response = await this.getAllRegisterDB.getAll();
        const responseFormat: AdressStoreDB[] = response.map((item) => {
            return {
                id: item.id,
                rua: item.rua,
                numero: item.numero,
                bairro: item.bairro,
                cidade: item.cidade,
                estado: item.estado,
                lat: item.latitude,
                lon: item.longitude,
                creation_date: item.creation_date,
            };
        });
        return responseFormat
    }
}

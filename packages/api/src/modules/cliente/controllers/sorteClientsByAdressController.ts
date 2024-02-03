import { Request, Response } from 'express';
import { SortClientsByAddressUseCase } from '../use-cases/sorteClientsByAdressUseCase';

export class SorteClientsByAdressController {
    constructor(private sorteClientsByAdressUseCase: SortClientsByAddressUseCase) {}
    public sorteClientsByAdress = async (req: Request, res: Response) => {
        try {
            const result = await this.sorteClientsByAdressUseCase.sortClients()
            res.status(200).send(result);
        } catch (error) {
            console.log(error)
            res.status(400).json({ error: 'Erro de validação', issues: error });
        }
    }
        
}
import { Request, Response } from 'express';
import { FindAdressStoreUseCase } from '../use-cases/getAdressStore';

export class FindAdressStoreController {
    constructor(private getAllRegisterUseCase:FindAdressStoreUseCase        ) {}

    public findAdressStore = async (req: Request, res: Response) => {
        try {
            const result = await this.getAllRegisterUseCase.findAdressStore()
            res.status(200).send(result);
        } catch (error) {
            res.status(400).json({ error: 'Erro de validação', issues: error });
        }
    }
}
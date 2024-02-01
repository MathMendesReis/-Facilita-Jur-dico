import { Request, Response } from 'express';
import { GetAllClienteUseCase } from '../use-cases/getAllClienteUseCase';

export class FindAllClientesController {
    constructor(private getAllClienteUseCase:GetAllClienteUseCase) {}

    public findAllClientes = async (req: Request, res: Response) => {
        try {
            const result = await this.getAllClienteUseCase.getAll()
            console.log(result)
            res.status(200).send(result);
        } catch (error) {
            res.status(400).json({ error: 'Erro de validação', issues: 'error' });
        }
    }
}
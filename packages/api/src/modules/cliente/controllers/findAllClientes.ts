import { Request, Response } from 'express';
export class FindAllClientesController {
    public findAllClientes = async (req: Request, res: Response) => {
        try {
            res.status(201).send('response');
        } catch (error) {
            res.status(400).json({ error: 'Erro de validação', issues: 'error' });
        }
    }
}
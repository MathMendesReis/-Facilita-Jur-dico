import { Request, Response } from 'express';
import { RegisterClientUseCase } from '../use-cases/registerClient';
export interface ClienteRegisterRequest {
    nome: string;
    email: string;
    telefone: string;
    coordenada_x?: number;
    coordenada_y?: number;
  }
export class RegisterClienteController {
    constructor(private useCase:RegisterClientUseCase) {}

    public registerCliente = async (req: Request, res: Response) => {
        try {
            const body:ClienteRegisterRequest = {
                nome:req.body.nome,
                email:req.body.email,
                telefone:req.body.telefone,
                coordenada_x: req.body.coordenada_x || 0,
                coordenada_y: req.body.coordenada_y || 0,

            }
            const result = await this.useCase.register(body)
            res.status(200).send(result);
        } catch (error) {
            console.log(error)
            res.status(400).json({ error: 'Erro de validação', issues: 'error: ' + error });
        }
    }
}
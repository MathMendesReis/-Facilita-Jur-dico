import { Request, Response } from 'express';
import { RegisterClientUseCase } from '../use-cases/registerClient';
export interface ClienteRegisterRequest {
    nome: string;
    email: string;
    telefone: string;
    rua:string,
    numero:string | null,
    bairro:string,
    cidade:string,
    estado:string,
  }
export class RegisterClienteController {
    constructor(private useCase:RegisterClientUseCase) {}

    public registerCliente = async (req: Request, res: Response) => {
        try {
            const body:ClienteRegisterRequest = {
                nome:req.body.nome,
                email:req.body.email,
                telefone:req.body.telefone,
                rua:req.body.rua,
                numero:req.body.numero,
                bairro:req.body.bairro,
                cidade:req.body.cidade,
                estado:req.body.estado,
            }
            const result = await this.useCase.register(body)
            res.status(200).send(result);
        } catch (error) {
            console.log(error)
            res.status(400).json({ error: 'Erro de validação', issues: 'error: ' + error });
        }
    }
}
import { Request, Response } from 'express';
import { RegisterAdressStoreUseCase } from '../use-cases/registerAdressStoreUseCase';
export interface AdressStoreRegisterRequest {
    rua:string,
    numero:string | null,
    bairro:string,
    cidade:string,
    estado:string,
  }
export class AdressStoreRegisterController {
    constructor(private useCase:RegisterAdressStoreUseCase) {}

    public registerAdressStore = async (req: Request, res: Response) => {
        try {
            const body:AdressStoreRegisterRequest = {
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
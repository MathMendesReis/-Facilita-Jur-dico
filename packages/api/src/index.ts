import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { clientRouter } from './modules/cliente/routers/clientRouter'
import { CreateDB } from './database/createTables'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(3003), () => {
  console.log(`Servidor rodando na porta 3003`);
});

app.on('listening', async () => {
  const createDB = new CreateDB();
  await createDB.createTablecliente_tb();
  await createDB.createTableadress_tb();
  console.log(`Tabelas criadas`);
});

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('hello world');
  });

app.use('/cliente', clientRouter);

    
import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { clientRouter } from './modules/cliente/routers/clientRouter'
import { CreateDB } from './database/createTables'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT || 3003), () => {
    const createDB = new CreateDB()
    createDB.createTablecliente_tb()
    createDB.createTableadress_tb()
    console.log(`Servidor rodando na porta ${process.env.PORT}`)

})

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('hello world');
  });

app.use('/cliente', clientRouter);

    
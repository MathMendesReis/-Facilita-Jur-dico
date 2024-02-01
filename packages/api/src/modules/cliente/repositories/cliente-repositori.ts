import sql from "../../../database/BaseDataBase";

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  coordenada_x: number;
  coordenada_y: number;
  creation_date: string;
}

export class ClienteDB {
  public getAll = async () => {
    try {
     const reste = await sql`
        SELECT * FROM cliente_tb;
      `;
      return reste;
    
    } catch (error) {
      console.error('Erro ao obter todos os clientes:');
      throw error; // Rejeita o erro para o chamador, se necessário
    }
  }
}

import sql from "../../../database/BaseDataBase";



export class ClienteDB {
  public findAllClients = async () => {
    try {
     const reste = await sql`
        SELECT * FROM cliente_tb;
      `;
      return reste;
    
    } catch (error) {
      console.error('Erro ao obter todos os clientes:');
      throw error; 
    }
  }
}

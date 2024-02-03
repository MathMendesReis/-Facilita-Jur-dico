import postgres from "postgres";
import sql from "../../../database/BaseDataBase";

export class FindAdressDB {
  public getAll = async ():Promise<postgres.RowList<postgres.Row[]>> => {
    try {
     const reste = await sql`
        SELECT * FROM adress_tb ;
      `;
      return reste;
    
    } catch (error) {
      console.error('Erro ao obter todos os clientes:');
      throw error;
    }
  }
}

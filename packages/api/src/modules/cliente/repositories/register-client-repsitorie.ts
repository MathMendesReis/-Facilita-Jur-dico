import sql from "../../../database/BaseDataBase";
import { ClienteDB } from "../models/clienteModel";

export class RegisterClienteDB {
  public register = async (data: ClienteDB) => {
    await sql`
    INSERT INTO cliente_tb (id, nome, email, telefone, rua, numero, bairro, cidade, estado, latitude, longitude, creation_date)
    VALUES
    (${data.id}, ${data.nome}, ${data.email}, ${data.telefone}, 
     ${data.rua}, ${data.numero}, ${data.bairro}, ${data.cidade}, 
     ${data.estado}, ${data.lat}, ${data.lon}, ${data.creation_date});
  `;
    return;
  };
}



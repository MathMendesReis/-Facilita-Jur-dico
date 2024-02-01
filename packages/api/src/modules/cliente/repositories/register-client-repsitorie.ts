import sql from "../../../database/BaseDataBase";
import { ClienteDB } from "../models/clienteModel";

export class RegisterClienteDB {
  public register = async (data: ClienteDB) => {

    const insert = await sql`
      INSERT INTO cliente_tb (id, nome, email, telefone, coordenada_x, coordenada_y, creation_date)
      VALUES
      (${data.id}, ${data.nome}, ${data.email}, ${data.telefone}, ${data.coordenada_x}, ${data.coordenada_y}, '2022-02-01');

    `;

    return data;
  };
}
// (
//   ${data.id},
//   ${data.nome},
//   ${data.email},
//   ${data.telefone},
//   ${data.coordenada_x},
//   ${data.coordenada_y},
//   ${data.creation_date}
// );


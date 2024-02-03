import sql from "../../../database/BaseDataBase";
import { AdressStoreDB } from "../models/adressStore";

export class AdressStoreDataBase {
  public register = async (data: AdressStoreDB) => {
    await sql`
    INSERT INTO adress_tb (id, rua, numero, bairro, cidade, estado, latitude, longitude, creation_date)
    VALUES
    (${data.id}, ${data.rua}, ${data.numero}, ${data.bairro}, ${data.cidade}, ${data.estado}, ${data.lat},${data.lon},${data.creation_date} );
  `;
    return;
  };

  public update = async (data: AdressStoreDB,id:string) => {
    await sql`
      UPDATE adress_tb 
      SET 
        rua = ${data.rua},
        numero = ${data.numero},
        bairro = ${data.bairro},
        cidade = ${data.cidade},
        estado = ${data.estado},
        latitude = ${data.lat},
        longitude = ${data.lon},
        creation_date = ${data.creation_date}
      WHERE id = ${id};
    `;
    return data;
  };
}



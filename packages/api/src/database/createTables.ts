import sql from "./BaseDataBase";

export class CreateDB {
 
    public createTablecliente_tb = async () => {
  
      try {
        await sql`
          CREATE TABLE IF NOT EXISTS cliente_tb (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            telefone VARCHAR(20) NOT NULL,
            rua VARCHAR(255) NOT NULL,
            numero VARCHAR(10),
            bairro VARCHAR(100),
            cidade VARCHAR(100) NOT NULL,
            estado VARCHAR(50) NOT NULL,
            latitude VARCHAR(50),
            longitude VARCHAR(50),
            creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
          );`;
        console.log('create table cliente_tb')
          
        return;
      
      } catch (error) {
      }
    }
 
    public createTableadress_tb = async () => {
  
      try {
        await sql`
        CREATE TABLE IF NOT EXISTS adress_tb (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            rua VARCHAR(255) NOT NULL,
            numero VARCHAR(10),
            bairro VARCHAR(100),
            cidade VARCHAR(100) NOT NULL,
            estado VARCHAR(50) NOT NULL,
            latitude VARCHAR(50),
            longitude VARCHAR(50),
            creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
            );
        `
        console.log('create table adress_tb ')

        return;
      
      } catch (error) {
      }
    }
 
  }
  
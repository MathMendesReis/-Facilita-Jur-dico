-- Active: 1706794596312@@127.0.0.1@3306
CREATE TABLE cliente_tb (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    latitude VARCHAR(50) ,
    longitude VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE adress_tb (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    latitude VARCHAR(50) ,
    longitude VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);



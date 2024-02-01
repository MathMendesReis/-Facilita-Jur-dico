-- Active: 1706794596312@@127.0.0.1@3306
CREATE TABLE clientes (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    coordenada_x DECIMAL(10, 6) NOT NULL,
    coordenada_y DECIMAL(10, 6) NOT NULL
);
